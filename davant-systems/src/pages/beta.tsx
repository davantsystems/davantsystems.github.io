import React, { useContext } from 'react';
import { Link, type HeadFC, type PageProps } from "gatsby"
import Faq from "../components/Faq"
import Countdown from "../components/Countdown"
import { StaticImage } from "gatsby-plugin-image"
import RequirementsPane from "../components/requirementsPane"
import ContentContext from "../ContentContext"

const BetaPage: React.FC<PageProps> = () => {
	const contentVariables = useContext(ContentContext);
	return (
		<main className="">
			<section className="border-b-2 hero__wrapper border-slate-400 border-opacity-5">
				<div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden hero sm:flex-row">
					<span className="absolute top-0 left-0 z-40 block w-screen h-screen opacity-100 hero-gradient-1"></span>
					<div className="relative z-20 flex flex-col items-center pt-8 pb-20 text-center hero-content text-neutral-content">
						<div className="flex flex-col items-center mb-2">

							<div className="relative flex flex-col items-center cta-wrapper">
								<div className="flex flex-col software-spotlight sm:flex-row">
									<div className="flex flex-col pr-8 text-left text">
										<h1 className="mb-0 font-light text-transparent bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-clip-text">
											<span className="block -mb-4 text-5xl font-bold sm:text-7xl md:text-8xl">Davant </span><span className="block text-5xl leading-tight sm:text-7xl md:text-8xl">Studio</span>
										</h1>

										<div className="block max-w-lg px-3 py-0 mt-3 mb-0 ml-1 italic font-light leading-10 text-left -skew-x-12 text-bg bg-gradient-to-br from-success via-secondary to-blue-500 text-neutral ml- opacity-80 mix-blend-soft-light">
											<p className="flex items-center py-0 text-sm skew-x-12 leading-1"><span className="">Beta Access</span><span className="inline-block ml-auto mr-0 text-sm">Ends 02.17.2024</span></p>
										</div>
										<div className="flex flex-col px-4 py-3 mt-0 bg-opacity-100 shadow-xl bg-base-300">
											<div className="pt-4 pb-3">
												<RequirementsPane />
											</div>
											<Link className="pl-0 pr-4 mx-auto mt-4 mb-0 rounded-sm shadow-sm bo rder-opacity-50 cta__button--download effect__chromeflash btn btn-primary text-md md:text-lg indicator bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 hover:from-pink-500 hover:to-purple-400 hover:scale-105 text-neutral border-1 border-cyan-500 shadow-pink-500"
												to="#third-party-disclaimer">

												<span className="p-2 bg-transparent rounded-full badge-neutral">
													<svg className="stroke-neutral" width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
														<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
														<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
														<g id="SVGRepo_iconCarrier">
															<path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" strokeWidth="1.5" strokeLinecap="round"></path>
															<path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
												</span>
												<span className="pt-1">Access Davant Studio Now</span>
											</Link>
										</div>
									</div>

									<div className="mx-auto mb-0 space-x-2 border-2 shadow-sm wrapper__screenshots carousel carousel-center border-base-300 border-opacity-20 w-44 sm:w-60 md:w-72">
										<div className="item carousel-item">
											<StaticImage
												className="w-44 sm:w-60 md:w-72"
												src="../images/davant-studio-presets.png"
												quality={100}
												alt="Screenshot of Davant Studio software"
											/>
										</div>
										<div className="item carousel-item">
											<StaticImage
												className="w-44 sm:w-60 md:w-72"
												src="../images/davant-studio-controls.png"
												quality={100}
												alt="Screenshot of Davant Studio software"
											/>
										</div>
										<div className="item carousel-item">
											<StaticImage
												className="w-44 sm:w-60 md:w-72"
												src="../images/davant-studio-prompts.png"
												quality={100}
												alt="Screenshot of Davant Studio software"
											/>
										</div>
									</div>

								</div>
								<div className="absolute bottom-0 flex flex-col items-center w-full px-10 pt-8 pb-3 text-purple-500 translate-y-full rounded wrapper__countdown sm:flex-row sm:justify-center">
									<div className="flex flex-col items-center">
										<span className="mb-2 mr-3 text-xs sm:mb-auto">Free access for</span>
									</div>
									<Countdown targetDate="2024-02-17" />
									<span className="block mt-2 ml-3 text-xs sm:mt-auto">until February 17, 2024</span>
								</div>
							</div>

						</div>
					</div>

					<div className="absolute bottom-0 block h-full min-w-full -translate-x-1/2 opacity-100 background-image left-1/2 z-1">
						<StaticImage
							className="relative block h-full hero__background-image"
							src="../images/hero2.png"
							quality={100}
							placeholder="blurred"
							layout="fullWidth"
							loading="eager"
							objectFit="cover"
							objectPosition="center"
							alt="Screenshot of Davant Studio software" />
						<div className="absolute bottom-0 left-0 z-10 w-full opacity-100 gradient-fade pb-28 bg-gradient-to-b from-transparent to-base-300 "></div>
					</div>
				</div>

				<div id="third-party-disclaimer"
					className="relative z-20 block px-4 pt-4 pb-10 mt-0 bg-black disclaimer bg-opacity-30">

					<div className="container block w-auto max-w-3xl mx-auto mt-5 p-0.5 text-sm -translate-y-0.5 indicator">
						<span className="px-1 py-4 mr-2 indicator-item indicator-center badge badge-warning badge-xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
						</span>
						<div className="relative p-0.5 overflow-hidden gradient-border-wrapper">
							<div className="pt-12 pb-8 pl-8 pr-4 wrapper bg-base-300">

								<div className="absolute top-0 left-0 w-full h-full duration-100 opacity-100 -z-10 from-warning bg bg-gradient-to-b via-orange-500 to-transparent"></div>
								<div className="">
									<span className="inline-block px-1 mb-3 font-mono text-xs italic font-light leading-normal text-center bg-warning text-neutral">dependencies ~ %</span>
									<p className="mb-4 text-lg font-bold text-warning">Davant Studio is <span className="italic">not</span> a standalone AI system. <span className="inline-block">Additional installation of third-party software is required.</span></p>
									<div className="pt-4 mb-8 leading-relaxed">
										<p className="mb-4 text-lg font-bold">Already have Automatic 1111 SD Web UI installed?</p>
										<p className="mb-1">Great! Make sure you have:</p>
										<ul className="mb-4 list-disc list-inside">
											<li className="list-item">ControlNet extension installed</li>
											<li className="list-item">Added <span className="px-1 mx-1 font-mono text-sm italic font-light text-success bg-indigo-950">--api</span> to commandline arguments</li>
										</ul>
										<div className="mb-4">
											<Link className="px-2 py-0 opacity-70 btn btn-secondary btn-outline btn-sm hover:opacity-100" to="download-button"><span className="">Continue to download</span></Link>
											<Link className="text-current btn btn-link btn-sm hover:text-cyan-300" to="#SetupConfiguration">More info in the FAQ.</Link>
										</div>
										<span className="mt-6 mb-6 divider"></span>
										<p className="mb-4 text-lg font-bold">Starting from scratch?</p>
										<p className="mb-4">Here's what you'll need:</p>
										<p className=""><span className="font-extrabold text-transparent bg-indigo-900 bg-gradient-to-tr from-violet-500 via-indigo-400 to-purple-500 bg-clip-text">Stable Diffusion with Automatic111 SD Web UI</span></p>
										<p className="">The AI system that generates the images. It is free and can be run on consumer-grade hardware.</p>
										<p className="mb-4">The easiest way to get it running is our pre-built bundle of this third-party software.</p>
										<Link
										className="mb-4 btn btn-md btn-primary btn-outline"
										to="https://davant-public.s3.us-west-1.amazonaws.com/sd.webui_built_mvp-models.zip">
											Download our pre-Built Automatic1111 package
										</Link>
										<p className="mb-4"><span className="font-extrabold text-transparent bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-600 bg-clip-text">Davant Studio</span> is an <span className="italic">interface</span> to interact with an active instance of <span className="text-transparent bg-indigo-900 bg-gradient-to-tr from-violet-500 via-indigo-400 to-purple-500 bg-clip-text">Stable Diffusion.</span> For issues or questions about that project, you'll need to refer to <a className="link" to={contentVariables.auto1111.links.repoUrl}>the documentation for that project.</a></p>
									</div>

									<Link className="px-2 py-0 opacity-70 btn mb-36 btn-secondary btn-outline btn-sm hover:opacity-100" to="#Installation">
										<span className="">See installation instructions in FAQ</span>
									</Link>

									<div className="flex items-center text-transparent bg-gradient-to-b from-yellow-300 via-amber-400 to-orange-500 bg-clip-text">
										<span className="px-1 py-4 mr-2 badge badge-warning badge-xl bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500">
											<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
										</span>
										Install & configure Automatic 1111 before launching Davant Studio.</div>
								</div>
							</div>
						</div>
					</div>


					<div id="download-button" className="relative flex flex-col items-center justify-center pt-24 pb-24 text-cyan-200">
						<div className="bg__gradient
						absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0 w-5/6 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
					from-purple-950
					via-transparent
					to-transparent opacity-100"></div>
						<div className="bg__gradient
						absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
					from-fuchsia-300
					via-transparent
					to-transparent opacity-20 animate-spin-slow z-0 mix-blend-hard-light"></div>
						<div className="relative flex flex-col items-center justify-center content">
							<p className="text-lg font-bold">Ready to start creating?</p>
							<p className="text-xs">Click to download the zipped .exe application</p>
							<Link className="pl-0 pr-4 mx-auto mt-6 overflow-hidden rounded-sm shadow shadow-lg shadow-purple-900 mb-7 bo rder-opacity-50 cta__button--download effect__chromeflash btn btn-primary text-md md:text-lg indicator bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 hover:from-pink-500 hover:to-purple-400 hover:scale-105 text-neutral border-1 border-cyan-500 shadow-pink-500"
								to="https://github.com/davantsystems/davant-studio-release/releases/download/v0.5.0/DavantStudio_v0.5.0.zip">

								<span className="p-2 bg-transparent rounded-full badge-neutral">
									<svg className="stroke-neutral" width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
										<g id="SVGRepo_iconCarrier">
											<path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" strokeWidth="1.5" strokeLinecap="round"></path>
											<path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
								</span>
								<span className="pt-1">Download Davant Studio Now</span>
							</Link>
							<p className="text-xs max-w-ms">Unzip the file and double-click the DavantStudio.exe to run
							</p>
						</div>
					</div>
				</div>
			</section >

			<section className="container flex justify-center border-b-2 border-slate-700 border-opacity-10">
				<div className="relative block py-20 mx-auto ">
					<h2 className="relative inline-block w-auto px-2 py-0 mb-8 mr-auto text-2xl font-bold bg-gradient-to-br from-cyan-300 via-secondary to-cyan-400 text-neutral">Features</h2>
					<div className="max-w-2xl pr-10 mb-4 prose text-left text-transparent text-bg bg-gradient-to-br from-cyan-300 via-secondary to-purple-500 bg-clip-text">
						<ul className="pl-0 font-light leading-snug list-none list">
							<li className="mb-4 list-item"><span className="font-bold">Real-time generative AI engine: </span>Render as fast as your computer can handle</li>
							<li className="mb-4 list-item"><span className="font-bold">Control what matters: </span>What you need to dial in your vision</li>
							<li className="mb-4 list-item"><span className="font-bold">Adapts to you: </span>Use images, folders or screenshot as input</li>
							<li className="mb-4 list-item"><span className="font-bold">No internet required: </span>Your files never leave your computer</li>
							<li className="mb-4 list-item"><span className="font-bold">Expansive model library: </span>Use any Stable Diffusion checkpoint, embedding or LoRA from the community</li>
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
				<div className="max-w-3xl px-4 py-32 mx-auto text-center ">
					<p className="mb-2 text-2xl text-cyan-300">Can't find what you're looking for?</p>
					<a className="text-transparent bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-clip-text"
						href="mailto:support@davantsystems.com">support@davantsystems.com</a>
				</div>
			</section>

			<div className="fixed bottom-0 left-0 z-50 block w-full pointer-events-none bg h-1/6 bg-gradient-to-b from-transparent to-base-300 opacity-80"></div>
		</main >
	)
}

export default BetaPage

export const Head: HeadFC = () => <title>Davant Systems | Download beta software</title>
