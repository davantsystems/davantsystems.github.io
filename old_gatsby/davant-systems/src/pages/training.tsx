import React, { useContext } from 'react';
import { Link, type HeadFC, type PageProps } from "gatsby"
import Faq from "../components/Faq"
import Countdown from "../components/Countdown"
import { StaticImage } from "gatsby-plugin-image"
import RequirementsPane from "../components/requirementsPane"
import ContentContext from "../ContentContext"
import MainNav from '../components/MainNav';

const TrainingPage: React.FC<PageProps> = () => {
	const contentVariables = useContext(ContentContext);
	return (
		<>
			<MainNav />
			<main className="">
				<section className="border-b-2 hero__wrapper border-slate-400 border-opacity-5">
					<div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden sm:flex-row">
						{/* <span className="absolute top-0 left-0 z-40 block w-screen h-screen opacity-100 hero-gradient-1"></span> */}
						<div className="relative z-20 flex flex-col items-center pt-24 pb-20 text-center text-neutral-content">
							<div className="flex flex-col items-center mb-2">

								<div className="relative flex flex-col items-center">
									<div className="flex flex-col software-spotlight sm:flex-row">
										<div className="flex flex-col px-4 text-left text">
											<h1 className="mb-2 font-light text-transparent sm:mb-4 sm:pb-4 bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-clip-text">
												<span className="text-3xl font-black sm:text-4xl md:text-5xl">Training </span><span className="text-3xl leading-normal font-extralight sm:text-4xl md:text-5xl">& Workshops</span>
											</h1>

											<div className="max-w-2xl mb-12 max-w-screen">
												<iframe
													src="https://lu.ma/embed/calendar/cal-1Q7AVkEK2CIEJHR/events?lt=dark"
													width="100%"
													height="600"
													frameBorder={0}
													// frameborder="0"
													style={{ border: "1px solid black", borderRadius: "4px" }}
													// allowfullscreen=""
													aria-hidden="false"
													// tabindex="0"
													tabIndex={0}
												></iframe>
											</div>

											<div className="flex flex-col px-6 py-8 mt-0 mb-12 rounded-md shadow-xl bg-opacity-90 bg-base-300">
												<h2 className="text-4xl text-center">Custom Training</h2>
												<div className="pt-8 mb-8">
													<ul className="pl-0 font-light leading-snug list-none sm:columns-2 list">
														<li className="mb-4 list-item">Group Workshops</li>
														<li className="mb-4 list-item">Private In-Office Training</li>
														<li className="mb-4 list-item">AI Workflow design</li>
														<li className="mb-4 list-item">Custom AI asset pipelines</li>
													</ul>
												</div>
												<p className="text-center text-secondary">Email <a href="mailto:david@davantsystems.com" className="link" target="_blank">david@davantsystems.com</a> for more info</p>
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
								alt="" />
							<div className="absolute bottom-0 left-0 z-10 w-full opacity-100 gradient-fade pb-28 bg-gradient-to-b from-transparent to-base-300 "></div>
						</div>
					</div>
				</section>


				<div className="fixed bottom-0 left-0 z-50 block w-full pointer-events-none bg h-1/6 bg-gradient-to-b from-transparent to-base-300 opacity-80"></div>
			</main >
		</>
	)
}

export default TrainingPage

export const Head: HeadFC = () => <title>Davant Systems | Training & Workshops</title>
