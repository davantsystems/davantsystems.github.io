---
path: "/stable-diffusion-terms"
date: 2024-07-30
title: "Stable Diffusion Terms"
image: ""
---

Here you'll learn the definitions of the most important terms needed when using Stable Diffusion to generate images.

These terms can be found in this glossary:
- [Text-to-Image](#text-to-image)
- [Image-to-Image](#image-to-image)
- [Prompt](#prompt)
- [Negative prompt](#negative-prompt)
- [Seed](#seed)
- [Steps](#steps)
- [CFG](#cfg-classifier-free-guidance)
- [Denoise](#denoise--denoising)



Stable Diffusion has opened up a whole new way to create and design with AI. It's incredibly powerful, and the sky truly is the limit.


But along with it comes a flood of new concepts and terms.


A lot of these terms are rooted in the computer science behind how all of the AI magic works. They are the same terms that are used in a university level classroom or research organization.


It's great to be precise and accurate... but you're likely not a computer scientist. You shouldn't need to be one to use these powerful tools in your own projects We believe that AI is for everyone.



In the process of building [Davant Studio](/davant-studio) and the [Magic Mirror](/photobooth) we've identified the most important Stable Diffusion terms that you need to know. We're not going to get into the weeds here, this sticks to the fundamentals to get you going.





## Stable Diffusion Key Terms You Need to Know


---


### Text to Image
**Definition:** The process of generating an image from only text prompts

This is the label for one of the processes that can be used in Stable Diffusion.

Text to image -- sometimes written "txt2img" -- is the process that has garnered the most attention. Anyone familiar with AI image generation is familiar with this mode. Text goes in, a button is pressed, and an image is generated.


---


### Image to Image
**Definition:** The process of generating an image from text promps and input image(s)

This is the label for a process that can be used in Stable Diffusion.

Similar to the previous process, Image to Image -- sometimes written "img2img" -- is the process of providing text prompts and an input image (or in some cases, multiple images) to generate an output image that is "driven" by the input. This process is the basis for our [Magic Mirror](/photobooth) and the primary focus of [Davant Studio](/davant-studio)


---


### Positive Prompt
**Definition:** Text describing the image you're generating  
**Standard value:** Varies, not empty


You've probably heard of this one. Usually just called "the "prompt", this is text given as input that describes the desired output image. This text is what you want the image to include in terms of subject, action, style or other descriptor.

Prompts can be short and simple, like:
> An astronaut

Or they can be quite long and complex:
> A digital painting of a 1960's NASA astronaut stepping on the moon, realistic, shot on film, archival film


---


### Negative Prompt
**Definition:** Text describing what you don't want in your image  
**Standard value:** Varies, can be empty


The "negative prompt" is text that describes what you _don't_ want in your image.
This is a powerful and often overlooked tool that can provide much more nuance in your images.

Let's use our astronaut example from above. If the generated images are often including Earth in the background, and we don't want Earth to be seen, you may do this in the positive prompt:
> An astronaut on the moon without the earth, by itself, in space

You told it _without_ the Earth, so that should remove it, right? Unfortunately, no. In fact, you're going to get **more** of the Earth in your images.

The AI can't really figure out descriptive phrases like this (yet). But this is exactly the time to use negative prompts.

Positive prompt:  
> An astronaut on the moon, realistic, film grain

Negative prompt:  
>Earth, planet, satellite


We can take it a step further to steer our style _away_ from  what we know we don't want.
Negative prompt:  
>Earth, planet, satellite, cartoon, illustration, CGI

Tell Stable Diffusion what you don't want in your images is as important as what you do.


---


### Seed
**Definition:** The number representing the random pixels the images starts as  
**Standard value:** No default. A value can be specificed or set to random for different results each image

During the generation of an image, Stable Diffusion starts with an image that's the size you specified, but the image is a bunch of random pixels -- otherwise known as "noise".

The seed is a (usually large) number that represents that image of noise (based on the math used to create it). So each seed is uniqe. Changing the seed changes the starting point of the generated image, and so it changes the resulting generated image.

If you keep the seed the same for multiple generated images and don't change other parameters, you will (in most cases) get the exact same output. You can also set the seed to random to get completely different outputs each time.

It's often handy to start with a random seed until you see an image you like. When you do, you can keep using that seed number by turning off the "random seed" option. Now you can adjust other parameters, and the output image will continue to look similar.


---


### Steps
**Definition:** The number of times the AI process runs on a generated image  
**Standard value:** 20 to 40

The number of times the AI will look at what it's generating and "guess" how to manipulate the pixels to get the desired outcome.

Stable Diffusion starts with an image that's the size you specified, but the image is a bunch of random pixels -- otherwise known as "noise". For every step, it looks at the image and changes those pixels to get closer to what it thinks best fits with the prompts.

Too few steps, and it hasn't had enough "guesses" to refine the image into what you want. In our tests, the absolutely minimum seems to be around 11 steps, although 20 to 40 steps is the generally usable amount.

Note that after a certain amount of steps, you'll see diminishing returns. More steps does not mean higher quality. In fact, in some instances if the steps are very high (like 80 to 150) it may keep "guessing" on essentially a final image, and will inject _too much_ of the prompt. You might get astronaut helmets poppping up on the craters of the moon!


---


### CFG (Classifier-Free Guidance)
**Definition:** How much the AI "listens" to your prompts  
**Standard value:** 7.0

The CFG value plays a large role in how the generated image looks. In [Davant Studio](/davant-studio) we've labelled it "Prompt Strength" for this reason. Playing with this value can either let the AI interpret what you're asking for more loosely, or try to force it to be more accurate.

But you'll find that if the CFG goes too high, you'll start to get images that looked "burnt" or "cruncy". They'll start to have over-sharpened edges, and a quality that looks like extra colorful pixels have been packed in arbitrarily.

Typically in Stable Diffusion 1.5 models, a CFG value between 3.5 and 10 is safe. However, some community models and other versions of Stable Diffusion like XL will have completely different safe ranges. Experimentation is the key on finding what works and what doesn't.


---


### Denoise / Denoising
**Definition:** How much the generated image looks like your input image  
**Standard value:** 0.75 (75%)  
_(Only applies to image to image)_

If you're providing an image as an input (the default mode that [Davant Studio](/davant-studio) has been built around), there's an extra step before generation.

Stable Diffusion will first take your input image, and "degrade" it until it becomes a bunch of random noise. Then in the generation step, instead of starting from an image of random noise, it starts with this image of noise from your input.

The denoise amount is how much your input image is degraded before its used for generation. If it's 100% degraded, then Stable Diffusion is essentially starting from random noise. But if the image is only 50% degraded, or only 25%, the original image can still be recognized. The details may not be sharp, or subjects may not be recognizable, but maybe the poses are. Or the colors, or general layout.

By using this value, you can control how much your input image affects the generated images.

