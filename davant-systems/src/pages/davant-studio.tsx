import React, { useContext } from 'react';
import { Link, type HeadFC, type PageProps } from "gatsby"
import Faq from "../components/Faq"
import Countdown from "../components/Countdown"
import { StaticImage } from "gatsby-plugin-image"
import RequirementsPane from "../components/requirementsPane"
import ContentContext from "../ContentContext"
import MainNav from '../components/MainNav';

const DavantStudioPage: React.FC<PageProps> = () => {
	const contentVariables = useContext(ContentContext);

	return (
		<>
			<MainNav />
			<main className="">
				<section className="border-b-2 hero__wrapper border-slate-400 border-opacity-5">
					<div className="relative flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden hero sm:flex-row">
						<span className="absolute top-0 left-0 z-40 block w-screen h-screen opacity-100 hero-gradient-1"></span>
						<div className="relative z-20 flex flex-col items-center pt-8 pb-20 text-center hero-content text-neutral-content">
							<div className="flex flex-col items-center mb-2">

								<div className="relative flex flex-col items-center cta-wrapper">
									<div className="flex flex-col software-spotlight sm:flex-row">
										<div className="flex flex-col pr-8 text-left text">
											<h1 className="mb-4 font-light text-transparent bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-clip-text">
												<span className="block -mb-4 text-5xl font-bold sm:text-7xl md:text-6xl lg:text-6xl">Davant </span><span className="block text-5xl leading-tight sm:text-7xl md:text-6xl lg:text-6xl">Studio</span>
											</h1>

											<p className="mb-4 text-transparent font-extralight bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-clip-text">
												<span className="block -mb-1 text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-4xl">AI image tools <span className="font-extralight">for</span></span><span className="block text-3xl leading-tight sm:text-4xl md:text-4xl lg:text-4xl">creative professionals</span>
											</p>

											<div className="flex flex-col px-4 py-4 bg-opacity-100 shadow-xl bg-base-300">
												<div className="mb-3">
													<RequirementsPane />
												</div>
												<Link className="pl-0 pr-4 mx-auto mt-4 mb-0 rounded-sm shadow-sm bo rder-opacity-50 cta__button--download effect__chromeflash btn btn-primary text-md md:text-lg indicator bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 hover:from-pink-500 hover:to-purple-400 hover:scale-105 text-neutral border-1 border-cyan-500 shadow-pink-500"
													to={contentVariables.davant.links.davantStudioStripeCheckout}>
													<span className="p-2 bg-transparent rounded-full badge-neutral">
														<svg className="stroke-neutral" width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
															<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
															<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
															<g id="SVGRepo_iconCarrier">
																<path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" strokeWidth="1.5" strokeLinecap="round"></path>
																<path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
													</span>
													<span className="pt-1">Buy Davant Studio Now</span>
												</Link>
												<div className="pt-4 pl-8">
													<p className="pt-1 text-center">$100/month</p>
													<p className="text-xs text-center">Pause/resume your subscription any time.</p>
												</div>
											</div>
										</div>

										<div className="relative mx-auto mb-0 space-x-2 border-2 border-opacity-50 shadow-lg shadow-base-300 border-indigo-950 shadow-black screenshot-carousel wrapper__screenshots carousel carousel-center w-44 sm:w-60 md:w-96">
											<div className="relative shadow-md item carousel-item">
												<StaticImage
													className="z-10 w-44 sm:w-60 md:w-96"
													objectFit="contain"
													src="../images/davant-studio-presets.png"
													quality={100}
													alt="Screenshot of Davant Studio software"
												/>
											</div>
											<div className="relative shadow-md item carousel-item">
												<StaticImage
													className="z-10 w-44 sm:w-60 md:w-96"
													objectFit="contain"
													src="../images/davant-studio-controls.png"
													quality={100}
													alt="Screenshot of Davant Studio software"
												/>
											</div>
											<div className="relative shadow-md item carousel-item">
												<StaticImage
													className="z-10 w-44 sm:w-60 md:w-96"
													objectFit="contain"
													src="../images/davant-studio-prompts.png"
													quality={100}
													alt="Screenshot of Davant Studio software"
												/>
											</div>
										</div>
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

					<section className="container max-w-5xl px-6 mx-auto border-b-2 border-slate-700 border-opacity-10">
						<div className="relative px-4 py-12">
							<p className="block text-sm text-center">Already have a subscription?</p>
							<div className="relative flex flex-wrap items-center justify-center gap-8 pt-4">
								<Link
									to={contentVariables.davant.links.davantStudioDownload}
									className="btn btn-sm btn-outline btn-secondary">
									Download Davant Studio for Windows
								</Link>
								<Link
									to={contentVariables.davant.links.davantStudioStripePortal}
									target="_blank"
									className="btn btn-sm btn-outline btn-secondary border-opacity-10">
									Manage your subscription
								</Link>
							</div>
						</div>

						<div className="relative block mx-auto my-20 text-transparent text-bg bg-gradient-to-br from-sky-400 via-secondary to-purple-400 bg-clip-text">
							<h2 className="inline-block w-auto py-0 mb-20 mr-auto text-4xl font-black text-transparent bg-gradient-to-bl from-violet-400 via-cyan-400 to-blue-500 md:text-5xl lg:text-5xl bg-clip-text position">Features</h2>
							<div className="w-full mb-4 text-left text-transparent">
								<ul className="grid w-full gap-8 pl-0 text-xl font-light leading-snug list-none md:grid-cols-2 sm:text-2xl lg:text-3xl list">
									<li className="w-full mb-4 list-item"><h3><span className="block font-bold">Real-time generative AI engine</span></h3><span className="text-lg font-light sm:text-xl lg:text-2xl md:font-extralight lg:font-thin">Render as fast as your computer can handle</span></li>
									<li className="mb-4 list-item"><h3><span className="block font-bold">Control what matters</span></h3><span className="text-lg font-light sm:text-xl lg:text-2xl md:font-extralight lg:font-thin">What you need to dial in your vision</span></li>
									<li className="mb-4 list-item"><h3><span className="block font-bold">Adapts to you</span></h3><span className="text-lg font-light sm:text-xl lg:text-2xl md:font-extralight lg:font-thin">Use images, folders or screenshot as input</span></li>
									<li className="mb-4 list-item"><h3><span className="block font-bold">No internet required</span></h3><span className="text-lg font-light sm:text-xl lg:text-2xl md:font-extralight lg:font-thin">Your files never leave your computer</span></li>
									<li className="mb-4 list-item"><h3><span className="block font-bold">Expansive model library</span></h3><span className="text-lg font-light sm:text-xl lg:text-2xl md:font-extralight lg:font-thin">Use any Stable Diffusion checkpoint, embedding or LoRA from the community</span></li>
								</ul>
							</div>
						</div>
					</section>

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
												<Link className="px-2 py-0 opacity-70 btn btn-secondary btn-outline btn-sm hover:opacity-100" to="#download-button"><span className="">Continue to download</span></Link>
												<Link className="text-current btn btn-link btn-sm hover:text-cyan-300" to="#SetupConfiguration">More info in the FAQ.</Link>
											</div>
											<span className="mt-6 mb-6 divider"></span>
											<p className="mb-4 text-lg font-bold">Starting from scratch?</p>
											<p className="mb-4">Here's what you'll need:</p>
											<p className=""><span className="font-extrabold text-transparent bg-indigo-900 bg-gradient-to-tr from-violet-500 via-indigo-400 to-purple-500 bg-clip-text">Stable Diffusion with Automatic111 SD Web UI</span></p>
											<p className="">The AI system that generates the images. It is free and can be run on consumer-grade hardware.</p>
											<p className="mb-4">The easiest way to get it running is our pre-built bundle of this third-party software.</p>
											<Link
												className="mb-4 border-purple-900 shadow-md hover:shadow-lg hover:border-indigo-800 hover:shadow-indigo-800 hover:bg-purple-900 hover:border-purple-900 hover:text-white btn btn-md btn-secondary shadow-purple-900"
												to="https://davant-public.s3.us-west-1.amazonaws.com/software/StableDiffusion_Davant-Auto111-Quickstart.zip">
												Download Our Automatic1111 Quickstart
											</Link>
											<p className="mb-4"><span className="font-extrabold text-transparent bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-600 bg-clip-text">Davant Studio</span> is an <span className="italic">interface</span> to interact with an active instance of <span className="text-transparent bg-indigo-900 bg-gradient-to-tr from-violet-500 via-indigo-400 to-purple-500 bg-clip-text">Stable Diffusion.</span> For issues or questions about that project, you'll need to refer to <a className="link" href={contentVariables.auto1111.links.repoUrl} target="_blank">the documentation for that project.</a></p>
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
								<p className="text-lg font-bold">Have a subscription?</p>
								<Link className="pl-0 pr-4 mx-auto mt-6 overflow-hidden rounded-sm shadow shadow-lg shadow-purple-900 mb-7 bo rder-opacity-50 cta__button--download effect__chromeflash btn btn-primary text-md md:text-lg indicator bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 hover:from-pink-500 hover:to-purple-400 hover:scale-105 text-neutral border-1 border-cyan-500 shadow-pink-500"
									to={contentVariables.davant.links.davantStudioDownload}>

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
								<p className="text-xs text-center">On first startup, enter the email address you used for the purchase.</p>
								<p className="text-xs text-center">Join the <Link to="https://community.davantsystems.com" className="link">community forum</Link> for support <br />and to share what you create.</p>
							</div>
						</div>
					</div>
				</section >

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
		</>
	)
}

export default DavantStudioPage

export const Head: HeadFC = () => <title>Davant Systems | Supercharge your creative workflow</title>
