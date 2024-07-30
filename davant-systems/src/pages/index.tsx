import * as React from "react"
import type { HeadFC, PageProps, graphql } from "gatsby"
import MailchimpForm from "../components/MailchimpForm"
import { StaticImage } from "gatsby-plugin-image"
import ContentContext from "../ContentContext"
import MainNav from "../components/MainNav"
import CardPerson from "../components/CardPerson"
import InstagramEmbed from "../components/InstagramEmbed"
import { Link } from "gatsby"
import Footer from "../components/Footer"

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js"></script>

			<MainNav />
			<main className="z-20 pt-12">
				<section className="relative hero snap-start">
					{/* <div className="hero-overlay bg-opacity-60"></div> */}
					<div className="relative z-20 block py-12 text-center hero-content text-neutral-content md:py-20">
						<div className="flex flex-col items-center mx-auto hero-content__inner">
							<div className="logo">
								<h1 className="sr-only">Davant Systems</h1>
							</div>
							<div className="max-w-4xl mx-2 hero-content__content">

								<div className="flex flex-col items-center justify-center sm:flex-row sm:gap-10">

									<div>
										<p className="block w-auto max-w-sm mx-auto mb-2 overflow-visible text-lg text-left text-transparent md:max-w-md lg:max-w-xl text-cyan-200 md:mb-12 sm:text-2g md:text-3xl lg:text-5xl bg-gradient-to-br from-cyan-500 via-secondary to-purple-500 bg-clip-text position">
											<span className="block pt-2 text-4xl font-bold md:leading-10 md:text-6xl lg:mb-1">Next-Gen </span>
											<span className="block font-light leading-tight md:leading-10 pl-0.5 mb-4">creative tools</span>
											<span className="block text-3xl font-bold leading-tight md:leading-10 md:mb-3 md:text-5xl">Mind-blowing </span>
											<span className="block font-light md:leading-3 pl-0.5 pb-8 -mb-4 overflow-visible">possibilities</span></p>

										<div className="z-10 hidden px-8 pt-10 pb-4 mx-auto mb-auto shadow-md sm:block join join-vertical md:mt-auto bg-base-300 bg-opacity-80">
											<Link to="/davant-studio/">
												<button
													className="mb-2 text-lg border-opacity-50 rounded-sm shadow-sm btn btn-primary indicator bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 hover:from-pink-500 hover:to-purple-400 hover:scale-105 text-neutral border-1 border-cyan-500 shadow-pink-500 ">
													Get Davant Studio
												</button>
											</Link>

											<div className="w-auto grid-flow-col px-0 text-xs text-left bg-transparent border-0 alert">
												<svg height="22px" width="24px" className="stroke-white fill-cyan-300" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.986 452.986" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M165.265,53.107L21.689,81.753v132.531l143.575-2.416V53.107 M431.297,245.583l-233.18-3.991 v164.822l233.18,46.571V245.583 M165.265,241.097l-143.575-2.438v132.509l143.575,28.668V241.097 M431.297,0l-233.18,46.528 v164.822l233.18-3.969V0"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
												{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-info shrink-0"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
												<div className="text-cyan-100">
													<p className="font-bold">Recommended specs:</p>
													<p>Windows 10/11 | 16gb RAM</p>
													<p>Nvidia 2000 series | AMD 6000 series</p>
												</div>
											</div>
										</div>
									</div>

									<div className="max-w-sm mb-4 bg-black border-2 shadow-lg sm:mb-0 border-primary border-opacity-5 bg-opacity-40">
										<StaticImage
											src="../images/davant-studio-controls.png"
											alt="Screenshot of Davant Studio software"
										/>
									</div>
									<div className="z-10 block px-8 pt-10 pb-4 mx-auto mb-auto shadow-md sm:hidden join join-vertical md:mt-auto bg-base-300 bg-opacity-80">
										<Link to="/davant-studio/">
											<button
												className="mb-2 text-lg border-opacity-50 rounded-sm shadow-sm btn btn-primary indicator bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 hover:from-pink-500 hover:to-purple-400 hover:scale-105 text-neutral border-1 border-cyan-500 shadow-pink-500 ">
												Get Davant Studio
											</button>
										</Link>

										<div className="w-auto grid-flow-col px-0 text-xs text-left bg-transparent border-0 alert">
											<svg height="22px" width="24px" className="stroke-white fill-cyan-300" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.986 452.986" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M165.265,53.107L21.689,81.753v132.531l143.575-2.416V53.107 M431.297,245.583l-233.18-3.991 v164.822l233.18,46.571V245.583 M165.265,241.097l-143.575-2.438v132.509l143.575,28.668V241.097 M431.297,0l-233.18,46.528 v164.822l233.18-3.969V0"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
											{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-info shrink-0"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
											<div className="text-cyan-100">
												<p className="font-bold">Recommended specs:</p>
												<p>Windows 10/11 | 16gb RAM</p>
												<p>Nvidia 2000 series | AMD 6000 series</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute top-0 block h-full min-w-full -translate-x-1/2 opacity-50 pointer-events-none background-image left-1/2 -z-10">
						<StaticImage
							className="relative block h-full hero__background-image"
							src="../images/hero1.png"
							quality={100}
							placeholder="blurred"
							layout="fullWidth"
							loading="eager"
							objectFit="cover"
							objectPosition="center"
							alt="Screenshot of Davant Studio software" />
					</div>

					<div className="absolute bottom-0 left-0 z-0 w-full mb-0 opacity-100 pb-28 bg-gradient-to-b from-transparent to-base-300"></div>
				</section>

				<section className="px-6 pt-12 pb-12 bg-base snap-start">
					<div className="absolute top-0 left-0 w-full pb-12 mb-0 bg-gradient-to-t from-transparent to-black opacity-20"></div>
					<div className="flex flex-col max-w-4xl py-10 mx-auto md:flex-row ">
						<div className="block w-full pt-8 mb-10 md:p-4 md:w-1/2 basis-full">
							<h2 className="mb-8 text-5xl leading-10 text-transparent bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text">
								Get updates <br /><span className="pl-1 text-xl sm:text-3xl">in our email newsletter</span>
							</h2>
							<div className="pl-1 pr-4 text-cyan-100">
								<p className="mb-1">The best way to get "official" updates.</p>
								<p>Product updates, event info, and updates in AI.</p>
							</div>
						</div>
						<div className="relative block w-1/2 w-full px-10 pt-5 pb-3 bg-purple-900 border-2 rounded-lg shadow-sm basis-full min-w-sm md:px-4 lg:px-10 bg-opacity-5 border-secondary border-opacity-5 shadow-purple-950">
							<MailchimpForm />
							<div className="bg-overlay
								absolute
								pointer-events-none
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

				<section className="relative snap-start">
					<div className="relative z-10 w-full max-w-sm px-5 pt-32 pb-24 mx-auto mt-0 font-mono text-sm text-success md:max-w-5xl lg:max-w-5xl">
						<h2 className="relative z-10 mb-4 text-2xl text-center lg:text-3xl md:mb-8 filter drop-shadow-sm">─── Hello World ───</h2>
						<span className="inline-block px-1 mb-4 text-xs text-center bg-success text-neutral">humans@davantsystems ~ %</span>
						<div className="relative z-10 grid grid-rows-3 gap-4 mx-auto md:grid-rows-1 md:grid-cols-3">
							<CardPerson headline="Booking & Events" name="MC de Martino" email="mc@davantsystems.com" />
							<CardPerson headline="AI Magic & Workflow" name="David Shorey" email="david@davantsystems.com" />
							<CardPerson headline="Business Inquiries" name="Grant Keller" email="grant@davantsystems.com" />
						</div>
					</div>
					{/* <div className="absolute top-0 left-0 z-0 w-full h-full bg-black bg-overlay opacity-30">
					</div> */}
				</section>


			</main>

			<Footer />

			<div className="absolute z-0 vhs-effect"></div>
			<div className="absolute z-0 vhs-effect-vert"></div>
		</>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Davant Systems | AI for creative professionals</title>
