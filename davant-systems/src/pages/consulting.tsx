import React, { useContext } from 'react';
import { Link, type HeadFC, type PageProps } from "gatsby"
import Faq from "../components/Faq"
import Countdown from "../components/Countdown"
import { StaticImage } from "gatsby-plugin-image"
import RequirementsPane from "../components/requirementsPane"
import ContentContext from "../ContentContext"
import MainNav from '../components/MainNav';

const BetaPage: React.FC<PageProps> = () => {
	const contentVariables = useContext(ContentContext);
	return (
		<>
			<MainNav />
			<main className="">
				<section className="border-b-2 hero__wrapper border-slate-400 border-opacity-5">
					<div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden hero sm:flex-row">
						<span className="absolute top-0 left-0 z-40 block w-screen h-screen opacity-100 hero-gradient-1"></span>
						<div className="relative z-20 flex flex-col items-center pt-8 pb-20 text-center hero-content text-neutral-content">
							<div className="flex flex-col items-center mb-2">

								<div className="relative flex flex-col items-center cta-wrapper">
									<div className="flex flex-col software-spotlight sm:flex-row">
										<div className="flex flex-col pr-8 text-left text">
											<h1 className="pb-4 mb-8 font-light text-transparent bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-clip-text">
												<span className="text-5xl font-black sm:text-7xl md:text-6xl">Consulting </span><span className="text-5xl leading-normal font-extralight sm:text-7xl md:text-6xl">& Training</span>
											</h1>

											<div className="flex flex-col px-4 py-3 mt-0 mb-12 bg-opacity-100 shadow-xl bg-base-300">
												<div className="pt-4 pb-3">
													<ul className="pl-0 font-light leading-snug list-none sm:columns-2 list">
														<li className="mb-4 list-item">Group Workshops</li>
														<li className="mb-4 list-item">Private In-Office Training</li>
														<li className="mb-4 list-item">AI Workflow design</li>
														<li className="mb-4 list-item">Custom AI asset pipelines</li>
													</ul>
												</div>												
											</div>
											<p className="text-center text-secondary">Email <a href="mailto:david@davantsystems.com" className="link" target="_blank">david@davantsystems.com</a> for more info</p>
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
				</section>


				<div className="fixed bottom-0 left-0 z-50 block w-full pointer-events-none bg h-1/6 bg-gradient-to-b from-transparent to-base-300 opacity-80"></div>
			</main >
		</>
	)
}

export default BetaPage

export const Head: HeadFC = () => <title>Davant Systems | Download beta software</title>
