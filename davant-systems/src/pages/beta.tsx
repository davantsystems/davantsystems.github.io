import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import Faq from "../components/Faq"
import Countdown from "../components/Countdown"
import { StaticImage } from "gatsby-plugin-image"


const BetaPage: React.FC<PageProps> = () => {
	return (
		<main className="">
			<section className="hero__wrapper
				border-b-2
				border-slate-400
				border-opacity-5">
				<div className="hero
					min-h-screen relative block overflow-hidden flex items-center
					justify-center">
					<span className="hero-gradient-1 block opacity-20 absolute top-0 left-0 w-screen h-screen"></span>
					<div className="
						hero-content
						relative
						block
						flex
						flex-col
						text-center
						text-neutral-content
						pt-8
						pb-20
						z-20">
						<div className="flex flex-col items-center mb-2">
							<h1 className="mb-8 bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
								<span className="text-4xl lg:text-6xl">Your imagination is infinite</span>
								<span className="block text-3xl lg:text-5xl">Now your tools are too</span>
								{/* <span className="text-3xl lg:text-4xl text-secondary">Introducing Davant Studio</span> */}
								{/* <span className="bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
									<span className="block text-2xl lg:text-6xl">Infinite imagination</span>
									<span className="block text-2xl lg:text-5xl">Unlimited creativity</span>
								</span> */}
							</h1>

							<div className="cta-wrapper flex flex-col items-center">
								<div className="screenshots-wrapper
									max-w-3xl
									mb-4
									mx-auto
									grid
									grid-cols-3
									gap-2">
									<StaticImage
										src="../images/davant-studio-presets.png"
										quality={100}
										alt="Screenshot of Davant Studio software"
									/>
									<StaticImage
										src="../images/davant-studio-controls.png"
										quality={100}
										alt="Screenshot of Davant Studio software"
									/>
									<StaticImage
										src="../images/davant-studio-prompts.png"
										quality={100}
										alt="Screenshot of Davant Studio software"
									/>
								</div>
								<div className="text-bg
									bg-gradient-to-br
									from-cyan-300
									via-secondary
									to-purple-500
									bg-clip-text
									text-transparent
									mb-4">
									<p className="text-xl">Davant Studio brings the power of generative AI image transformation
										<span className="inline-block">to your creative workflow, so you can create at the speed of thought.</span>
									</p>
								</div>
								<div className="bg-base-300 bg-opacity-30 py-2 px-4 shadow-xl flex flex-row items-center justify-center">
									<Link className="
										btn
										btn-primary
										h-auto"
										to="https://github.com/davantsystems/davant-studio-release/releases/download/v0.5.0/DavantStudio_v0.5.0.zip">
										<span className="">
											<svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
										</span>
										<span className="pt-1">Download Davant Studio Now</span>
									</Link>
									<div className="
										text-xs
										flex
										items-center
										gap-3
										text-left
										py-2
										px-6
										">
										<svg height="22px" width="24px" className="stroke-white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.986 452.986" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M165.265,53.107L21.689,81.753v132.531l143.575-2.416V53.107 M431.297,245.583l-233.18-3.991 v164.822l233.18,46.571V245.583 M165.265,241.097l-143.575-2.438v132.509l143.575,28.668V241.097 M431.297,0l-233.18,46.528 v164.822l233.18-3.969V0"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
										<div>
											<p className="font-bold underline mb-1">System Requirements</p>
											<p>Windows 10/11 | 16gb RAM</p>
											<p>Nvidia 2000 series | AMD 6000 series</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="
							flex
							items-center
							py-3
							px-10
							rounded">
							<div className="flex flex-col items-center">
								<span className="text-xs mr-3">Free for the next</span>
							</div>
							<Countdown targetDate="2024-02-17" />
							<span className="block text-xs ml-3">until February 17, 2024</span>
						</div>
					</div>
					<div className="background-image
						absolute
						block
						top-0
						left-1/2
						-translate-x-1/2
						min-w-full
						z-1
						opacity-100
						h-full">
						<StaticImage
							className="hero__background-image
							h-full
							relative
							block"
							src="../images/hero2.png"
							quality={100}
							placeholder="blurred"
							layout="fullWidth"
							loading="eager"
							objectFit="cover"
							objectPosition="center"
							alt="Screenshot of Davant Studio software" />
						<div className="gradient-fade
								absolute
								bottom-0
								left-0
								w-full
								pb-28
								bg-gradient-to-b
								from-transparent
								to-base-300
								opacity-100
								z-10
								"></div>
					</div>
				</div>

				<div className="
					relative
					block
					px-4
					pt-4
					pb-10
					bg-black
					bg-opacity-30
					z-20">
					<div className="container max-w-xl mt-5 w-auto block mx-auto indicator pl-8 pr-4 py-4 text-sm border-2 border-slate-400 border-opacity-10">
						<span className="indicator-item indicator-start badge badge-warning badge-xl py-4 px-1 mr-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
						</span>
						<div className="">
							<p className="font-bold text-warning mb-4">Davant Studio is <span className="italic">not</span> a standalone AI system.</p>
							<p className="mb-2">You must have API access to a running instance of the <a className="link" href="https://github.com/AUTOMATIC1111/stable-diffusion-webui">automatic1111 Stable Diffusion web UI.</a>. This open-source (and free) project manages and runs Stable Diffusion for image generation.</p>
							<p>See our instructions for installing auto1111 below.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="container max-w-3xl">
				<Faq />
			</section>

		</main >
	)
}

export default BetaPage

export const Head: HeadFC = () => <title>Davant Systems | Download beta software</title>
