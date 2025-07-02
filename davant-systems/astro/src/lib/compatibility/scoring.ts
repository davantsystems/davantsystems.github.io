import type { SystemSpecs, CompatibilityResult, CompatibilityTier } from './types';
import { GPU_DATABASE, REQUIREMENTS, findGPUByRenderer } from './gpu-database';

const COMPONENT_WEIGHTS = {
  gpu: 0.4,    // 40% - Most critical for AI generation
  ram: 0.25,   // 25% - Important for model loading
  cpu: 0.2,    // 20% - Processing and general performance
  storage: 0.15 // 15% - Space for models and output
};

export function calculateCompatibility(specs: SystemSpecs): CompatibilityResult {
  const scores = {
    gpu: calculateGPUScore(specs),
    ram: calculateRAMScore(specs),
    cpu: calculateCPUScore(specs),
    storage: calculateStorageScore(specs),
  };

  // Calculate weighted overall score
  const overallScore = Math.round(
    scores.gpu * COMPONENT_WEIGHTS.gpu +
    scores.ram * COMPONENT_WEIGHTS.ram +
    scores.cpu * COMPONENT_WEIGHTS.cpu +
    scores.storage * COMPONENT_WEIGHTS.storage
  );

  // Determine tier based on overall score and individual components
  const tier = determineTier(overallScore, scores);

  // Generate bottlenecks and recommendations
  const bottlenecks = identifyBottlenecks(scores, specs);
  const recommendations = generateRecommendations(scores, specs, bottlenecks);

  return {
    score: overallScore,
    tier,
    bottlenecks,
    recommendations,
    componentScores: scores,
  };
}

function calculateGPUScore(specs: SystemSpecs): number {
  // First try to get GPU from user input
  if (specs.userProvided.gpuModel) {
    const gpuInfo = GPU_DATABASE[specs.userProvided.gpuModel];
    if (gpuInfo) {
      // Return average of min and max score for the GPU
      return (gpuInfo.minScore + gpuInfo.maxScore) / 2;
    }
  }

  // Try to detect from renderer string
  const detectedGPU = findGPUByRenderer(specs.detected.gpuRenderer);
  if (detectedGPU) {
    return (detectedGPU.minScore + detectedGPU.maxScore) / 2;
  }

  // Check for integrated graphics
  const renderer = specs.detected.gpuRenderer.toLowerCase();
  if (renderer.includes('intel') && !renderer.includes('arc')) {
    return 10; // Intel integrated graphics
  }

  // Unknown GPU - assign low score
  return 25;
}

function calculateRAMScore(specs: SystemSpecs): number {
  const ram = specs.userProvided.systemRAM || specs.detected.deviceMemory || 0;
  
  if (ram === 0) return 0; // No RAM info provided
  
  const { minimum, recommended, optimal } = REQUIREMENTS.ram;
  
  if (ram >= optimal) return 100;
  if (ram >= recommended) return 80 + ((ram - recommended) / (optimal - recommended)) * 20;
  if (ram >= minimum) return 50 + ((ram - minimum) / (recommended - minimum)) * 30;
  
  // Below minimum
  return Math.max(0, (ram / minimum) * 50);
}

function calculateCPUScore(specs: SystemSpecs): number {
  const cores = specs.detected.cpuCores;
  const { minimum, recommended, optimal } = REQUIREMENTS.cpu;
  
  if (cores >= optimal) return 100;
  if (cores >= recommended) return 80 + ((cores - recommended) / (optimal - recommended)) * 20;
  if (cores >= minimum) return 50 + ((cores - minimum) / (recommended - minimum)) * 30;
  
  // Below minimum
  return Math.max(0, (cores / minimum) * 50);
}

function calculateStorageScore(specs: SystemSpecs): number {
  const storage = specs.userProvided.storageAvailable || 0;
  
  if (storage === 0) return 0; // No storage info provided
  
  const { minimum, recommended, optimal } = REQUIREMENTS.storage;
  
  if (storage >= optimal) return 100;
  if (storage >= recommended) return 80 + ((storage - recommended) / (optimal - recommended)) * 20;
  if (storage >= minimum) return 50 + ((storage - minimum) / (recommended - minimum)) * 30;
  
  // Below minimum
  return Math.max(0, (storage / minimum) * 50);
}

function determineTier(
  overallScore: number, 
  scores: { gpu: number; ram: number; cpu: number; storage: number }
): CompatibilityTier {
  // If any critical component is too low, downgrade tier
  const minScore = Math.min(scores.gpu, scores.ram);
  
  if (minScore < 30 || overallScore < 40) {
    return 'incompatible';
  }
  
  if (minScore < 50 || overallScore < 60) {
    return 'minimum';
  }
  
  if (overallScore >= 80 && minScore >= 70) {
    return 'optimal';
  }
  
  return 'recommended';
}

function identifyBottlenecks(
  scores: { gpu: number; ram: number; cpu: number; storage: number },
  specs: SystemSpecs
): string[] {
  const bottlenecks: string[] = [];
  
  if (scores.gpu < 50) {
    bottlenecks.push('GPU is below minimum requirements for smooth AI generation');
  } else if (scores.gpu < 70) {
    bottlenecks.push('GPU may limit generation speed and quality');
  }
  
  if (scores.ram < 50) {
    bottlenecks.push('Insufficient RAM for loading AI models');
  } else if (scores.ram < 70) {
    bottlenecks.push('Limited RAM may affect performance with larger models');
  }
  
  if (scores.cpu < 50) {
    bottlenecks.push('CPU may struggle with preprocessing tasks');
  }
  
  if (scores.storage < 50) {
    bottlenecks.push('Limited storage space for models and generated content');
  }
  
  // Check for specific issues
  if (specs.detected.webglVersion < 2) {
    bottlenecks.push('WebGL 2.0 not supported - may affect preview performance');
  }
  
  return bottlenecks;
}

function generateRecommendations(
  scores: { gpu: number; ram: number; cpu: number; storage: number },
  specs: SystemSpecs,
  bottlenecks: string[]
): string[] {
  const recommendations: string[] = [];
  
  // GPU recommendations
  if (scores.gpu < 50) {
    recommendations.push('Upgrade to at least an NVIDIA RTX 3060 or Apple M1 for basic functionality');
  } else if (scores.gpu < 80) {
    const currentGPU = specs.userProvided.gpuModel || 'your current GPU';
    recommendations.push(`Consider upgrading from ${currentGPU} to an RTX 4070 or M2 Pro for optimal performance`);
  }
  
  // RAM recommendations
  const currentRAM = specs.userProvided.systemRAM || specs.detected.deviceMemory || 0;
  if (currentRAM > 0 && currentRAM < REQUIREMENTS.ram.minimum) {
    recommendations.push(`Upgrade RAM from ${currentRAM}GB to at least ${REQUIREMENTS.ram.minimum}GB`);
  } else if (currentRAM < REQUIREMENTS.ram.recommended) {
    recommendations.push(`Consider upgrading to ${REQUIREMENTS.ram.recommended}GB RAM for better multitasking`);
  }
  
  // Storage recommendations
  if (scores.storage < 70 && specs.userProvided.storageAvailable) {
    recommendations.push(`Free up space or upgrade storage - ${REQUIREMENTS.storage.recommended}GB recommended`);
  }
  
  // Platform-specific recommendations
  if (specs.detected.platform === 'mac' && scores.gpu < 70) {
    recommendations.push('Consider a Mac with M2 Pro or newer Apple Silicon for best performance');
  }
  
  // General performance tips
  if (bottlenecks.length === 0) {
    recommendations.push('Your system exceeds recommended specifications!');
    recommendations.push('Enable GPU acceleration in Davant Studio for maximum performance');
  }
  
  return recommendations;
}

export function getPerformanceEstimates(tier: CompatibilityTier): {
  generationSpeed: string;
  maxResolution: string;
  features: string[];
} {
  switch (tier) {
    case 'optimal':
      return {
        generationSpeed: '< 3 seconds per image',
        maxResolution: 'Up to 2048x2048',
        features: ['Real-time preview', 'Batch processing', 'All AI models', 'HD upscaling'],
      };
    case 'recommended':
      return {
        generationSpeed: '3-8 seconds per image',
        maxResolution: 'Up to 1536x1536',
        features: ['Live preview', 'Standard models', 'Basic upscaling'],
      };
    case 'minimum':
      return {
        generationSpeed: '10-20 seconds per image',
        maxResolution: 'Up to 1024x1024',
        features: ['Basic generation', 'Limited model selection'],
      };
    case 'incompatible':
      return {
        generationSpeed: 'Not supported',
        maxResolution: 'N/A',
        features: ['System upgrade required'],
      };
  }
}