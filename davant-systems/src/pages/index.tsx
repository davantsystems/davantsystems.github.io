import * as React from "react"
import type { HeadFC, PageProps, graphql } from "gatsby"
import MailchimpForm from "../components/MailchimpForm"
import { Image, StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<main className="z-20">
				<section className="hero
					relative">
					{/* <div className="hero-overlay bg-opacity-60"></div> */}
					<div className="hero-content
						relative
						block
						z-20
						text-center text-neutral-content py-12 md:py-20">
						<div className="hero-content__inner
							flex flex-col items-center mx-auto">
							<div className="logo">
								<h1 className="logo__word--first
										relative
										block
										pt-2
										pb-0
										sm:pt-1
										md:pt-1
										lg:pt-1
										mb-32
										sm:mb-32
										md:mb-24
										lg:mb-28
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
							<div className="
								hero-content__content
								max-w-4xl
								mx-2">

								<div className="flex flex-col-reverse justify-center md:flex-row items-center md:gap-10">

									<div>
										<p className="
										max-w-sm
										text-left
										md:max-w-md
										lg:max-w-xl
										mx-auto
										text-cyan-200
										mb-2
										md:mb-12
										text-lg
										sm:text-2g
										md:text-3xl
										lg:text-5xl
										w-auto
										bg-gradient-to-br
										from-cyan-500
										via-secondary
										to-purple-500
										bg-clip-text
										text-transparent
										block
										position
										overflow-visible
									">
										<span className="pt-2 text-6xl font-bold block leading-10 lg:mb-1">Next-Gen </span>
										<span className="block font-light leading-10 pl-0.5 mb-4">creative tools</span>
										<span className="block text-5xl font-bold leading-10 lg:mb-3">Mind-blowing </span>
										<span className="block font-light leading-3 pl-0.5 pb-8 -mb-4 overflow-visible">imagination</span></p>

										<div className="join join-vertical px-8 pt-10 pb-4 -mt-12 md:mt-auto z-10 mb-auto mx-auto bg-base-300 bg-opacity-80 shadow-md">
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
												hover:from-pink-500
												hover:to-purple-400
												hover:scale-105
												text-neutral
												border-1
												border-cyan-500 rounded-sm
												border-opacity-50 shadow-pink-500 shadow-sm
												">
													<span className="indicator-item indicator-bottom badge badge-success border-1 border-green-200 border-opacity-50 shadow-success shadow-sm">Free Access</span>
													Get Davant Studio
													{/* <div className="badge badge-success">Free!</div> */}
												</button>
											</a>

											<div className="alert border-0 w-auto bg-transparent text-xs grid-flow-col text-left px-0">
												<svg height="22px" width="24px" className="stroke-white fill-cyan-300" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.986 452.986" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M165.265,53.107L21.689,81.753v132.531l143.575-2.416V53.107 M431.297,245.583l-233.18-3.991 v164.822l233.18,46.571V245.583 M165.265,241.097l-143.575-2.438v132.509l143.575,28.668V241.097 M431.297,0l-233.18,46.528 v164.822l233.18-3.969V0"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
												{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
												<div className="text-cyan-100">
													<p className="font-bold">Recommended specs:</p>
													<p>Windows 10/11 | 16gb RAM</p>
													<p>Nvidia 2000 series | AMD 6000 series</p>
												</div>
											</div>
										</div>
									</div>

									<div className="max-w-sm shadow-lg border-2 border-primary border-opacity-5 bg-black bg-opacity-40">
										<StaticImage
											src="../images/davant-studio-controls.png"
											alt="Screenshot of Davant Studio software"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="background-image
						absolute
						block
						top-0
						left-1/2
						-translate-x-1/2
						min-w-full
						-z-10
						opacity-50
						
						h-full">
						<StaticImage
							className="hero__background-image
							h-full
							relative
							block"
							src="../images/hero1.png"
							quality={100}
							placeholder="blurred"
							layout="fullWidth"
							loading="eager"
							objectFit="cover"
							objectPosition="center"
							alt="Screenshot of Davant Studio software" />
					</div>
				</section>

				<div className="
				relative
				pb-60
				-mt-60
				bg-gradient-to-b
				from-transparent
				to-base-300
				opacity-100
				mb-0
				"></div>
				<div className="bg-base-300 pb-32"></div>

				<section className="relative">
					<div className="
					text-sm
					text-success
					font-mono
					w-full
					mt-0
					mx-auto
					max-w-sm
					md:max-w-5xl
					lg:max-w-5xl
					min-h-screen
					px-5
					pt-28
					pb-44
					z-10
					relative
					">
						<h2 className="relative z-10 text-2xl lg:text-3xl text-center mb-12 md:mb-20 filter drop-shadow-sm">─── Hello World ───</h2>
						<span className="text-xs text-center bg-success text-neutral px-1 mb-4 inline-block">humans@davantsystems ~ %</span>
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
				<div className="
				relative
				pb-32
				bg-gradient-to-t
				from-transparent
				to-black
				opacity-30
				mb-0
				"></div>

				<section className="bg-base py-20 px-6">
					<div className="flex flex-col mx-auto py-10 max-w-4xl md:flex-row ">
						<div className="md:p-4 pt-8 md:max-w-lg mb-10">
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
								The future <span className="inline-block sm:inline-block">moves <span className="italic">fast</span></span> <br /><span className="text-xl sm:text-3xl pl-1">Let us help you keep up</span>
							</h2>
							<div className="pl-1 pr-4 text-cyan-100">
								<p className="mb-4 md:mb-0">The AI landscape changes by the hour. It's a full-time job to keep up with all the updates, tools, and techniques. Let us keep you up to speed so you can stay focused on making amazing things.</p>
								<p>Sign up for the newsletter to get Davant product updates and technique demonstrations you can use to supercharge your work.</p>
							</div>
						</div>
						<div className="relative min-w-sm w-full pt-5 pb-3 px-10 md:px-4 lg:px-10 bg-purple-900 bg-opacity-5 rounded-lg border-2 border-secondary border-opacity-5 shadow-sm shadow-purple-950">
							<MailchimpForm />
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
								opacity-5">
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer>
				<section className="max-w-4xl mx-auto block w-full
					px-4
					py-8">
				<a
					className="flex items-center text-xs text-cyan-300"
					href="https://instagram.com/DavantSystems">
					<svg className="stroke-secondary fill-cyan-700 mr-2"
						width="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"></path> </g></svg>
					@DavantSystems
				</a>
				</section>
			</footer>
			<div className="vhs-effect z-0 absolute"></div>
			<div className="vhs-effect-vert z-0 absolute"></div>
		</>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Davant Systems | Open Beta available now</title>
