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
      
      console.log('GPU Detection - Raw renderer:', renderer, 'WebGL version:', version);
      
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
    // Try the deviceMemory API first (limited browser support)
    const nav = navigator as any;
    
    // Check if Device Memory API is available
    console.log('Device Memory API available:', 'deviceMemory' in nav);
    
    if (nav.deviceMemory) {
      console.log('Device Memory API returned:', nav.deviceMemory, 'GB');
      
      // The Device Memory API often returns privacy-preserving rounded values
      // For Apple Silicon, validate against known configurations
      const platform = this.detectPlatform();
      const cores = navigator.hardwareConcurrency || 0;
      
      if (platform === 'mac' && cores >= 8) {
        const appleModel = this.detectAppleSiliconModel();
        console.log('Validating Device Memory API result against known Apple Silicon configs');
        console.log('Detected model:', appleModel, 'Cores:', cores, 'API says:', nav.deviceMemory, 'GB');
        
        // M2 Pro with 10 cores typically has 16GB or 32GB, rarely 8GB
        if (appleModel?.includes('M2 Pro') && cores === 10 && nav.deviceMemory === 8) {
          console.log('Device Memory API likely incorrect for M2 Pro - using fallback detection');
          // Fall through to use our heuristic-based detection
        } else {
          return nav.deviceMemory; // Trust the API for other cases
        }
      } else {
        return nav.deviceMemory; // Trust the API for non-Apple Silicon
      }
    }
    
    console.log('Device Memory API not supported, using fallback detection');

    // Enhanced fallback detection for M2 MacBooks and other systems
    const platform = this.detectPlatform();
    const cores = navigator.hardwareConcurrency || 0;
    const userAgent = navigator.userAgent.toLowerCase();

    // Apple Silicon memory estimation based on model and core count
    if (platform === 'mac') {
      // Try to extract specific Apple Silicon model from GPU renderer
      const appleModel = this.detectAppleSiliconModel();
      console.log('Memory detection - Platform:', platform, 'Model:', appleModel, 'Cores:', cores);
      
      // M3 series memory configurations
      if (appleModel?.includes('M3')) {
        if (appleModel.includes('Max')) {
          return cores >= 16 ? 64 : 36; // M3 Max: 36GB or 64GB
        } else if (appleModel.includes('Pro')) {
          return cores >= 12 ? 36 : 18; // M3 Pro: 18GB or 36GB
        } else {
          return cores >= 8 ? 24 : 8; // M3: 8GB or 24GB
        }
      }
      
      // M2 series memory configurations
      if (appleModel?.includes('M2')) {
        if (appleModel.includes('Max')) {
          return cores >= 12 ? 64 : 32; // M2 Max: 32GB or 64GB
        } else if (appleModel.includes('Pro')) {
          // M2 Pro comes in 16GB or 32GB configurations
          // M2 Pro has 10-12 CPU cores (6-8 performance + 4 efficiency)
          // Most common configuration is 16GB
          return 16; // Default to 16GB for M2 Pro
        } else {
          // Base M2 - common configurations are 8GB, 16GB, or 24GB
          // With 8 cores, could be 8GB or 16GB
          // Default to 8GB for base M2 as it's most common
          return 8; // Most common base M2 configuration
        }
      }
      
      // M1 series memory configurations
      if (appleModel?.includes('M1')) {
        if (appleModel.includes('Max')) {
          return cores >= 10 ? 64 : 32; // M1 Max: 32GB or 64GB
        } else if (appleModel.includes('Pro')) {
          return cores >= 8 ? 32 : 16; // M1 Pro: 16GB or 32GB
        } else {
          return cores >= 8 ? 16 : 8; // M1: 8GB or 16GB
        }
      }
      
      // If we detected Apple Silicon but couldn't determine specific model
      if (appleModel === 'Apple Silicon' && cores >= 8) {
        // Most Apple Silicon Macs with 8+ cores have at least 16GB
        return 16;
      }
      
      // Intel Mac fallback - assume at least 8GB, likely 16GB+ for recent models
      return cores >= 8 ? 16 : 8;
    }

    // Windows/Linux estimation based on core count (rough heuristics)
    if (platform === 'windows' || platform === 'linux') {
      if (cores >= 16) return 32; // High-end systems usually have 32GB+
      if (cores >= 12) return 16; // Mid-high systems usually have 16GB+
      if (cores >= 8) return 16;  // Modern systems usually have 16GB
      if (cores >= 4) return 8;   // Entry systems usually have 8GB
      return 4; // Very low-end fallback
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
    const isRecent = year >= 2024;

    console.log('detectAppleSiliconModel fallback - cores:', cores, 'year:', year);

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
    } else if (cores === 10) {
      // 10 cores is specific to M1 Pro and M2 Pro
      // M2 Pro launched in early 2023
      if (this.gl) {
        try {
          const debugInfo = this.gl.getExtension('WEBGL_debug_renderer_info');
          if (debugInfo) {
            const renderer = this.gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '';
            console.log('GPU renderer for 10-core model detection:', renderer);
          }
        } catch (e) {
          // Ignore
        }
      }
      // With 10 cores, it's definitely a Pro model
      return isRecent ? 'M2 Pro' : 'M1 Pro';
    } else if (cores === 8) {
      // Base M1/M2/M3 have 8 cores
      // Without more info, assume M2 as it's most common now
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