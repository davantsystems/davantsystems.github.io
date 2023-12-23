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
					<div className="hero-content text-center text-neutral-content py-32">
						<div className="hero-content__inner
							flex flex-col items-center">
							<div className="logo">
								<h1 className="logo__word--first
										relative
										block
										pt-2
										pb-0
										sm:pt-1
										md:pt-1
										lg:pt-1
										mb-10
										sm:mb-10
										md:mb-20
										lg:mb-30
									">
									<span className="
										font-orbitron
										text-4xl
										sm:text-4xl
										md:text-5xl
										lg:text-6xl
										text-fx__title">
										Davant </span>
									<span className="logo__word--second
											font-yellowtail
											text-xl
											sm:text-xl
											md:text-3xl
											lg:text-4xl
											text-fx__title-secondary">
										Systems</span>

									<svg className="logo-triangle
											w-24
											sm:w-24
											md:w-28
											lg:w-36
											absolute
											block
											top-0
											left-1/2
											-translate-x-1/2"
										height="320"
										width="400"
										viewBox="0 0 400 300">
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
							<div className="hero-content__content
								max-w-4xl">
								<p className="
									max-w-sm
									md:max-w-md
									lg:max-w-xl
									mx-auto
									text-cyan-200
									mb-44
									text-sm
									sm:text-lg
									md:text-1xl
									lg:text-2xl
								">Real-time AI image tools for next-gen creative workflows & mind-blowing event experiences</p>

								<div className="md:flex md:gap-4">
									<div className="join join-vertical px-8 pt-10 pb-4 mb-auto mx-auto bg-black bg-opacity-50">
										<div className="">
											<p className="text-cyan-200 text-xs mb-3">Beta available until 2/17/24</p>
										</div>
										<a href="/beta">
											<button
												className="btn btn-primary text-lg mb-2 indicator
												bg-gradient-to-br
												from-pink-400
												via-fuchsia-500
												to-purple-500
												text-neutral
												border-1
												border-cyan-500 rounded-sm
												border-opacity-50 shadow-pink-500 shadow-sm
												">
												<span className="indicator-item indicator-bottom badge badge-success border-1 border-green-200 border-opacity-50 shadow-success shadow-sm">Free!</span>
												Get Davant Studio
												{/* <div className="badge badge-success">Free!</div> */}
											</button>
										</a>

										<div className="alert w-auto bg-transparent text-xs grid-flow-col text-left px-0">
											<svg height="22px" width="24px" className="stroke-white fill-cyan-300" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.986 452.986" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M165.265,53.107L21.689,81.753v132.531l143.575-2.416V53.107 M431.297,245.583l-233.18-3.991 v164.822l233.18,46.571V245.583 M165.265,241.097l-143.575-2.438v132.509l143.575,28.668V241.097 M431.297,0l-233.18,46.528 v164.822l233.18-3.969V0"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
											{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
											<div className="text-cyan-100">
												<p className="font-bold">Recommended specs:</p>
												<p>Windows 10/11 | 16gb RAM</p>
												<p>Nvidia 2000 series | AMD 6000 series</p>
											</div>
										</div>
									</div>

									<div className="max-w-sm shadow-xl border-2 border-black border-opacity-5 bg-black bg-opacity-40">
										<StaticImage
											src="../images/davant-studio-presets.png"
											alt="Screenshot of Davant Studio software"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="
				relative
				pb-44
				bg-gradient-to-b
				from-transparent
				to-black
				opacity-30
				mb-0
				"></div>

				<section className="relative">
					<div className="
					text-sm
					text-success
					font-mono
					w-full
					mt-0
					mb-48
					mx-auto
					max-w-sm
					md:max-w-5xl
					lg:max-w-5xl
					min-h-screen
					px-5
					pt-20
					pb-44
					z-10
					relative
					">
						<span className=" text-xs text-center bg-success text-neutral px-1">humans@davantsystems ~ %</span>
						<h2 className="relative z-10 text-2xl lg:text-3xl text-center mb-10 filter drop-shadow-sm">--- Hello World ---</h2>
						<div className="relative mx-auto z-10 grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-4">
							<div className="relative border border-opacity-10 border-success py-10 px-4 lg:px-8 lg:py-20">
								<div className="content relative z-10">
									<h4 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Booking & Events</h4>
									<p className="text-sm lg:text-lg">MC de Martino</p>
									<a className="link-hover font-bold" href="mailto:mc@davantsystems.com">mc@davantsystems.com</a>
								</div>
								<div className="bg-overlay
									absolute
									top-0
									left-0
									w-full
									h-full
									z-0
									bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]
									from-purple-900
									via-teal-900
									to-black
									opacity-10">
								</div>
							</div>
							<div className="relative border border-opacity-10 border-success py-10 px-4 lg:px-8 lg:py-20">
								<div className="content relative block z-10">
									<h4 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">AI Magic & Workflow</h4>
									<p className="text-sm lg:text-lg">David Shorey</p>
									<a className="link-hover font-bold" href="mailto:david@davantsystems.com">david@davantsystems.com</a>
								</div>
								<div className="bg-overlay
									absolute
									top-0
									left-0
									w-full
									h-full
									z-0
									bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]
									from-purple-900
									via-teal-900
									to-black
									opacity-10">
								</div>
							</div>
							<div className="relative max-w-6xl border border-opacity-10 border-success py-10 px-4 lg:px-8 lg:py-20">
								<div className="content relative block z-10">
									<h4 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Business Inquiries</h4>
									<p className="text-sm lg:text-lg">Grant Keller</p>
									<a className="link-hover font-bold" href="mailto:grant@davantsystems.com">grant@davantsystems.com</a>
								</div>
								<div className="bg-overlay
										absolute
										top-0
										left-0
										w-full
										h-full
										z-0
										bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]
										from-purple-900
										via-teal-900
										to-black
										opacity-10">
								</div>
							</div>
						</div>
					</div>
					<div className="bg-overlay
							absolute
							top-0
							left-0
							w-full
							h-full
							z-0
							bg-black
							opacity-30">
					</div>
				</section>

				<section className="bg-base py-20 px-6">
					<div className="flex flex-col mx-auto py-10 max-w-4xl md:flex-row ">
						<div className="p-4 pt-8 max-w-lg">
							<h2 className="
								text-5xl
								bg-gradient-to-br
								from-pink-400
								via-fuchsia-500
								to-purple-500
								bg-clip-text
								text-transparent
								leading-10
								mb-8">
								The future moves <span className="italic">fast</span> <br /><span className="text-3xl pl-1">Let us help you keep up</span>
							</h2>
							<div className="pl-1 pr-4 text-cyan-100">
								<p className="mb-4">The AI landscape changes by the hour. It's a full-time job to keep up with all the updates, tools, and techniques. Let us keep you up to speed so you can stay focused on making amazing things.</p>
								<p>Sign up for the newsletter to get Davant product updates and technique demonstrations you can use to supercharge your work.</p>
							</div>
						</div>
						<div className="min-w-sm w-full py-5 px-10 md:px-4 lg:px-10 bg-purple-900 bg-opacity-5 rounded-lg border-2 border-secondary border-opacity-5 shadow-sm shadow-purple-950">
							<MailchimpForm />
						</div>
					</div>
				</section>
			</main>
			<div className="vhs-effect z-0 absolute"></div>
			<div className="vhs-effect-vert z-0 absolute"></div>
		</>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Davant Systems | Open Beta available now</title>
