import type { GPUInfo } from './types';

export const GPU_DATABASE: Record<string, GPUInfo> = {
  // NVIDIA RTX 40 Series - Tier 1 (Optimal)
  'rtx-4090': {
    model: 'NVIDIA RTX 4090',
    vram: 24,
    tier: 1,
    minScore: 95,
    maxScore: 100,
  },
  'rtx-4080': {
    model: 'NVIDIA RTX 4080',
    vram: 16,
    tier: 1,
    minScore: 90,
    maxScore: 95,
  },
  'rtx-4070ti': {
    model: 'NVIDIA RTX 4070 Ti',
    vram: 12,
    tier: 1,
    minScore: 85,
    maxScore: 90,
  },
  'rtx-4070': {
    model: 'NVIDIA RTX 4070',
    vram: 12,
    tier: 1,
    minScore: 80,
    maxScore: 85,
  },

  // NVIDIA RTX 40 Series - Tier 2 (Recommended)
  'rtx-4060ti': {
    model: 'NVIDIA RTX 4060 Ti',
    vram: 16, // Using the 16GB variant as reference
    tier: 2,
    minScore: 70,
    maxScore: 80,
  },
  'rtx-4060': {
    model: 'NVIDIA RTX 4060',
    vram: 8,
    tier: 2,
    minScore: 65,
    maxScore: 70,
  },

  // NVIDIA RTX 30 Series
  'rtx-3090': {
    model: 'NVIDIA RTX 3090',
    vram: 24,
    tier: 1,
    minScore: 85,
    maxScore: 90,
  },
  'rtx-3080': {
    model: 'NVIDIA RTX 3080',
    vram: 12, // Using 12GB variant
    tier: 2,
    minScore: 75,
    maxScore: 85,
  },
  'rtx-3070': {
    model: 'NVIDIA RTX 3070',
    vram: 8,
    tier: 2,
    minScore: 65,
    maxScore: 75,
  },
  'rtx-3060': {
    model: 'NVIDIA RTX 3060',
    vram: 12,
    tier: 3,
    minScore: 50,
    maxScore: 65,
  },

  // Apple Silicon - M3 Series
  'm3-max': {
    model: 'Apple M3 Max',
    vram: 48, // Unified memory, using GPU portion estimate
    tier: 1,
    minScore: 90,
    maxScore: 100,
  },
  'm3-pro': {
    model: 'Apple M3 Pro',
    vram: 18,
    tier: 1,
    minScore: 80,
    maxScore: 90,
  },
  'm3': {
    model: 'Apple M3',
    vram: 10,
    tier: 2,
    minScore: 65,
    maxScore: 75,
  },

  // Apple Silicon - M2 Series
  'm2-max': {
    model: 'Apple M2 Max',
    vram: 38,
    tier: 1,
    minScore: 85,
    maxScore: 95,
  },
  'm2-pro': {
    model: 'Apple M2 Pro',
    vram: 16,
    tier: 2,
    minScore: 70,
    maxScore: 85,
  },
  'm2': {
    model: 'Apple M2',
    vram: 10,
    tier: 2,
    minScore: 60,
    maxScore: 70,
  },

  // Apple Silicon - M1 Series
  'm1-max': {
    model: 'Apple M1 Max',
    vram: 32,
    tier: 2,
    minScore: 75,
    maxScore: 85,
  },
  'm1-pro': {
    model: 'Apple M1 Pro',
    vram: 16,
    tier: 2,
    minScore: 65,
    maxScore: 75,
  },
  'm1': {
    model: 'Apple M1',
    vram: 8,
    tier: 3,
    minScore: 50,
    maxScore: 60,
  },

  // Fallback for unknown GPUs
  'other': {
    model: 'Unknown GPU',
    vram: 8,
    tier: 4,
    minScore: 0,
    maxScore: 50,
  },
};

// Helper function to find GPU by renderer string
export function findGPUByRenderer(renderer: string): GPUInfo | null {
  const normalized = renderer.toLowerCase();
  
  // Check for specific GPU models in the renderer string
  for (const [key, info] of Object.entries(GPU_DATABASE)) {
    const modelName = info.model.toLowerCase();
    
    // Direct model match
    if (normalized.includes(modelName)) {
      return info;
    }
    
    // Check for key patterns (like "rtx 4090" or "m3 max")
    const keyPattern = key.replace('-', ' ').toLowerCase();
    if (normalized.includes(keyPattern)) {
      return info;
    }
  }
  
  // Fallback patterns for GPU families
  if (normalized.includes('rtx 40')) {
    return GPU_DATABASE['rtx-4060']; // Conservative estimate
  }
  if (normalized.includes('rtx 30')) {
    return GPU_DATABASE['rtx-3060']; // Conservative estimate
  }
  if (normalized.includes('apple m3')) {
    return GPU_DATABASE['m3']; // Base M3
  }
  if (normalized.includes('apple m2')) {
    return GPU_DATABASE['m2']; // Base M2
  }
  if (normalized.includes('apple m1')) {
    return GPU_DATABASE['m1']; // Base M1
  }
  
  return null;
}

// System requirements
export const REQUIREMENTS = {
  gpu: {
    minimum: ['rtx-3060', 'm1'],
    recommended: ['rtx-3070', 'rtx-4060', 'm2-pro', 'm1-pro'],
    optimal: ['rtx-4070', 'rtx-4080', 'rtx-4090', 'm3-pro', 'm3-max', 'm2-max'],
  },
  ram: {
    minimum: 16,
    recommended: 32,
    optimal: 64,
  },
  cpu: {
    minimum: 4,
    recommended: 8,
    optimal: 16,
  },
  storage: {
    minimum: 50,
    recommended: 100,
    optimal: 200,
  },
};