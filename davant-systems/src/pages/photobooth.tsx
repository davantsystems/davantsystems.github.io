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
			<main className="font-open-sans">
				<section className="border-b-2 border-opacity-100 hero__wrapper border-base-300">
					<div className="relative flex flex-col items-center justify-center overflow-hidden hero sm:flex-row">
						<span className="absolute top-0 left-0 z-40 block w-screen h-screen opacity-100 hero-gradient-1"></span>
						<div className="container relative z-20 flex flex-col justify-center max-w-4xl px-4 pt-24 pb-20 sm:flex-row-reverse md:pt-32">
							<div className="relative inline-block mx-auto mt-0 mb-8 sm:pt-8 sm:pl-8 sm:ml-0 sm:pl-0">
								<h1 className="mb-4 whitespace-pre sm:mb-8">
									<span className="block text-4xl font-extrabold text-primary pl-2.5 text-transparent bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-clip-text sm:text-2xl md:text-3xl">Magic Mirror</span>
									<span className="-mb-4 text-6xl font-black text-transparent bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-clip-text sm:text-5xl md:text-6xl">AI </span>
									<span className="-mr-4 text-6xl font-thin skew-x-12 glow__neon--secondary text-secondary font-sacramento sm:text-5xl md:text-6xl lg:text-6xl"><span className="neon-first">P</span>hoto <span className="neon-second">B</span>ooth</span>
								</h1>
								<div className="flex justify-center sm:block">
									<TypeformPhotoboothBooking buttonText="Book Now" />
								</div>
							</div>

							<div className="relative inline-block w-full sm:w-1/2">
								<StaticImage
									src="../images/launch-party-hero.jpg"
									quality={80}
									placeholder="blurred"
									loading="eager"
									alt="Photobooth"
								/>
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
				</section>

				<section>
					<div className="container flex flex-col px-4 py-20 mx-auto md:flex-row">
						<div className="block mb-8 md:w-1/2 md:pr-8 md:mb-unset">
							<h2 className="mb-8 text-lg text-transparent bg-gradient-to-bl from-violet-400 via-cyan-400 to-blue-500 bg-clip-text sm:text-4xl md:text-3xl lg:text-4xl">See yourself transformed <span className="block">by AI in real-time</span></h2>
							<p className="mb-4">Our cutting-edge system snaps a photo every 3 seconds, and uses generative AI to transform people in amazing ways.</p>
							<p>See youself as paper origami, a puppet made of felt, or as a gritty commic book hero.</p>
						</div>
						<div className="block md:w-1/2">
							<div className="relative block mb-2 bg-purple-900 border-2 rounded-lg shadow-lg embed-video-container faux-border-wrapper bg-opacity-5 border-secondary border-opacity-5 shadow-slate-950">
								<iframe
									className="w-full h-full embed-video"
									src="https://www.youtube.com/embed/vuYqdw3HwDc"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
							<p className="z-10 mb-4 text-sm italic text-center text-transparent bg-gradient-to-bl from-violet-400 via-cyan-400 to-blue-500 bg-clip-text sm:text-sm md:text-md">Watch video to see the experience in action</p>
						</div>
					</div>
				</section>

				<section className="py-32 bg-base-300">
					<div className="container max-w-2xl px-4">
						<h2 className="max-w-lg mx-auto mb-16 text-2xl text-center text-transparent sm:text-3xl md:text-4xl bg-gradient-to-bl from-violet-400 via-cyan-400 to-blue-500 bg-clip-text">A unique interactive experience people can't stop talking about</h2>
						<div className="flex flex-col justify-start sm:flex-row">
							<div className="block w-full mb-2 mr-0 chat chat-start">
								<div className="relative block w-full py-4 chat-bubble">
									<h2 className="block w-full text-lg text-center md:text-xl break-keep font-open-sans">"So addicting!"</h2>
								</div>
							</div>
							<div className="block w-full mb-2 ml-0 mr-auto chat chat-end">
								<div className="relative block w-full py-4 chat-bubble">
									<h2 className="w-full text-lg text-center md:text-xl font-open-sans">"This is the future."</h2>
								</div>
							</div>
						</div>
						<div className="mb-2 chat chat-start">
							<div className="w-full py-4 sm:mx-auto sm:w-auto sm:px-8 chat-bubble">
								<h2 className="text-lg text-center md:text-xl font-open-sans">"Hands-down my favorite part of the event!"</h2>
							</div>
						</div>
					</div>
				</section>

				<section className="relative flex justify-center py-48 overflow-hidden">
					<div className="relative z-10 mx-auto shadow-lg bg-opacity-90 stats shadow-black">
						<div className="stat">
							<div className="stat-value">100k+</div>
							<div className="text-xl stat-title">Images generated</div>
						</div>
						<div className="stat">
							<div className="stat-value">2.5k+</div>
							<div className="text-xl stat-title">Photos printed</div>
						</div>
					</div>
					<div className="absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -z-10">
						<StaticImage
							src="../images/prints-mosaic_corrected.jpg"
							quality={80}
							placeholder="blurred"
							loading="lazy"
							alt="Photo prints"
						/>
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

				<section className="flex flex-row justify-center py-12 py-18 bg-base-300">
					<div className="flex flex-col items-center px-20 py-8 border-2 rounded-md bg-purple-950 bg-opacity-5 border-purple-950 border-opacity-10">
						<p className="mb-2 text-center text-cyan-100">Interested in booking?</p>
						<TypeformPhotoboothBooking buttonText="Tell us about your event" />
						<p className="mt-8 text-center"><span className="block">Or contact us directly </span>Email: <a href="mailto:tone@davantsystems.com" className="link">tone@davantsystems.com</a></p>
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
