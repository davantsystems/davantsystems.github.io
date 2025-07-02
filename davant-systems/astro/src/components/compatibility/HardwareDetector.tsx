import type { DetectedSpecs } from '../../lib/compatibility/types';

export class HardwareDetector {
  private canvas: HTMLCanvasElement | null = null;
  private gl: WebGLRenderingContext | WebGL2RenderingContext | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeWebGL();
    }
  }

  private initializeWebGL(): void {
    try {
      this.canvas = document.createElement('canvas');
      this.gl = this.canvas.getContext('webgl2') || this.canvas.getContext('webgl');
    } catch (e) {
      console.error('WebGL initialization failed:', e);
    }
  }

  async detectSpecs(): Promise<DetectedSpecs> {
    const platform = this.detectPlatform();
    const gpuInfo = this.detectGPU();
    const screenInfo = this.detectScreen();
    const cpuInfo = this.detectCPU();
    const memoryInfo = this.detectMemory();

    return {
      platform,
      gpuRenderer: gpuInfo.renderer,
      webglVersion: gpuInfo.version,
      webglExtensions: gpuInfo.extensions,
      screenResolution: screenInfo,
      cpuCores: cpuInfo.cores,
      deviceMemory: memoryInfo,
      userAgent: navigator.userAgent,
    };
  }

  private detectPlatform(): 'windows' | 'mac' | 'linux' | 'unknown' {
    const userAgent = navigator.userAgent.toLowerCase();
    const platform = navigator.platform.toLowerCase();

    if (platform.includes('win') || userAgent.includes('windows')) {
      return 'windows';
    } else if (platform.includes('mac') || userAgent.includes('macintosh')) {
      return 'mac';
    } else if (platform.includes('linux') || userAgent.includes('linux')) {
      return 'linux';
    }
    return 'unknown';
  }

  private detectGPU(): { renderer: string; version: number; extensions: string[] } {
    if (!this.gl) {
      return { renderer: 'Unknown', version: 0, extensions: [] };
    }

    let renderer = 'Unknown GPU';
    let version = 1;

    try {
      const debugInfo = this.gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const vendorId = debugInfo.UNMASKED_VENDOR_WEBGL;
        const rendererId = debugInfo.UNMASKED_RENDERER_WEBGL;
        
        const vendor = this.gl.getParameter(vendorId) || '';
        renderer = this.gl.getParameter(rendererId) || 'Unknown GPU';
        
        // Clean up renderer string
        renderer = renderer.replace(/ANGLE \(/, '').replace(/\)$/, '');
      }

      // Detect WebGL version
      if (this.gl instanceof WebGL2RenderingContext) {
        version = 2;
      }

      // Get supported extensions
      const extensions = this.gl.getSupportedExtensions() || [];
      
      // Enhanced Apple Silicon detection
      if (renderer === 'Apple GPU' || renderer.toLowerCase().includes('apple gpu')) {
        // This is likely Apple Silicon, try to determine which model
        const appleModel = this.detectAppleSiliconModel();
        if (appleModel) {
          renderer = `Apple ${appleModel}`;
        }
      }
      
      return { renderer, version, extensions };
    } catch (e) {
      console.error('GPU detection error:', e);
      return { renderer, version, extensions: [] };
    }
  }

  private detectScreen(): { width: number; height: number } {
    return {
      width: window.screen.width * (window.devicePixelRatio || 1),
      height: window.screen.height * (window.devicePixelRatio || 1),
    };
  }

  private detectCPU(): { cores: number } {
    return {
      cores: navigator.hardwareConcurrency || 4, // Default to 4 if not available
    };
  }

  private detectMemory(): number | undefined {
    // This is only available in some browsers and requires specific permissions
    const nav = navigator as any;
    if (nav.deviceMemory) {
      return nav.deviceMemory; // Returns in GB
    }
    return undefined;
  }

  private detectAppleSiliconModel(): string | null {
    // Use multiple signals to infer Apple Silicon model
    const platform = navigator.platform;
    const userAgent = navigator.userAgent;
    const cores = navigator.hardwareConcurrency || 0;
    
    // Check if this is a Mac
    if (!platform.includes('Mac')) {
      return null;
    }

    // Try to detect from Chrome's detailed renderer string
    if (this.gl) {
      try {
        const debugInfo = this.gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          const renderer = this.gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '';
          // Chrome provides more detailed info
          const appleMatch = renderer.match(/Apple\s*(M\d+(?:\s*(?:Pro|Max|Ultra))?)/i);
          if (appleMatch) {
            return appleMatch[1];
          }
        }
      } catch (e) {
        // Ignore errors
      }
    }

    // Fallback heuristics based on core count and other factors
    // M3 series launched in late 2023
    const year = new Date().getFullYear();
    const isRecent = year >= 2023;

    // Use core count as a hint
    if (cores >= 20) {
      // M3 Max has 16 performance + 4 efficiency = 20 cores
      // M2 Ultra has up to 24 cores
      // M1 Ultra has up to 20 cores
      return isRecent ? 'M3 Max' : 'M2 Ultra';
    } else if (cores >= 16) {
      // M3 Pro has up to 12 performance + 6 efficiency = 18 cores
      // M2 Max has 12 cores (8 performance + 4 efficiency)
      // M1 Max has 10 cores
      return isRecent ? 'M3 Pro' : 'M2 Max';
    } else if (cores >= 12) {
      // M2 Pro has 10-12 cores
      // M3 base has 8 cores
      return 'M2 Pro';
    } else if (cores >= 10) {
      // M2 has 8 cores, M1 Pro has 8-10 cores
      return 'M2';
    } else if (cores >= 8) {
      // Base M1/M2/M3 have 8 cores
      // Without more info, assume M2 as middle ground
      return 'M2';
    }

    // If we can't determine, return generic Apple Silicon
    return 'Apple Silicon';
  }

  // Parse GPU renderer string to extract useful information
  parseGPUString(renderer: string): {
    vendor: string;
    model: string;
    isAppleSilicon: boolean;
  } {
    const normalized = renderer.toLowerCase();
    
    // Check for Apple Silicon - enhanced detection
    const isAppleSilicon = normalized.includes('apple m1') || 
                          normalized.includes('apple m2') || 
                          normalized.includes('apple m3') ||
                          normalized.includes('apple gpu') ||
                          normalized.includes('apple silicon') ||
                          (normalized === 'apple' && this.detectPlatform() === 'mac');

    // Extract vendor
    let vendor = 'Unknown';
    if (normalized.includes('nvidia')) vendor = 'NVIDIA';
    else if (normalized.includes('amd') || normalized.includes('radeon')) vendor = 'AMD';
    else if (normalized.includes('intel')) vendor = 'Intel';
    else if (normalized.includes('apple')) vendor = 'Apple';

    // Try to extract model number
    let model = renderer;
    
    // NVIDIA pattern matching
    const nvidiaMatch = renderer.match(/(?:GeForce )?(RTX|GTX)?\s*(\d{4}(?:\s*Ti)?(?:\s*SUPER)?)/i);
    if (nvidiaMatch) {
      model = `${nvidiaMatch[1] || 'GTX'} ${nvidiaMatch[2]}`.trim();
    }

    // Apple Silicon pattern matching - enhanced
    const appleMatch = renderer.match(/Apple\s*(M\d+(?:\s*(?:Pro|Max|Ultra))?)/i);
    if (appleMatch) {
      model = appleMatch[1];
    } else if (isAppleSilicon && model === 'Apple GPU') {
      // If we detected Apple Silicon but only have "Apple GPU", use our detection
      const detectedModel = this.detectAppleSiliconModel();
      if (detectedModel && detectedModel !== 'Apple Silicon') {
        model = detectedModel;
      }
    }

    return { vendor, model, isAppleSilicon };
  }

  cleanup(): void {
    if (this.canvas) {
      this.canvas.remove();
      this.canvas = null;
    }
    this.gl = null;
  }
}

// React component wrapper
import React, { useEffect, useState } from 'react';

interface HardwareDetectorProps {
  onDetectionComplete: (specs: DetectedSpecs) => void;
  onDetectionProgress: (message: string) => void;
}

export const HardwareDetectorComponent: React.FC<HardwareDetectorProps> = ({
  onDetectionComplete,
  onDetectionProgress,
}) => {
  const [isDetecting, setIsDetecting] = useState(true);

  useEffect(() => {
    const detector = new HardwareDetector();
    
    const runDetection = async () => {
      try {
        onDetectionProgress('Initializing WebGL context...');
        await new Promise(resolve => setTimeout(resolve, 500));
        
        onDetectionProgress('Detecting GPU information...');
        await new Promise(resolve => setTimeout(resolve, 800));
        
        onDetectionProgress('Analyzing system capabilities...');
        await new Promise(resolve => setTimeout(resolve, 600));
        
        const specs = await detector.detectSpecs();
        onDetectionComplete(specs);
        setIsDetecting(false);
      } catch (error) {
        console.error('Detection failed:', error);
        onDetectionProgress('Detection failed. Please provide information manually.');
        setIsDetecting(false);
      } finally {
        detector.cleanup();
      }
    };

    runDetection();

    return () => {
      detector.cleanup();
    };
  }, [onDetectionComplete, onDetectionProgress]);

  return null; // This component doesn't render anything
};