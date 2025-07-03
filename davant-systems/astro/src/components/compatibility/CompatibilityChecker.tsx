import React, { useState, useRef, useEffect, useCallback } from 'react';
import { HardwareDetector } from './HardwareDetector';

interface SystemSpecs {
  detected: {
    platform: string;
    osVersion: string;
    gpuRenderer: string;
    webglVersion: number;
    cpuCores: number;
    cpuModel: string;
    screenResolution: { width: number; height: number };
    deviceMemory?: number;
  };
  userProvided: {
    gpuModel?: string;
    systemRAM?: number;
  };
}

interface CompatibilityResult {
  score: number;
  tier: 'optimal' | 'recommended' | 'minimum' | 'incompatible';
  scores: {
    gpu: number;
    cpu: number;
    ram: number;
  };
  recommendations: string[];
}

interface DetectionMessage {
  text: string;
  type: 'platform' | 'gpu' | 'cpu' | 'storage' | 'screen' | 'webgl';
  confidence?: 'high' | 'medium' | 'low';
  value?: string;
}

type Phase = 'choice' | 'detection' | 'input' | 'results';

const initialSystemSpecs: SystemSpecs = {
  detected: {
    platform: 'unknown',
    osVersion: '',
    gpuRenderer: '',
    webglVersion: 0,
    cpuCores: 0,
    cpuModel: '',
    screenResolution: { width: 0, height: 0 },
    deviceMemory: undefined
  },
  userProvided: {}
};

const REQUIREMENTS = {
  gpu: {
    minimum: 'RTX 3060',
    recommended: 'RTX 4070',
    minVRAM: 6,
    recVRAM: 8
  },
  cpu: {
    minCores: 4,
    recCores: 8
  },
  ram: {
    minimum: 16,
    recommended: 32
  }
};

const CPU_OPTIONS_BY_OS = {
  windows: [
    { group: 'Intel Core (13th Gen)', options: [
      { value: 'i9-13th', text: 'Core i9-13900K' },
      { value: 'i7-13th', text: 'Core i7-13700K' },
      { value: 'i5-13th', text: 'Core i5-13600K' }
    ]},
    { group: 'Intel Core (12th Gen)', options: [
      { value: 'i9-12th', text: 'Core i9-12900K' },
      { value: 'i7-12th', text: 'Core i7-12700K' },
      { value: 'i5-12th', text: 'Core i5-12600K' }
    ]},
    { group: 'AMD Ryzen 7000', options: [
      { value: 'ryzen-9-7000', text: 'Ryzen 9 7950X' },
      { value: 'ryzen-7-7000', text: 'Ryzen 7 7700X' },
      { value: 'ryzen-5-7000', text: 'Ryzen 5 7600X' }
    ]},
    { group: 'AMD Ryzen 5000', options: [
      { value: 'ryzen-9-5000', text: 'Ryzen 9 5950X' },
      { value: 'ryzen-7-5000', text: 'Ryzen 7 5800X' },
      { value: 'ryzen-5-5000', text: 'Ryzen 5 5600X' }
    ]}
  ],
  mac: [
    { group: 'Apple Silicon', options: [
      { value: 'm3-max', text: 'M3 Max' },
      { value: 'm3-pro', text: 'M3 Pro' },
      { value: 'm3', text: 'M3' },
      { value: 'm2-max', text: 'M2 Max' },
      { value: 'm2-pro', text: 'M2 Pro' },
      { value: 'm2', text: 'M2' },
      { value: 'm1-max', text: 'M1 Max' },
      { value: 'm1-pro', text: 'M1 Pro' },
      { value: 'm1', text: 'M1' }
    ]},
    { group: 'Intel (Older Macs)', options: [
      { value: 'i9-intel-mac', text: 'Core i9 (Intel Mac)' },
      { value: 'i7-intel-mac', text: 'Core i7 (Intel Mac)' },
      { value: 'i5-intel-mac', text: 'Core i5 (Intel Mac)' }
    ]}
  ],
  linux: [
    { group: 'Intel Core', options: [
      { value: 'i9-13th', text: 'Core i9-13900K' },
      { value: 'i7-13th', text: 'Core i7-13700K' },
      { value: 'i5-13th', text: 'Core i5-13600K' },
      { value: 'i3', text: 'Core i3' }
    ]},
    { group: 'AMD Ryzen', options: [
      { value: 'ryzen-9-7000', text: 'Ryzen 9 7950X' },
      { value: 'ryzen-7-7000', text: 'Ryzen 7 7700X' },
      { value: 'ryzen-5-7000', text: 'Ryzen 5 7600X' }
    ]}
  ]
};

const CPU_CORES_MAP: Record<string, number> = {
  'm3-max': 16,
  'm3-pro': 12,
  'm3': 8,
  'm2-max': 12,
  'm2-pro': 12,
  'm2': 8,
  'm1-max': 10,
  'm1-pro': 10,
  'm1': 8,
  'i9-13th': 24,
  'i9-12th': 16,
  'i7-13th': 16,
  'i7-12th': 12,
  'i5-13th': 14,
  'i5-12th': 10,
  'i3': 4,
  'ryzen-9-7000': 16,
  'ryzen-9-5000': 16,
  'ryzen-7-7000': 8,
  'ryzen-7-5000': 8,
  'ryzen-5-7000': 6,
  'ryzen-5-5000': 6,
  'i9-intel-mac': 8,
  'i7-intel-mac': 6,
  'i5-intel-mac': 4,
  'other': 4
};

const GPU_MODELS_BY_BRAND = {
  nvidia: {
    'RTX 40 Series': [
      { value: 'rtx-4090', text: 'RTX 4090' },
      { value: 'rtx-4080', text: 'RTX 4080' },
      { value: 'rtx-4070ti', text: 'RTX 4070 Ti' },
      { value: 'rtx-4070', text: 'RTX 4070' },
      { value: 'rtx-4060ti', text: 'RTX 4060 Ti' },
      { value: 'rtx-4060', text: 'RTX 4060' }
    ],
    'RTX 30 Series': [
      { value: 'rtx-3090ti', text: 'RTX 3090 Ti' },
      { value: 'rtx-3090', text: 'RTX 3090' },
      { value: 'rtx-3080ti', text: 'RTX 3080 Ti' },
      { value: 'rtx-3080', text: 'RTX 3080' },
      { value: 'rtx-3070ti', text: 'RTX 3070 Ti' },
      { value: 'rtx-3070', text: 'RTX 3070' },
      { value: 'rtx-3060ti', text: 'RTX 3060 Ti' },
      { value: 'rtx-3060', text: 'RTX 3060' }
    ],
    'RTX 20 Series': [
      { value: 'rtx-2080ti', text: 'RTX 2080 Ti' },
      { value: 'rtx-2080super', text: 'RTX 2080 Super' },
      { value: 'rtx-2080', text: 'RTX 2080' },
      { value: 'rtx-2070super', text: 'RTX 2070 Super' },
      { value: 'rtx-2070', text: 'RTX 2070' },
      { value: 'rtx-2060super', text: 'RTX 2060 Super' },
      { value: 'rtx-2060', text: 'RTX 2060' }
    ],
    'GTX Series': [
      { value: 'gtx-1660ti', text: 'GTX 1660 Ti' },
      { value: 'gtx-1660super', text: 'GTX 1660 Super' },
      { value: 'gtx-1660', text: 'GTX 1660' },
      { value: 'gtx-1650super', text: 'GTX 1650 Super' },
      { value: 'gtx-1650', text: 'GTX 1650' },
      { value: 'gtx-1080ti', text: 'GTX 1080 Ti' },
      { value: 'gtx-1080', text: 'GTX 1080' },
      { value: 'gtx-1070ti', text: 'GTX 1070 Ti' },
      { value: 'gtx-1070', text: 'GTX 1070' },
      { value: 'gtx-1060', text: 'GTX 1060' },
      { value: 'gtx-1050ti', text: 'GTX 1050 Ti' }
    ]
  },
  amd: {
    'RX 7000 Series': [
      { value: 'rx-7900xtx', text: 'RX 7900 XTX' },
      { value: 'rx-7900xt', text: 'RX 7900 XT' },
      { value: 'rx-7800xt', text: 'RX 7800 XT' },
      { value: 'rx-7700xt', text: 'RX 7700 XT' },
      { value: 'rx-7600', text: 'RX 7600' }
    ],
    'RX 6000 Series': [
      { value: 'rx-6950xt', text: 'RX 6950 XT' },
      { value: 'rx-6900xt', text: 'RX 6900 XT' },
      { value: 'rx-6800xt', text: 'RX 6800 XT' },
      { value: 'rx-6800', text: 'RX 6800' },
      { value: 'rx-6700xt', text: 'RX 6700 XT' },
      { value: 'rx-6650xt', text: 'RX 6650 XT' },
      { value: 'rx-6600xt', text: 'RX 6600 XT' },
      { value: 'rx-6600', text: 'RX 6600' }
    ]
  },
  apple: {
    'M-Series GPUs': [
      { value: 'm3-max', text: 'M3 Max GPU (40-core)' },
      { value: 'm3-pro', text: 'M3 Pro GPU (18-core)' },
      { value: 'm3', text: 'M3 GPU (10-core)' },
      { value: 'm2-max', text: 'M2 Max GPU (38-core)' },
      { value: 'm2-pro', text: 'M2 Pro GPU (19-core)' },
      { value: 'm2', text: 'M2 GPU (10-core)' },
      { value: 'm1-max', text: 'M1 Max GPU (32-core)' },
      { value: 'm1-pro', text: 'M1 Pro GPU (16-core)' },
      { value: 'm1', text: 'M1 GPU (8-core)' }
    ]
  },
  intel: {
    'Arc Series': [
      { value: 'arc-a770', text: 'Arc A770' },
      { value: 'arc-a750', text: 'Arc A750' },
      { value: 'arc-a580', text: 'Arc A580' },
      { value: 'arc-a380', text: 'Arc A380' }
    ],
    'Integrated Graphics': [
      { value: 'iris-xe', text: 'Iris Xe Graphics' },
      { value: 'uhd-770', text: 'UHD Graphics 770' },
      { value: 'uhd-730', text: 'UHD Graphics 730' }
    ]
  }
};

const GPU_SCORES: Record<string, number> = {
  'rtx-4090': 100,
  'rtx-4080': 95,
  'rtx-4070ti': 90,
  'rtx-4070': 85,
  'rtx-4060ti': 75,
  'rtx-4060': 70,
  'rtx-3090ti': 88,
  'rtx-3090': 85,
  'rtx-3080ti': 83,
  'rtx-3080': 80,
  'rtx-3070ti': 75,
  'rtx-3070': 72,
  'rtx-3060ti': 68,
  'rtx-3060': 65,
  'rtx-2080ti': 70,
  'rtx-2080super': 68,
  'rtx-2080': 65,
  'rtx-2070super': 62,
  'rtx-2070': 60,
  'rtx-2060super': 55,
  'rtx-2060': 50,
  'gtx-1660ti': 45,
  'gtx-1660super': 43,
  'gtx-1660': 40,
  'gtx-1650super': 35,
  'gtx-1650': 30,
  'gtx-1080ti': 60,
  'gtx-1080': 55,
  'gtx-1070ti': 50,
  'gtx-1070': 48,
  'gtx-1060': 40,
  'gtx-1050ti': 25,
  'rx-7900xtx': 92,
  'rx-7900xt': 88,
  'rx-7800xt': 80,
  'rx-7700xt': 75,
  'rx-7600': 65,
  'rx-6950xt': 85,
  'rx-6900xt': 82,
  'rx-6800xt': 78,
  'rx-6800': 75,
  'rx-6700xt': 68,
  'rx-6650xt': 62,
  'rx-6600xt': 60,
  'rx-6600': 55,
  'm3-max': 88,
  'm3-pro': 78,
  'm3': 70,
  'm2-max': 82,
  'm2-pro': 72,
  'm2': 65,
  'm1-max': 75,
  'm1-pro': 68,
  'm1': 60,
  'arc-a770': 65,
  'arc-a750': 60,
  'arc-a580': 50,
  'arc-a380': 40,
  'iris-xe': 25,
  'uhd-770': 20,
  'uhd-730': 15,
  'other': 30
};

export default function CompatibilityChecker() {
  const [phase, setPhase] = useState<Phase>('choice');
  const [systemSpecs, setSystemSpecs] = useState<SystemSpecs>(initialSystemSpecs);
  const [detectionStatus, setDetectionStatus] = useState('Analyzing hardware...');
  const [detectionMessages, setDetectionMessages] = useState<DetectionMessage[]>([]);
  const [progressPercent, setProgressPercent] = useState(0);
  const [result, setResult] = useState<CompatibilityResult | null>(null);
  
  // Debug phase changes
  useEffect(() => {
    console.log('Phase changed to:', phase);
  }, [phase]);
  
  // Ensure we start at choice phase
  useEffect(() => {
    console.log('Component mounted, initial phase:', phase);
    // Force reset to choice if somehow we're not there
    if (phase !== 'choice' && !result) {
      console.warn('Unexpected initial phase, resetting to choice');
      setPhase('choice');
    }
  }, []);
  
  const [formData, setFormData] = useState({
    os: '',
    cpuModel: '',
    gpuBrand: '',
    gpuModel: '',
    systemRAM: ''
  });
  
  const [cpuOptions, setCpuOptions] = useState<typeof CPU_OPTIONS_BY_OS.windows>([]);
  const [gpuModels, setGpuModels] = useState<typeof GPU_MODELS_BY_BRAND.nvidia | null>(null);
  const [scoreAnimation, setScoreAnimation] = useState({ value: 0, target: 0 });
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scoreCircleRef = useRef<SVGCircleElement>(null);
  const animationRef = useRef<number>();

  const detectWebGL = useCallback(() => {
    if (!canvasRef.current) return 0;
    
    try {
      const gl = canvasRef.current.getContext('webgl2') || 
                 canvasRef.current.getContext('webgl') || 
                 canvasRef.current.getContext('experimental-webgl');
      
      if (!gl) return 0;
      
      if (gl instanceof WebGL2RenderingContext) return 2;
      if (gl instanceof WebGLRenderingContext) return 1;
      
      return 0;
    } catch (e) {
      return 0;
    }
  }, []);

  const detectGPU = useCallback(() => {
    if (!canvasRef.current) return '';
    
    try {
      const gl = canvasRef.current.getContext('webgl2') || 
                 canvasRef.current.getContext('webgl') || 
                 canvasRef.current.getContext('experimental-webgl');
      
      if (!gl) return '';
      
      const debugInfo = (gl as any).getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        return (gl as any).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '';
      }
      
      return '';
    } catch (e) {
      return '';
    }
  }, []);

  const detectSpecs = useCallback(async () => {
    // Create a fresh specs object instead of spreading existing state
    const newSpecs: SystemSpecs = {
      detected: {
        platform: 'unknown',
        osVersion: '',
        gpuRenderer: '',
        webglVersion: 0,
        cpuCores: 0,
        cpuModel: '',
        screenResolution: { width: 0, height: 0 },
        deviceMemory: undefined
      },
      userProvided: {}
    };
    
    // Use HardwareDetector for comprehensive detection
    const detector = new HardwareDetector();
    try {
      const detectedSpecs = await detector.detectSpecs();
      
      // Map detected platform
      if (detectedSpecs.platform === 'windows') {
        newSpecs.detected.platform = 'Windows';
      } else if (detectedSpecs.platform === 'mac') {
        newSpecs.detected.platform = 'macOS';
      } else if (detectedSpecs.platform === 'linux') {
        newSpecs.detected.platform = 'Linux';
      } else {
        newSpecs.detected.platform = 'Unknown';
      }
      
      // Store user agent for later parsing in getOSDisplayName
      newSpecs.detected.osVersion = detectedSpecs.userAgent;
      newSpecs.detected.cpuCores = detectedSpecs.cpuCores;
      newSpecs.detected.screenResolution = detectedSpecs.screenResolution;
      newSpecs.detected.webglVersion = detectedSpecs.webglVersion;
      newSpecs.detected.gpuRenderer = detectedSpecs.gpuRenderer;
      newSpecs.detected.deviceMemory = detectedSpecs.deviceMemory;
      
      // Parse GPU info for better model detection
      const gpuInfo = detector.parseGPUString(detectedSpecs.gpuRenderer);
      if (gpuInfo.model && gpuInfo.model !== 'Unknown GPU') {
        newSpecs.detected.cpuModel = gpuInfo.isAppleSilicon ? `Apple ${gpuInfo.model}` : 'Unknown CPU';
      }
      
      detector.cleanup();
    } catch (error) {
      console.error('Hardware detection failed:', error);
      // Fallback to basic detection
      const platform = navigator.platform.toLowerCase();
      if (platform.includes('win')) {
        newSpecs.detected.platform = 'Windows';
      } else if (platform.includes('mac')) {
        newSpecs.detected.platform = 'macOS';
      } else if (platform.includes('linux')) {
        newSpecs.detected.platform = 'Linux';
      }
      
      newSpecs.detected.osVersion = navigator.userAgent;
      newSpecs.detected.cpuCores = navigator.hardwareConcurrency || 0;
      newSpecs.detected.screenResolution = {
        width: window.screen.width,
        height: window.screen.height
      };
      
      if (canvasRef.current) {
        newSpecs.detected.webglVersion = detectWebGL();
        newSpecs.detected.gpuRenderer = detectGPU();
      }
    }
    
    setSystemSpecs(newSpecs);
    return newSpecs;
  }, [detectWebGL, detectGPU]);

  const calculateCompatibility = useCallback((specs: SystemSpecs): CompatibilityResult => {
    const gpuScore = calculateGPUScore(specs);
    const cpuScore = calculateCPUScore(specs);
    const ramScore = calculateRAMScore(specs);
    
    const overallScore = Math.round((gpuScore * 0.5) + (cpuScore * 0.3) + (ramScore * 0.2));
    const minScore = Math.min(gpuScore, cpuScore, ramScore);
    
    let tier: CompatibilityResult['tier'] = 'recommended';
    
    if (minScore < 30 || overallScore < 40) {
      tier = 'incompatible';
    } else if (minScore < 50 || overallScore < 60) {
      tier = 'minimum';
    } else if (overallScore >= 80 && minScore >= 70) {
      tier = 'optimal';
    }
    
    const recommendations = generateRecommendations({ gpu: gpuScore, cpu: cpuScore, ram: ramScore }, specs);
    
    return { score: overallScore, tier, scores: { gpu: gpuScore, cpu: cpuScore, ram: ramScore }, recommendations };
  }, []);

  const calculateGPUScore = (specs: SystemSpecs): number => {
    const gpuModel = specs.userProvided.gpuModel || '';
    return GPU_SCORES[gpuModel] || 30;
  };

  const calculateCPUScore = (specs: SystemSpecs): number => {
    const cores = specs.detected.cpuCores || 0;
    
    if (cores >= 16) return 100;
    if (cores >= 12) return 85;
    if (cores >= 8) return 70;
    if (cores >= 6) return 55;
    if (cores >= 4) return 40;
    return 20;
  };

  const calculateRAMScore = (specs: SystemSpecs): number => {
    // Use detected memory first, then fall back to user-provided
    const ram = specs.detected.deviceMemory || specs.userProvided.systemRAM || 0;
    
    if (ram >= 64) return 100;
    if (ram >= 32) return 85;
    if (ram >= 24) return 70;
    if (ram >= 16) return 55;
    if (ram >= 12) return 40;
    if (ram >= 8) return 25;
    return 10;
  };

  const generateRecommendations = (scores: CompatibilityResult['scores'], specs: SystemSpecs): string[] => {
    const recommendations: string[] = [];
    
    if (scores.gpu < 50) {
      recommendations.push('Upgrade to at least an NVIDIA RTX 3060 or Apple M1 for basic functionality');
    } else if (scores.gpu < 80) {
      recommendations.push('Consider upgrading to an RTX 4070 or M2 Pro for optimal performance');
    }
    
    const currentRAM = specs.detected.deviceMemory || specs.userProvided.systemRAM || 0;
    if (currentRAM > 0 && currentRAM < REQUIREMENTS.ram.minimum) {
      recommendations.push(`Upgrade RAM from ${currentRAM}GB to at least ${REQUIREMENTS.ram.minimum}GB`);
    } else if (currentRAM < REQUIREMENTS.ram.recommended) {
      recommendations.push(`Consider upgrading to ${REQUIREMENTS.ram.recommended}GB RAM for better multitasking`);
    }
    
    recommendations.push('Note: We recommend at least 40GB of free storage for Stable Diffusion models');
    
    if (recommendations.length === 1) {
      recommendations.unshift('Your system exceeds recommended specifications!');
      recommendations.push('Enable GPU acceleration in Davant Studio for maximum performance');
    }
    
    return recommendations;
  };

  const getOSDisplayName = (specs: SystemSpecs): string => {
    const userAgent = specs.detected.osVersion || navigator.userAgent;
    const platform = specs.detected.platform;
    
    if (platform === 'macOS') {
      // Try to extract macOS version from user agent
      // Modern macOS reports version differently
      const macOSMatch = userAgent.match(/Mac OS X (\d+)[_.](\d+)(?:[_.](\d+))?/);
      if (macOSMatch) {
        const major = parseInt(macOSMatch[1]);
        const minor = parseInt(macOSMatch[2]);
        
        // Map version numbers to macOS names
        if (major === 10) {
          if (minor === 15) return 'macOS Catalina 10.15';
          if (minor === 14) return 'macOS Mojave 10.14';
          if (minor === 13) return 'macOS High Sierra 10.13';
          if (minor === 12) return 'macOS Sierra 10.12';
        } else if (major >= 11) {
          // macOS 11+ uses major version numbering
          if (major === 11) return 'macOS Big Sur 11';
          if (major === 12) return 'macOS Monterey 12';
          if (major === 13) return 'macOS Ventura 13';
          if (major === 14) return 'macOS Sonoma 14';
          if (major === 15) return 'macOS Sequoia 15';
          // Future versions
          return `macOS ${major}`;
        }
      }
      
      // Try to parse version from Chrome/Safari format
      const versionMatch = userAgent.match(/Version\/(\d+)\.(\d+)/);
      if (versionMatch) {
        const safariMajor = parseInt(versionMatch[1]);
        // Safari version mapping to macOS (approximate)
        if (safariMajor >= 17) return 'macOS Sonoma or newer';
        if (safariMajor >= 16) return 'macOS Ventura or newer';
        if (safariMajor >= 15) return 'macOS Monterey or newer';
      }
      
      // For M-series Macs, make educated guess based on chip
      if (specs.detected.cpuModel) {
        if (specs.detected.cpuModel.includes('M3')) return 'macOS Sonoma or newer';
        if (specs.detected.cpuModel.includes('M2')) return 'macOS Monterey or newer';
        if (specs.detected.cpuModel.includes('M1')) return 'macOS Big Sur or newer';
      }
      
      return 'macOS';
    } else if (platform === 'Windows') {
      if (userAgent.includes('Windows NT 10.0')) {
        // Try to distinguish Windows 10 vs 11
        // Windows 11 has higher build numbers
        const buildMatch = userAgent.match(/Windows NT 10\.0;[^)]*Build (\d+)/);
        if (buildMatch) {
          const build = parseInt(buildMatch[1]);
          if (build >= 22000) return 'Windows 11';
        }
        return 'Windows 10';
      } else if (userAgent.includes('Windows NT 6.3')) {
        return 'Windows 8.1';
      } else if (userAgent.includes('Windows NT 6.2')) {
        return 'Windows 8';
      }
      return 'Windows';
    } else if (platform === 'Linux') {
      // Try to identify Linux distribution
      if (userAgent.includes('Ubuntu')) return 'Ubuntu Linux';
      if (userAgent.includes('Fedora')) return 'Fedora Linux';
      if (userAgent.includes('Debian')) return 'Debian Linux';
      return 'Linux';
    }
    
    return 'Unknown OS';
  };

  const getGPUDisplayName = (specs: SystemSpecs): string => {
    // If user provided a GPU model, find its display name
    if (specs.userProvided.gpuModel && gpuModels) {
      const selectedGPU = Object.values(gpuModels)
        .flat()
        .find(model => model.value === specs.userProvided.gpuModel);
      if (selectedGPU) {
        return selectedGPU.text;
      }
    }
    
    // Otherwise use detected GPU renderer
    return specs.detected.gpuRenderer || 'Unknown GPU';
  };

  const getRAMDisplayName = (specs: SystemSpecs): string => {
    const ram = specs.detected.deviceMemory || specs.userProvided.systemRAM;
    if (ram) {
      return `${ram}GB`;
    }
    return 'Unknown';
  };

  const isMemoryDetectionLikelyIncorrect = (specs: SystemSpecs): boolean => {
    // Check if we have an M2 Pro with 8GB (which is uncommon)
    const hasM2Pro = specs.detected.cpuModel?.includes('M2 Pro');
    const has8GB = specs.detected.deviceMemory === 8;
    const has10Cores = specs.detected.cpuCores === 10;
    
    return hasM2Pro && has8GB && has10Cores;
  };

  const getCPUDisplayName = (specs: SystemSpecs): string => {
    // If we have a proper CPU model name, use it
    if (specs.detected.cpuModel && specs.detected.cpuModel !== 'Unknown CPU') {
      return specs.detected.cpuModel;
    }
    
    // If we only have core count, display that
    if (specs.detected.cpuCores > 0) {
      return `${specs.detected.cpuCores} cores detected`;
    }
    
    return 'Unknown CPU';
  };

  const startAutoDetection = async () => {
    setPhase('detection');
    setDetectionMessages([]);
    setProgressPercent(0);
    
    const messages: DetectionMessage[] = [
      { text: 'OS', type: 'platform' },
      { text: 'Graphics Card', type: 'gpu' },
      { text: 'Processor', type: 'cpu' },
      { text: 'System Memory', type: 'memory' },
      { text: 'Screen Resolution', type: 'screen' }
    ];
    
    // Start with all messages in waiting state
    setDetectionMessages(messages);
    
    // First, actually detect the specs
    const specs = await detectSpecs();
    
    // Now simulate detection progress with real values
    for (let i = 0; i < messages.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 600));
      
      // Update progress bar
      setProgressPercent(((i + 1) / messages.length) * 100);
      
      // Update status message
      const statusMessages = [
        'Initializing hardware scanner...',
        'Detecting graphics processor...',
        'Checking CPU capabilities...',
        'Analyzing system memory...',
        'Verifying display configuration...'
      ];
      setDetectionStatus(statusMessages[i]);
      
      // Update message with detected value
      setDetectionMessages(prev => {
        const updated = [...prev];
        const confidence = Math.random() > 0.3 ? 'high' : Math.random() > 0.5 ? 'medium' : 'low';
        
        updated[i] = {
          ...updated[i],
          confidence,
          value: getDetectedValue(messages[i].type, confidence, specs)
        };
        
        return updated;
      });
    }
    
    // Log detected memory for debugging
    console.log('Detected specs:', {
      platform: specs.detected.platform,
      gpu: specs.detected.gpuRenderer,
      cpu: specs.detected.cpuCores,
      memory: specs.detected.deviceMemory,
      cpuModel: specs.detected.cpuModel
    });
    
    console.log('Auto-detection complete, detected specs:', {
      gpu: specs.detected.gpuRenderer,
      cores: specs.detected.cpuCores,
      memory: specs.detected.deviceMemory
    });
    
    if (specs.detected.gpuRenderer && specs.detected.cpuCores > 0) {
      const compatResult = calculateCompatibility(specs);
      setResult(compatResult);
      await new Promise(resolve => setTimeout(resolve, 500));
      setPhase('results');
    } else {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setPhase('input');
    }
  };

  const getDetectedValue = (type: string, confidence: string, specs?: SystemSpecs): string => {
    // Use provided specs or fall back to component state
    const specsToUse = specs || systemSpecs;
    
    switch (type) {
      case 'platform':
        return specsToUse.detected.platform || 'Unknown';
      case 'gpu':
        if (specsToUse.detected.gpuRenderer) {
          return specsToUse.detected.gpuRenderer;
        }
        return confidence === 'high' ? 'GPU Detected' : 'Unknown GPU';
      case 'cpu':
        if (specsToUse.detected.cpuModel && specsToUse.detected.cpuModel !== 'Unknown CPU') {
          return specsToUse.detected.cpuModel;
        }
        const cores = specsToUse.detected.cpuCores;
        if (cores > 0) {
          return `${cores} cores detected`;
        }
        return 'Unknown';
      case 'memory':
        if (specsToUse.detected.deviceMemory) {
          return `${specsToUse.detected.deviceMemory}GB RAM`;
        }
        return 'Unable to detect RAM';
      case 'screen':
        const res = specsToUse.detected.screenResolution;
        if (res && res.width > 0) {
          return `${res.width}x${res.height}`;
        }
        return 'Unknown';
      case 'webgl':
        const version = specsToUse.detected.webglVersion;
        if (version > 0) {
          return `WebGL ${version}.0`;
        }
        return 'WebGL not supported';
      default:
        return 'Unknown';
    }
  };

  const handleOSChange = (value: string) => {
    setFormData(prev => ({ ...prev, os: value, cpuModel: '', gpuBrand: '', gpuModel: '' }));
    
    if (!value) {
      setCpuOptions([]);
      return;
    }
    
    let osType: 'windows' | 'mac' | 'linux' = 'windows';
    if (value.includes('macos')) {
      osType = 'mac';
    } else if (value === 'linux') {
      osType = 'linux';
    }
    
    setCpuOptions(CPU_OPTIONS_BY_OS[osType] || []);
    
    const newSpecs = { ...systemSpecs };
    if (value.includes('windows')) {
      newSpecs.detected.platform = 'windows';
      if (value === 'windows-11') newSpecs.detected.osVersion = 'Windows 11';
      else if (value === 'windows-10') newSpecs.detected.osVersion = 'Windows 10';
    } else if (value.includes('macos')) {
      newSpecs.detected.platform = 'mac';
      if (value === 'macos-sonoma') newSpecs.detected.osVersion = 'macOS Sonoma';
      else if (value === 'macos-ventura') newSpecs.detected.osVersion = 'macOS Ventura';
      else if (value === 'macos-monterey') newSpecs.detected.osVersion = 'macOS Monterey';
    } else if (value === 'linux') {
      newSpecs.detected.platform = 'linux';
      newSpecs.detected.osVersion = 'Linux';
    }
    setSystemSpecs(newSpecs);
  };

  const handleCPUChange = (value: string) => {
    setFormData(prev => ({ ...prev, cpuModel: value }));
    
    const newSpecs = { ...systemSpecs };
    newSpecs.detected.cpuCores = CPU_CORES_MAP[value] || 4;
    
    const selectedOption = cpuOptions
      .flatMap(group => group.options)
      .find(opt => opt.value === value);
    
    if (selectedOption) {
      newSpecs.detected.cpuModel = selectedOption.text || 'Unknown CPU';
    }
    
    setSystemSpecs(newSpecs);
    
    if (formData.os.includes('macos') && value && value.startsWith('m')) {
      setFormData(prev => ({ ...prev, gpuBrand: 'apple', gpuModel: value }));
      setGpuModels(GPU_MODELS_BY_BRAND.apple);
    }
  };

  const handleGPUBrandChange = (value: string) => {
    setFormData(prev => ({ ...prev, gpuBrand: value, gpuModel: '' }));
    
    if (!value) {
      setGpuModels(null);
      return;
    }
    
    setGpuModels(GPU_MODELS_BY_BRAND[value as keyof typeof GPU_MODELS_BY_BRAND] || null);
  };

  const handleGPUModelChange = (value: string) => {
    setFormData(prev => ({ ...prev, gpuModel: value }));
    
    const newSpecs = { ...systemSpecs };
    newSpecs.userProvided.gpuModel = value || undefined;
    
    if (value && gpuModels) {
      const selectedOption = Object.values(gpuModels)
        .flat()
        .find(model => model.value === value);
      
      if (selectedOption) {
        newSpecs.detected.gpuRenderer = selectedOption.text || 'Unknown GPU';
      }
    }
    
    setSystemSpecs(newSpecs);
  };

  const handleRAMChange = (value: string) => {
    setFormData(prev => ({ ...prev, systemRAM: value }));
    
    const newSpecs = { ...systemSpecs };
    newSpecs.userProvided.systemRAM = parseInt(value) || 0;
    setSystemSpecs(newSpecs);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const compatResult = calculateCompatibility(systemSpecs);
    setResult(compatResult);
    setPhase('results');
  };

  const handleRecheck = () => {
    setPhase('choice');
    setSystemSpecs(initialSystemSpecs);
    setFormData({
      os: '',
      cpuModel: '',
      gpuBrand: '',
      gpuModel: '',
      systemRAM: ''
    });
    setResult(null);
    setCpuOptions([]);
    setGpuModels(null);
    setDetectionMessages([]);
    setProgressPercent(0);
  };

  const animateScore = useCallback(() => {
    if (!result) return;
    
    const startTime = Date.now();
    const duration = 2000;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);
      
      const currentScore = Math.round(easedProgress * result.score);
      setScoreAnimation({ value: currentScore, target: result.score });
      
      if (scoreCircleRef.current) {
        const circumference = 2 * Math.PI * 85;
        const offset = circumference - (currentScore / 100) * circumference;
        scoreCircleRef.current.style.strokeDashoffset = offset.toString();
      }
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    animate();
  }, [result]);

  useEffect(() => {
    if (phase === 'results' && result) {
      animateScore();
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [phase, result, animateScore]);

  return (
    <div className="max-w-4xl mx-auto">
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      
      {/* Choice Phase - Big GO Button */}
      {phase === 'choice' && (
        <div className="mb-12 animate-fadeIn">
          {/* Big GO Button Container */}
          <div className="mb-12 text-center">
            <div className="relative inline-block">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl animate-pulse"></div>
              
              {/* Main GO button */}
              <button
                onClick={startAutoDetection}
                className="relative z-10 w-48 h-48 text-3xl font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 group"
                type="button"
              >
                <span className="block transition-all duration-300 group-hover:scale-110">GO</span>
                <span className="block mt-1 text-sm font-normal opacity-80">Start Scan</span>
              </button>
            </div>
            
            <p className="mt-8 text-lg text-cyan-100/60">
              Click to analyze your current system
            </p>
          </div>

          {/* Manual input option - subtle button */}
          <div className="text-center">
            <button
              onClick={() => setPhase('input')}
              className="px-6 py-2.5 text-sm text-purple-300/80 border border-purple-800/30 rounded-full hover:border-purple-700/50 hover:bg-purple-900/20 hover:text-purple-200 transition-all duration-200"
            >
              Check a different system manually
            </button>
          </div>
        </div>
      )}
      
      {/* Detection Phase */}
      {phase === 'detection' && (
        <div className="mb-12">
          <div className="relative p-8 border rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border-purple-800/30">
            {/* Header with Legend */}
            <div className="flex items-start justify-between mb-6">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Detecting Your System
              </h2>
              
              {/* Detection Legend - Top Right */}
              <div className="p-3 border rounded-lg bg-purple-900/20 border-purple-800/20">
                <div className="flex items-center gap-4 text-xs">
                  <span className="font-medium text-purple-300">Confidence:</span>
                  <div className="flex gap-3 text-cyan-100/70">
                    <span><span className="text-green-400">✓</span> High</span>
                    <span><span className="text-yellow-400">~</span> Medium</span>
                    <span>○ Low</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress indicator */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-cyan-100/70">{detectionStatus}</span>
                <span className="text-xs text-purple-300">Scanning...</span>
              </div>
              <div className="relative h-3 overflow-hidden rounded-full bg-purple-900/30">
                <div
                  className="absolute inset-y-0 left-0 transition-all duration-500 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  style={{ width: `${progressPercent}%` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
                {/* Scanning beam effect */}
                <div className="absolute inset-y-0 w-20 progress-fill bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </div>
            </div>

            {/* Detected Specs */}
            <div className="space-y-4">
              {detectionMessages.map((msg, idx) => (
                <div
                  key={msg.type}
                  className={`p-4 transition-all duration-300 border rounded-lg bg-purple-900/10 border-purple-800/20 ${
                    msg.value ? 'opacity-100' : 'opacity-30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-medium text-purple-300">
                      {msg.confidence ? (
                        <span className={
                          msg.confidence === 'high' ? 'text-green-400' :
                          msg.confidence === 'medium' ? 'text-yellow-400' :
                          'text-gray-400'
                        }>
                          {msg.confidence === 'high' ? '✓' :
                           msg.confidence === 'medium' ? '~' :
                           '○'}
                        </span>
                      ) : (
                        <span className="animate-spin">
                          <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </span>
                      )}
                      {msg.text}
                    </span>
                    <span className="text-sm text-cyan-100/50">
                      {msg.value || 'Waiting...'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Manual Input Phase */}
      {phase === 'input' && (
        <div className="mb-12">
          <div className="p-8 border rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border-purple-800/30">
            <h2 className="mb-6 text-2xl font-bold text-white">Enter Your System Specifications</h2>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Operating System */}
              <div>
                <label htmlFor="os-select" className="block mb-2 text-sm font-medium text-cyan-100/80">
                  Operating System
                </label>
                <select
                  id="os-select"
                  value={formData.os}
                  onChange={(e) => handleOSChange(e.target.value)}
                  className="w-full px-4 py-3 text-white transition-all duration-200 border rounded-lg bg-purple-900/30 border-purple-800/50 hover:border-purple-700/50 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  required
                >
                  <option value="">Select your OS...</option>
                  <optgroup label="Windows">
                    <option value="windows-11">Windows 11</option>
                    <option value="windows-10">Windows 10</option>
                  </optgroup>
                  <optgroup label="macOS">
                    <option value="macos-sonoma">macOS Sonoma (14.x)</option>
                    <option value="macos-ventura">macOS Ventura (13.x)</option>
                    <option value="macos-monterey">macOS Monterey (12.x)</option>
                  </optgroup>
                  <option value="linux">Linux</option>
                </select>
              </div>
              
              {/* CPU Model */}
              <div>
                <label htmlFor="cpu-model" className="block mb-2 text-sm font-medium text-cyan-100/80">
                  CPU Model
                </label>
                <select
                  id="cpu-model"
                  value={formData.cpuModel}
                  onChange={(e) => handleCPUChange(e.target.value)}
                  className="w-full px-4 py-3 text-white transition-all duration-200 border rounded-lg bg-purple-900/30 border-purple-800/50 hover:border-purple-700/50 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  required
                  disabled={!formData.os}
                >
                  <option value="">Select CPU...</option>
                  {cpuOptions.map((group) => (
                    <optgroup key={group.group} label={group.group}>
                      {group.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                  <option value="other">Other/Older CPU</option>
                </select>
              </div>
              
              {/* GPU Brand and Model */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="gpu-brand" className="block mb-2 text-sm font-medium text-cyan-100/80">
                    GPU Brand
                  </label>
                  <select
                    id="gpu-brand"
                    value={formData.gpuBrand}
                    onChange={(e) => handleGPUBrandChange(e.target.value)}
                    className="w-full px-4 py-3 text-white transition-all duration-200 border rounded-lg bg-purple-900/30 border-purple-800/50 hover:border-purple-700/50 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    required
                  >
                    <option value="">Select brand...</option>
                    <option value="nvidia">NVIDIA</option>
                    <option value="amd">AMD</option>
                    <option value="apple">Apple</option>
                    <option value="intel">Intel</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="gpu-model" className="block mb-2 text-sm font-medium text-cyan-100/80">
                    GPU Model
                  </label>
                  <select
                    id="gpu-model"
                    value={formData.gpuModel}
                    onChange={(e) => handleGPUModelChange(e.target.value)}
                    className="w-full px-4 py-3 text-white transition-all duration-200 border rounded-lg bg-purple-900/30 border-purple-800/50 hover:border-purple-700/50 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    required
                    disabled={!formData.gpuBrand}
                  >
                    <option value="">
                      {formData.gpuBrand ? 'Select model...' : 'Select brand first...'}
                    </option>
                    {gpuModels && Object.entries(gpuModels).map(([series, models]) => (
                      <optgroup key={series} label={series}>
                        {models.map((model) => (
                          <option key={model.value} value={model.value}>
                            {model.text}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="other">Other/Not Listed</option>
                  </select>
                </div>
              </div>
              
              {/* RAM */}
              <div>
                <label htmlFor="system-ram" className="block mb-2 text-sm font-medium text-cyan-100/80">
                  System RAM (GB)
                </label>
                <select
                  id="system-ram"
                  value={formData.systemRAM}
                  onChange={(e) => handleRAMChange(e.target.value)}
                  className="w-full px-4 py-3 text-white transition-all duration-200 border rounded-lg bg-purple-900/30 border-purple-800/50 hover:border-purple-700/50 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  required
                >
                  <option value="">Select RAM...</option>
                  <option value="8">8 GB</option>
                  <option value="12">12 GB</option>
                  <option value="16">16 GB</option>
                  <option value="24">24 GB</option>
                  <option value="32">32 GB</option>
                  <option value="48">48 GB</option>
                  <option value="64">64 GB</option>
                  <option value="128">128 GB</option>
                </select>
              </div>
              
              <div className="flex gap-4 pt-6">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  Check Compatibility
                </button>
                
                <button
                  type="button"
                  onClick={startAutoDetection}
                  className="px-6 py-3 font-medium transition-all duration-200 border rounded-lg text-purple-300/80 border-purple-800/50 hover:border-purple-700/50 hover:bg-purple-900/20 hover:text-purple-200"
                >
                  Try Auto-Detect
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Results Phase */}
      {phase === 'results' && result && (
        <>
          {/* Score and Status Section */}
          <div className="flex items-center gap-8 mb-12">
            {/* Compatibility Score Circle */}
            <div className="flex-shrink-0">
              <div className="relative inline-flex items-center justify-center">
                {/* Score Circle Background Glow */}
                <div className="absolute inset-0 w-48 h-48 rounded-full blur-2xl opacity-30 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                
                {/* Score Circle */}
                <svg className="relative z-10 w-48 h-48" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="8" fill="none" className="text-purple-900/40"></circle>
                  <circle
                    ref={scoreCircleRef}
                    cx="100"
                    cy="100"
                    r="85"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none" 
                    className="transition-all duration-2000"
                    style={{
                      strokeDasharray: `${2 * Math.PI * 85}`,
                      strokeDashoffset: `${2 * Math.PI * 85}`,
                      transform: 'rotate(-90deg)',
                      transformOrigin: 'center'
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Score Display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold text-white">{scoreAnimation.value}</span>
                  <span className="text-sm text-purple-300 uppercase tracking-wider">SCORE</span>
                </div>
              </div>
            </div>
            
            {/* Compatibility Status Text */}
            <div className="flex-1 text-left">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-bold text-green-400">
                  Your computer can run Davant Studio well
                </h3>
              </div>
              <p className="text-cyan-100/70">
                You'll have smooth performance with most features working great.
              </p>
            </div>
          </div>
          
          {/* Operating System Section */}
          <div className="mb-8">
            <h4 className="mb-4 text-sm font-medium text-cyan-100/60 uppercase tracking-wider">OPERATING SYSTEM</h4>
            <div className="flex items-center gap-4 p-4 border rounded-lg bg-purple-900/10 border-purple-800/20">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-900/30">
                {systemSpecs.detected.platform === 'macOS' ? (
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                ) : systemSpecs.detected.platform === 'Windows' ? (
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <p className="text-lg font-medium text-white">{systemSpecs.detected.platform || 'Unknown'}</p>
              </div>
              <div className="text-right">
                <p className="text-cyan-100/60">{getOSDisplayName(systemSpecs)}</p>
              </div>
            </div>
          </div>

          {/* Component Scores */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="grid gap-4 md:grid-cols-3">
              {/* GPU Score */}
              <div className="border rounded-lg bg-purple-900/10 border-purple-800/20 overflow-hidden">
                <div className="px-4 py-2 bg-purple-800/30">
                  <span className="text-xs font-medium text-purple-300 uppercase">Recommended</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h4 className="font-medium text-white">GPU</h4>
                  </div>
                  <p className="text-sm text-cyan-100/80 mb-3">{getGPUDisplayName(systemSpecs)}</p>
                  <p className="text-sm text-cyan-100/60 mb-2">Score: {result.scores.gpu}/100</p>
                  <div className="w-full h-2 overflow-hidden rounded-full bg-purple-900/30">
                    <div 
                      className="h-full transition-all duration-1000 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      style={{ width: `${result.scores.gpu}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* RAM Score */}
              <div className="border rounded-lg bg-purple-900/10 border-purple-800/20 overflow-hidden">
                <div className="px-4 py-2 bg-amber-800/30">
                  <span className="text-xs font-medium text-amber-300 uppercase">Minimum</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h4 className="font-medium text-white">RAM</h4>
                  </div>
                  <div className="mb-3">
                    <p className="text-sm text-cyan-100/80">{getRAMDisplayName(systemSpecs)}</p>
                    {isMemoryDetectionLikelyIncorrect(systemSpecs) && (
                      <p className="text-xs text-yellow-400/80 mt-1">
                        Note: M2 Pro typically has 16GB. Browser privacy settings may affect detection.
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-cyan-100/60 mb-2">Score: {result.scores.ram}/100</p>
                  <div className="w-full h-2 overflow-hidden rounded-full bg-purple-900/30">
                    <div 
                      className="h-full transition-all duration-1000 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      style={{ width: `${result.scores.ram}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* CPU Score */}
              <div className="border rounded-lg bg-purple-900/10 border-purple-800/20 overflow-hidden">
                <div className="px-4 py-2 bg-green-800/30">
                  <span className="text-xs font-medium text-green-300 uppercase">Optimal</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <h4 className="font-medium text-white">CPU</h4>
                  </div>
                  <p className="text-sm text-cyan-100/80 mb-3">{getCPUDisplayName(systemSpecs)}</p>
                  <p className="text-sm text-cyan-100/60 mb-2">Score: {result.scores.cpu}/100</p>
                  <div className="w-full h-2 overflow-hidden rounded-full bg-purple-900/30">
                    <div 
                      className="h-full transition-all duration-1000 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      style={{ width: `${result.scores.cpu}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recommendations */}
          {result.recommendations.length > 0 && (
            <div className="p-6 mb-8 border rounded-xl bg-gradient-to-br from-purple-900/10 to-transparent border-purple-800/20">
              <h4 className="flex items-center gap-2 mb-4 text-lg font-semibold text-white">
                <span className="flex items-center justify-center w-6 h-6 text-sm rounded-full bg-purple-900/50 text-purple-300">ⓘ</span>
                Recommendations
              </h4>
              <ul className="space-y-3 text-cyan-100/80">
                {result.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-4 h-4 mt-0.5 mr-3 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={handleRecheck}
              className="flex items-center justify-center gap-2 px-8 py-3 font-medium transition-all duration-200 border rounded-full text-purple-300/80 border-purple-800/50 hover:border-purple-700/50 hover:bg-purple-900/20 hover:text-purple-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Check Another System
            </button>
            {result.tier !== 'incompatible' && (
              <a
                href="/davant-studio/#signup"
                className="px-8 py-3 font-semibold text-center text-white transition-all duration-300 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/20"
              >
                Get Davant Studio
              </a>
            )}
          </div>
        </>
      )}
    </div>
  );
}