---
title: "Stable Diffusion Glossary"
description: "A comprehensive guide to AI image generation terms and concepts for creative professionals."
pubDate: 2024-07-30
author: "Davant Systems"
tags: ["AI", "Stable Diffusion", "Tutorial", "Glossary"]
featured: false
featuredImage: "../../assets/images/hero1.png"
featuredImageAlt: "AI-generated artistic background representing Stable Diffusion concepts"
draft: false
---

# Stable Diffusion Glossary

A comprehensive guide to understanding the key terms and concepts in AI image generation using Stable Diffusion.

## Text-to-Image

**Text-to-Image** is the core feature of Stable Diffusion where you input a text description (prompt) and the AI generates an image based on that description. This is the primary way most users interact with Stable Diffusion.

**Example**: Typing "a sunset over mountains" and getting a generated landscape image.

## Image-to-Image

**Image-to-Image** allows you to use an existing image as a starting point and modify it based on a text prompt. You provide both a reference image and a text description of how you want to change it.

**Example**: Taking a photo of a house and using the prompt "make it look like a medieval castle" to transform the architecture.

## Prompts

**Prompts** are the text descriptions you provide to guide the AI's image generation. A well-crafted prompt can dramatically improve your results. Prompts can include:

- **Subject**: What you want in the image
- **Style**: Art style, photography style, etc.
- **Mood**: Lighting, atmosphere, emotion
- **Technical details**: Camera settings, resolution, quality modifiers

**Example**: "A majestic eagle soaring through clouds, oil painting style, dramatic lighting, highly detailed, 4K resolution"

## Seeds

**Seeds** are numerical values that control the randomness in image generation. Using the same seed with the same prompt and settings will produce the same image, making seeds crucial for:

- **Reproducibility**: Getting the same result again
- **Variations**: Making small changes while keeping the overall composition
- **Experimentation**: Testing different prompts on the same base image

**Tip**: Save seeds when you get results you like!

## Steps

**Steps** refer to the number of denoising iterations the AI performs. More steps generally mean:

- **Higher quality** but **slower generation**
- **Typical range**: 20-50 steps
- **Sweet spot**: Usually 25-30 steps for most images
- **Diminishing returns**: Beyond 50 steps rarely improves quality significantly

## CFG (Classifier-Free Guidance)

**CFG Scale** controls how closely the AI follows your prompt:

- **Low CFG (1-7)**: More creative, less adherence to prompt
- **Medium CFG (7-12)**: Balanced approach (recommended for most users)
- **High CFG (12-20)**: Strict adherence to prompt, can become oversaturated

**Common settings**: 7-10 for most use cases

## Denoising Strength

**Denoising Strength** (used in Image-to-Image) controls how much the AI changes the input image:

- **Low (0.1-0.3)**: Subtle changes, preserves original image structure
- **Medium (0.3-0.7)**: Moderate changes, good for style transfers
- **High (0.7-1.0)**: Major changes, essentially creates a new image

**Tip**: Start with lower values and increase gradually to find the right balance.

---

This glossary covers the essential terms you need to know to get started with AI image generation. As you become more experienced, you'll discover additional advanced techniques and settings to fine-tune your creative process.