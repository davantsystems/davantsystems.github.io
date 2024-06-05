import React, { useContext } from 'react';
import { Link, type HeadFC, type PageProps } from "gatsby"
import Faq from "../components/Faq"
import Countdown from "../components/Countdown"
import { StaticImage } from "gatsby-plugin-image"
import RequirementsPane from "../components/requirementsPane"
import ContentContext from "../ContentContext"
import MainNav from "../components/MainNav";
import TypeformPhotoboothBooking from '../components/TypeformPhotoboothBooking';
import Footer from '../components/Footer';
import PhotoboothStats from '../components/photoboothStats';

const PhotoboothPage: React.FC<PageProps> = () => {
	const contentVariables = useContext(ContentContext);

	return (
		<>
			<MainNav />
			<main className="">
				<section className="border-b-2 border-opacity-100 hero__wrapper border-base-300">
					<div className="relative flex flex-col items-center justify-center overflow-hidden hero sm:flex-row">
						<span className="absolute top-0 left-0 z-40 block w-screen h-screen opacity-100 hero-gradient-1"></span>
						<div className="relative z-20 flex flex-col items-center pt-8 pb-20 text-center hero-content text-neutral-content">
							<div className="flex flex-col items-center mb-2">
								<div className="relative flex flex-col items-center cta-wrapper">
									<div className="flex flex-col software-spotlight">
										<div className="flex flex-col pr-8 mb-4 text-left text">
											<h1 className="mb-0 whitespace-pre">
												<span className="-mb-4 text-5xl font-black text-transparent bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-clip-text sm:text-7xl md:text-8xl">AI </span><span className="-mr-4 text-5xl font-thin skew-x-12 glow__neon--secondary text-secondary font-sacramento sm:text-7xl md:text-8xl lg:text-8xl"><span className="neon-first">P</span>hoto <span className="neon-second">B</span>ooth</span>
											</h1>
										</div>

										<div className="relative w-full mb-12 bg-purple-900 border-2 rounded-lg shadow-lg embed-video-container faux-border-wrapper min-w-sm bg-opacity-5 border-secondary border-opacity-5 shadow-slate-950">
											<iframe
												className="w-full embed-video"
												src="https://www.youtube.com/embed/vuYqdw3HwDc"
												title="YouTube video player"
												frameBorder="0"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen

											></iframe>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="absolute bottom-0 block h-full min-w-full -translate-x-1/2 opacity-100 pointer-events-none select-none background-image left-1/2 z-1">
							<StaticImage
								className="relative block h-full hero__background-image"
								src="../images/hero2.png"
								quality={100}
								placeholder="blurred"
								layout="fullWidth"
								loading="eager"
								objectFit="cover"
								objectPosition="center"
								alt="Abstract color gradient from pink to dark purple" />
							<div className="absolute bottom-0 left-0 z-10 w-full opacity-100 gradient-fade pb-28 bg-gradient-to-b from-transparent to-base-300 "></div>
						</div>
					</div>
				</section >

				<section className="flex justify-center">
					<div className="shadow stats">
						<div className="stat">
							<div className="stat-value">100k+</div>
							<div className="stat-title">Images generated</div>
						</div>
						<div className="stat">
							<div className="stat-value">2.5k+</div>
							<div className="stat-title">Photos printed</div>
						</div>
					</div>
				</section>

				{/* <section className="container max-w-3xl mx-auto border-b-2 border-slate-700 border-opacity-10">
					<div className="relative block py-20 mx-auto ">
						<h2 className="relative inline-block w-auto px-2 py-0 mb-8 mr-auto text-4xl font-extrabold text-transparent opacity-0 bg-gradient-to-br from-cyan-300 via-secondary to-cyan-400 bg-clip-text">Features</h2>
						<div className="max-w-2xl pr-10 mb-4 prose text-left text-transparent text-bg bg-gradient-to-br from-cyan-300 via-secondary to-purple-500 bg-clip-text">
							<ul className="pl-0 font-light leading-snug list-none md:grid md:grid-cols-3 list">
								<li className="mb-4 list-item"><span className="font-extrabold">Real-time transformations </span><span className="font-extralight"></span></li>
								<li className="mb-4 list-item"><span className="font-extrabold">Endless amazement </span><span className="font-extralight"></span></li>
								<li className="mb-4 list-item"><span className="font-extrabold">Imaginative styles</span><span className="font-extralight"></span></li>
							</ul>
						</div>
					</div>
				</section> */}

				<section className="flex justify-center py-18 bg-base-300">
					<div className="container flex flex-col py-12">
						<p className="mb-2 text-center text-cyan-100">Interested in booking?</p>
						<TypeformPhotoboothBooking />
					</div>
				</section>

				<div className="fixed bottom-0 left-0 z-50 block w-full pointer-events-none bg h-1/6 bg-gradient-to-b from-transparent to-base-300 opacity-80"></div>
			</main >

			<Footer />
		</>
	)
}

export default PhotoboothPage

export const Head: HeadFC = () => <title>Davant Systems | Magic Mirror AI Photobooth</title>
