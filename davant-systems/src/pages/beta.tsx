import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import Faq from "../components/Faq"
import Countdown from "../components/Countdown"
import { StaticImage } from "gatsby-plugin-image"
import ExternalLink from "../icons/externalLink"

const BetaPage: React.FC<PageProps> = () => {
	return (
		<main className="">
			<section className="hero__wrapper
				border-b-2
				border-slate-400
				border-opacity-5">
				<div className="hero
					min-h-screen relative overflow-hidden flex flex-col sm:flex-row items-center
					justify-center">
					<span className="hero-gradient-1
						block
						opacity-100
						absolute
						top-0
						left-0
						z-40
						w-screen
						h-screen"></span>
					<div className="hero-content
						relative
						flex
						flex-col
						items-center
						text-center
						text-neutral-content
						pt-8
						pb-20
						z-20">
						<div className="flex flex-col items-center mb-2">

							<div className="cta-wrapper flex flex-col items-center">
								<div className="software-spotlight
									flex flex-col sm:flex-row">
									<div className="text flex flex-col pr-8 text-left">
										<h1 className="mb-0 font-light bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-clip-text text-transparent">
											{/* <span className="text-4xl lg:text-5xl pb-1 block bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">Your imagination </span><span className="relative block text-4xl lg:text-5xl pl-2 pb-0 bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent -mt-3">is <span className="text-7xl font-bold  overflow-visible">infinite</span></span> */}

											{/* <span className="text-3xl lg:text-4xl text-secondary">Introducing Davant Studio</span> */}
											{/* <span className="bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
									<span className="block text-2xl lg:text-6xl">Infinite imagination</span>
									<span className="block text-2xl lg:text-5xl">Unlimited creativity</span>
								</span> */}
											<span className="block text-5xl sm:text-7xl md:text-8xl font-bold -mb-4">Davant </span><span className="block leading-tight text-5xl sm:text-7xl md:text-8xl">Studio</span>
										</h1>

										<div className="text-bg
											mt-2
											bg-gradient-to-br
											from-success
											via-secondary
											to-blue-500
											text-left
											text-neutral
											mb-4
											max-w-lg
											font-light
											italic
											block
											py-0
											leading-10
											-skew-x-12
											opacity-80
											mix-blend-soft-light
											px-3">
											{/* <p className="text-xl">
												<span className="">An AI image transformation tool for professionals</span>
											</p> */}
											<p className="text-sm skew-x-12 py-0 leading-1 flex items-center"><span className="">Beta Access</span><span className="ml-auto mr-0 text-sm inline-block">Ends 02.17.2024</span></p>
										</div>
										<div className="bg-base-300 bg-opacity-30 py-2 px-4 shadow-xl flex flex-col mt-auto">
											{/* <div className="cta__info--requirements
												text-xs
												flex
												items-center
												gap-3
												text-left
												py-2
												px-6
												">
												<svg height="22px" width="24px" className="stroke-white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.986 452.986" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M165.265,53.107L21.689,81.753v132.531l143.575-2.416V53.107 M431.297,245.583l-233.18-3.991 v164.822l233.18,46.571V245.583 M165.265,241.097l-143.575-2.438v132.509l143.575,28.668V241.097 M431.297,0l-233.18,46.528 v164.822l233.18-3.969V0"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
												<div>
													<p className="font-bold underline mb-1">System Requirements</p>
													<p>Windows 10/11 | 16gb RAM</p>
													<p>Nvidia 2000 series | AMD 6000 series</p>
												</div>
											</div> */}
											<div className="cta__info--requirements alert border-0 w-auto bg-transparent text-sm grid-flow-col text-left px-0">
												<svg height="22px" width="24px" className="stroke-white fill-cyan-300" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.986 452.986" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M165.265,53.107L21.689,81.753v132.531l143.575-2.416V53.107 M431.297,245.583l-233.18-3.991 v164.822l233.18,46.571V245.583 M165.265,241.097l-143.575-2.438v132.509l143.575,28.668V241.097 M431.297,0l-233.18,46.528 v164.822l233.18-3.969V0"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
												{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
												<div className="text-cyan-100">
													<p className="font-bold underline">Minimum Requirements:</p>
													<p>Windows 10/11 | 16gb RAM</p>
													<p>Nvidia 2000 series | AMD 6000 series</p>
												</div>
											</div>
											<Link className="cta__button--download
												btn btn-primary
												text-md
												md:text-lg
												mb-2
												indicator
												bg-gradient-to-br
												from-pink-400
												via-fuchsia-500
												to-purple-500
												hover:from-pink-500
												hover:to-purple-400
												hover:scale-105
												text-neutral
												border-1
												pl-0
												pr-4
												border-cyan-500 rounded-sm
												border-opacity-50 shadow-pink-500 shadow-sm"
												to="https://github.com/davantsystems/davant-studio-release/releases/download/v0.5.0/DavantStudio_v0.5.0.zip">

												<span className="badge-neutral bg-transparent p-2 rounded-full">
													<svg className="stroke-neutral" width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
														<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
														<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
														<g id="SVGRepo_iconCarrier">
															<path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" strokeWidth="1.5" strokeLinecap="round"></path>
															<path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
												</span>
												<span className="pt-1">Download Davant Studio Now</span>
											</Link>
										</div>
									</div>

									<div className="wrapper__screenshots
										carousel
										carousel-center
										space-x-2
										border-2
										border-base-300
										border-opacity-20
										shadow-sm
										mb-0
										mx-auto
										w-44
										sm:w-60
										md:w-72">
										<div className="item
											carousel-item">
											<StaticImage
												className="w-44
												sm:w-60 md:w-72"
												src="../images/davant-studio-presets.png"
												quality={100}
												alt="Screenshot of Davant Studio software"
											/>
										</div>
										<div className="item
											carousel-item">
											<StaticImage
												className="w-44
												sm:w-60 md:w-72"
												src="../images/davant-studio-controls.png"
												quality={100}
												alt="Screenshot of Davant Studio software"
											/>
										</div>
										<div className="item
											carousel-item">
											<StaticImage
												className="w-44
												sm:w-60 md:w-72"
												src="../images/davant-studio-prompts.png"
												quality={100}
												alt="Screenshot of Davant Studio software"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="
							flex
							flex-col
							sm:flex-row
							items-center
							py-3
							px-10
							rounded">
							<div className="flex flex-col items-center">
								<span className="text-xs mr-3 mb-2 sm:mb-auto">Free access for</span>
							</div>
							<Countdown targetDate="2024-02-17" />
							<span className="block text-xs ml-3  mt-2 sm:mt-auto">until February 17, 2024</span>
						</div>
					</div>
					<div className="background-image
						absolute
						block
						bottom-0
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
					-mt-20
					px-4
					pt-4
					pb-10
					bg-black
					bg-opacity-30
					z-20">
					<div className="container max-w-3xl mt-5 w-auto block mx-auto indicator pl-8 pr-4 py-4 text-sm border-2 border-slate-400 border-opacity-10">
						<span className="indicator-item indicator-start badge badge-warning badge-xl py-4 px-1 mr-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
						</span>
						<div className="">
							<p className="text-lg font-bold text-warning mb-4">Davant Studio is <span className="italic">not</span> a standalone AI system. It requires automatic1111.</p>
							<p className="mb-2">You must have API access to a running instance of the <a className="link" target="_blank" href="https://github.com/AUTOMATIC1111/stable-diffusion-webui">automatic1111 Stable Diffusion web UI<ExternalLink fillClass="fill-white"/></a>. This open-source (and free) project manages and runs Stable Diffusion for image generation.</p>
							<p>See our instructions for installing auto1111 below.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="container flex justify-center border-b-2 border-slate-700 border-opacity-10">
				<div className="
				relative
				block
				mx-auto
				py-20">
					<h2 className="
					text-2xl
					bg-gradient-to-br
					from-cyan-300
					via-secondary
					to-cyan-400
					text-neutral
					font-bold
					mr-auto
					inline-block
					relative
					w-auto
					py-0
					px-2
					mb-8
					">Features</h2>
					<div className="text-bg
					bg-gradient-to-br
					from-cyan-300
					via-secondary
					to-purple-500
					bg-clip-text
					text-transparent
					prose
					text-left
					mb-4
					max-w-2xl
					pr-10">
						<ul className="list font-light leading-snug pl-0 list-none">
							<li className="list-item mb-4"><span className="font-bold">Real-time generative AI engine: </span>Render as fast as your computer can handle</li>
							<li className="list-item mb-4"><span className="font-bold">Control what matters: </span>What you need to dial in your vision</li>
							<li className="list-item mb-4"><span className="font-bold">Adapts to you: </span>Use images, folders or screenshot as input</li>
							<li className="list-item mb-4"><span className="font-bold">No internet required: </span>Your files never leave your computer</li>
							<li className="list-item mb-4"><span className="font-bold">Expansive model library: </span>Use any Stable Diffusion checkpoint, embedding or LoRA from the community</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="container">
				<div className="max-w-3xl mx-auto">
					<Faq />
				</div>
			</section>

			<section className="container">
				<div className="
					py-32
					px-4
					max-w-3xl
					text-center
					mx-auto">
					<p className="
						text-2xl mb-2 text-cyan-300">Can't find what you're looking for?</p>
					<a className="
						bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-clip-text text-transparent"
					href="mailto:support@davantsystems.com">support@davantsystems.com</a>
				</div>
			</section>

			<div className="bg block fixed bottom-0 left-0 w-full h-1/6 bg-gradient-to-b from-transparent to-base-300 opacity-100 pointer-events-none z-50"></div>
		</main >
	)
}

export default BetaPage

export const Head: HeadFC = () => <title>Davant Systems | Download beta software</title>
