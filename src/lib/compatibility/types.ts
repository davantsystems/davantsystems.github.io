export interface DetectedSpecs {
  platform: 'windows' | 'mac' | 'linux' | 'unknown';
  gpuRenderer: string;
  webglVersion: number;
  webglExtensions: string[];
  screenResolution: {
    width: number;
    height: number;
  };
  cpuCores: number;
  deviceMemory?: number; // In GB, if available
  userAgent: string;
}

export interface UserProvidedSpecs {
  gpuModel?: string;
  gpuVRAM?: number;
  systemRAM?: number;
  storageAvailable?: number;
  osVersion?: string;
}

export interface SystemSpecs {
  detected: DetectedSpecs;
  userProvided: UserProvidedSpecs;
}

export type CompatibilityTier = 'optimal' | 'recommended' | 'minimum' | 'incompatible';

export interface CompatibilityResult {
  score: number; // 0-100
  tier: CompatibilityTier;
  bottlenecks: string[];
  recommendations: string[];
  componentScores: {
    gpu: number;
    ram: number;
    cpu: number;
    storage: number;
  };
}

export interface GPUInfo {
  model: string;
  vram: number;
  tier: number; // 1-4, where 1 is best
  minScore: number;
  maxScore: number;
}

export interface RequirementSet {
  gpu: {
    minimum: string[];
    recommended: string[];
    optimal: string[];
  };
  ram: {
    minimum: number;
    recommended: number;
    optimal: number;
  };
  cpu: {
    minimum: number;
    recommended: number;
    optimal: number;
  };
  storage: {
    minimum: number;
    recommended: number;
    optimal: number;
  };
}