import * as React from "react"
import type { HeadFC, PageProps, graphql } from "gatsby"
import MailchimpForm from "../components/MailchimpForm"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<main className="z-20">
				<section className="hero">
					{/* <div className="hero-overlay bg-opacity-60"></div> */}
					<div className="hero-content text-center text-neutral-content py-20">
						<div className="flex flex-col items-center">
							<div className="logo">
								<h1
									className="
										relative
										block
										py-5
										mb-10
										sm:mb-10
										md:mb-20
										lg:mb-20
									">
									<span className="
										font-orbitron
										text-4xl
										sm:text-6xl
										md:text-7xl
										lg:text-9xl
										text-fx__title
									">
										Davant </span>
									<span className="
										font-yellowtail
										text-3xl
										sm:text-4xl
										md:text-5xl
										lg:text-8xl
										text-fx__title-secondary
									">
										Systems
									</span>

									<svg
										height="320"
										width="400"
										viewBox="0 0 400 300"
										className="
											logo-triangle
											w-32
											sm:w-44
											md:w-60
											lg:w-80
											absolute
											block
											top-0
											left-1/2
											-translate-x-1/2
										"
									>
										<defs>
											<linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
												<stop offset="0%" style={{ stopColor: 'rgb(50,50,50)', stopOpacity: 0.2 }} />
												<stop offset="100%" style={{ stopColor: 'black', stopOpacity: 0.2 }} />
											</linearGradient>
										</defs>
										<filter id="dropshadow" height="130%">
											<feGaussianBlur in="SourceAlpha" stdDeviation="3" />
											<feOffset dx="2" dy="2" result="offsetblur" />
											<feMerge>
												<feMergeNode />
												<feMergeNode in="SourceGraphic" />
											</feMerge>
										</filter>
										<polygon points="0,0 400,0 200,300" stroke="#36e2f8" strokeWidth="3" />
									</svg>
								</h1>
							</div>
							<div className="max-w-4xl">
								<p className="
									mb-14
									text-lg
									sm:text-xl
									md:text-2xl
									lg:text-3xl
								">Real-time AI image transformation engine for mind-blowing interactive & next-gen creative workflows.</p>

								<div className="grid grid-cols-2">
									<div className="flex flex-col items-center">
										<div className="alert w-auto">
											<p>Open Beta now available until 2/17/24</p>
										</div>
										<a href="/beta">
											<button
												className="btn btn-primary py-3 mb-2"
											>
												Get Davant Studio
												<div className="badge badge-success">Free!</div>
											</button>
										</a>

										<div className="alert w-auto text-xs grid-flow-col text-left px-0">
											<svg height="22px" width="24px" className="stroke-white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.986 452.986" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M165.265,53.107L21.689,81.753v132.531l143.575-2.416V53.107 M431.297,245.583l-233.18-3.991 v164.822l233.18,46.571V245.583 M165.265,241.097l-143.575-2.438v132.509l143.575,28.668V241.097 M431.297,0l-233.18,46.528 v164.822l233.18-3.969V0"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
											{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
											<div>
												<p className="font-bold">Recommended specs:</p>
												<p>Windows 10/11 | 16gb RAM</p>
												<p>Nvidia 2000 series | AMD 6000 series</p>
											</div>
										</div>
									</div>

									<div className="mockup-window shadow-xl border-2 border-black border-opacity-5 bg-black bg-opacity-40">
										<StaticImage
											src="../images/davant-studio-presets.png"
											alt="Screenshot of the Davant Studio "
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="divider"></div>

				<section className="container text-green-400 font-mono max-w-6xl mt-10 mb-14 p-5 pb-10 border-2 border-black shadow-lg filter drop-shadow-xl bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-gray-900 to-black rounded-xl">
					<h2 className="text-3xl text-center mb-5 filter drop-shadow-sm">Hello World</h2>
					<div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3">
						<div className="border border-green-500 p-4">
							<h4 className="text-xl font-bold mb-4">Booking & Events</h4>
							<p>MC de Martino</p>
							<a className="link-green-400 font-bold" href="mailto:mc@davantsystems.com">mc@davantsystems.com</a>
						</div>
						<div className="border border-green-500 p-4">
							<h4 className="text-xl font-bold mb-4">AI Magic & Workflow</h4>
							<p>David Shorey</p>
							<a href="mailto:grant@davantsystems.com">david@davantsystems.com</a>
						</div>
						<div className="border border-green-500 p-4">
							<h4 className="text-xl font-bold mb-4">Business Inquiries</h4>
							<p>Grant Keller</p>
							<a href="mailto:david@davantsystems.com">grant@davantsystems.com</a>
						</div>
					</div>
				</section>

				<section className="bg-slate-950">
					<div className="flex flex-col mx-auto py-10 max-w-4xl md:flex-row ">
						<div className="p-4 pt-4">
							<h2 className="text-3xl mb-6">The future moves fast, <br />and we're sending you signals</h2>
							<p>The AI landscape changes by the hour. Luckily, we've got a warp drive.</p>
							<p>We live on the bleeding-edge of creative tech, and we want to send field reports back to your studio. Sign up to keep your antennas tuned to our frequency.  </p>
						</div>
						<div className="py-5 px-10 bg-secondary bg-opacity-5 rounded-lg">
							<MailchimpForm />
						</div>
					</div>
				</section>
			</main>
			<div className="vhs-effect z-0"></div>
			<div className="vhs-effect-vert z-0"></div>
		</>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Davant Systems | Open Beta available now</title>
