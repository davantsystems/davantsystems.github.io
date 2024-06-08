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
import LogoGrid from '../components/LogoGrid';


const PhotoboothPage: React.FC<PageProps> = () => {
	const contentVariables = useContext(ContentContext);

	return (
		<>
			<MainNav />
			<main className="relative z-10 text-base font-open-sans">
				<div className="relative mega-hero-wrapper">
					<section className="relative z-10 hero__wrapper">
						<div className="relative z-40 flex items-end justify-center hero__supertitle">
							<div className="relative mb-4 text-wrapper">
								<p className="relative text-6xl font-black tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-primary sm:text-8xl md:text-9xl">One of a kind</p>
								<p className="absolute w-full text-6xl font-black tracking-tighter text-center -translate-x-1/2 -translate-y-1/2 -z-10 top-1/2 left-1/2 sm:text-8xl shadow-only bg-clip-text bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-primary md:text-9xl">One of a kind</p>
							</div>
						</div>
						<div className="relative z-50 hero sm:flex-row">
							<div className="container relative z-50 flex flex-col justify-center px-4 pb-20 sm:pl-0 md:w-full sm:flex-row-reverse">
								<div className="relative inline-block mx-auto mt-0 mb-8 hero__text sm:w-1/2 sm:pt-2 md:pt-8 sm:pl-8 sm:ml-0 sm:pl-0 xl:pl-14 2xl:pl-24">
									<span className="absolute top-0 left-0 w-full h-full scale-95 rounded-lg opacity-40 -z-10 blur-xl bg-base-300 max-w-96"></span>
									<h1 className="mb-4 whitespace-pre sm:mb-4 drop-shadow-md">
										<span className="block text-4xl font-extrabold text-primary pl-2.5 text-transparent bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-clip-text sm:text-2xl md:text-3xl">Magic Mirror</span>
										<span className="-mb-4 text-6xl font-black text-transparent bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-clip-text sm:text-5xl md:text-6xl">AI </span>
										<span className="-mr-4 text-6xl font-thin skew-x-12 glow__neon--secondary text-secondary font-sacramento sm:text-5xl md:text-6xl lg:text-6xl"><span className="neon-first">P</span>hoto <span className="neon-second">B</span>ooth</span>
									</h1>
									<p className="max-w-sm mb-12 text-lg text-left sm:text-sm md:text-md lg:text-xl">Make your next event unforgettable with the next generation of interactive experiences.</p>
									<div className="flex justify-center sm:block">
										<TypeformPhotoboothBooking buttonText="Book Now" />
									</div>
								</div>

								<div className="relative inline-block w-full rounded-lg sm:w-1/2 bg-base-300">
									<span className="absolute top-0 left-0 w-full h-full scale-95 rounded-lg opacity-30 blur-xl bg-gradient-to-bl from-primary via-secondary to-purple-950"></span>
									<StaticImage
										className="relative block rounded-lg shadow-lg max-h-96 hero__image shadow-base-300"
										src="../images/launch-party-hero.jpg"
										quality={80}
										placeholder="blurred"
										loading="eager"
										alt="Photobooth"
									/>
								</div>
							</div>

						</div>
						<div className="absolute top-0 left-0 z-10 w-full h-full">
							<span className="absolute bottom-0 left-0 z-10 w-full h-full opacity-100 bg-gradient-to-t from-base-300 to-transparent"></span>
							<span className="absolute bottom-0 left-0 z-20 w-full opacity-100 h-1/2 bg-gradient-to-t from-base-300 to-transparent"></span>
							<video className="fixed top-0 left-0 z-0 object-cover w-full h-full opacity-100" autoPlay loop muted playsInline>
								<source src="../video/NinjaPenguin-02_timelapse-afters.mp4" type="video/mp4" />
							</video>
							<span className="absolute top-0 left-0 z-50 block w-screen h-full opacity-50 mix-blend-color hero-gradient-1"></span>
						</div>
					</section>

					<section className="relative z-20 bg-base-300">
						<div className="container flex flex-col px-4 py-20 mx-auto md:flex-row md:items-center">
							<div className="block mb-8 md:w-1/2 md:pr-12 md:mb-unset">
								<div className="max-w-lg ml-auto mr-auto md:mr-0">
									<h2 className="mb-8 text-2xl text-transparent bg-gradient-to-bl from-violet-400 via-cyan-400 to-blue-500 bg-clip-text sm:text-4xl md:text-3xl lg:text-4xl">Magically transformed <span className="sm:block">by AI in real-time</span></h2>
									<p className="mb-4">Our cutting-edge system snaps a photo every 3 seconds, and uses generative AI to transform people in amazing ways.</p>
									<p>See youself as paper origami, a puppet made of felt, or as a gritty commic book hero.</p>
								</div>
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
				</div>

				<section className="relative z-20 py-32 bg-base-300">
					<div className="container relative z-10 max-w-2xl px-4">
						<h2 className="max-w-lg mx-auto mb-16 text-2xl text-center text-transparent sm:text-3xl md:text-4xl bg-gradient-to-bl from-violet-400 via-cyan-400 to-blue-500 bg-clip-text">A unique interactive experience people can't stop talking about</h2>
						<div className="flex flex-col justify-start sm:flex-row">
							<div className="block w-full mb-2 mr-0 chat chat-start">
								<div className="relative block w-full py-4 chat-bubble">
									<h2 className="block w-full text-lg text-center filter drop-shadow-[0.1em_0.2em_0.4em_rgba(0,0,0,1.0)] md:text-xl">"So addicting!"</h2>
								</div>
							</div>
							<div className="block w-full mb-2 ml-0 mr-auto chat chat-end">
								<div className="relative block w-full py-4 chat-bubble">
									<h2 className="w-full text-lg text-center md:text-xl font-open-sans filter drop-shadow-[0.1em_0.2em_0.4em_rgba(0,0,0,1.0)]">"This is the future"</h2>
								</div>
							</div>
						</div>
						<div className="mb-2 chat chat-start">
							<div className="w-full py-4 sm:mx-auto sm:w-auto sm:px-8 chat-bubble">
								<h2 className="text-lg text-center md:text-xl font-open-sans filter drop-shadow-[0.1em_0.2em_0.4em_rgba(0,0,0,1.0)]">"Hands-down my favorite part of the event"</h2>
							</div>
						</div>
					</div>
					<div className="relative z-20 px-2 pt-48 sm:px-4 md:px-8">
						<p className="mb-4 text-lg font-black text-center md:text-3xl">More than a filter. A truly imaginative transformation.</p>
						<div className="diff aspect-[16/9] container max-w-3xl rounded-md shadow-black shadow-lg">
							<div className="diff-item-1">
								<img alt="daisy" src="../image/holiday-Shot_0003_00807-2After.jpg" />
							</div>
							<div className="diff-item-2">
								<img alt="daisy" src="../image/holiday-Shot_0003_00807-1Before.jpg" />
							</div>
							<div className="diff-resizer"></div>
						</div>
					</div>
					<div className="absolute bottom-0 z-0 block h-full min-w-full -translate-x-1/2 opacity-100 pointer-events-none select-none background-image left-1/2 z-1">
						<StaticImage
							className="relative block h-full opacity-50 hero__background-image"
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
				</section>

				<section className="relative z-20 flex justify-center py-24 overflow-hidden border-t-2 border-b-2 border-opacity-100 md:py-32 lg:py-48 border-purple-950">
					<div className="relative z-10 mx-auto shadow-lg bg-opacity-95 stats shadow-black stats-vertical sm:stats-horizontal">
						<div className="stat">
							<div className="stat-value">175k+</div>
							<div className="text-xl stat-title">Images generated</div>
						</div>
						<div className="stat">
							<div className="stat-value">2.5k+</div>
							<div className="text-xl stat-title">Photos printed</div>
						</div>
						<div className="stat">
							<div className="stat-value">100%</div>
							<div className="text-xl stat-title">Good times</div>
						</div>
					</div>
					<div className="absolute object-cover w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -z-10">
						<StaticImage
							className="object-cover w-full h-full"
							src="../images/prints-mosaic_corrected.jpg"
							quality={80}
							placeholder="blurred"
							loading="lazy"
							alt="Photo prints"
						/>
					</div>
					<div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-br mix-blend-color from-cyan-950 to-fuchsia-950 opacity-70"></div>
				</section>

				<section className="relative z-20 bg-base-300">
					<div className="container flex flex-col px-4 py-20 mx-auto lg:max-w-7xl">
						<div className="w-full mb-6 sm:mb-4 divider lg:mb-12">
							<h2 className="text-transparent text-md bg-gradient-to-bl from-violet-400 via-cyan-400 to-blue-500 bg-clip-text sm:text-2xl md:text-xl lg:text-2xl">Trusted by</h2>
						</div>
						<LogoGrid />
					</div>
				</section>

				<section className="relative z-20 flex flex-row justify-center w-full py-20 bg-base-300">
					<div className="relative z-30 flex flex-col items-center px-8 py-16 bg-black bg-opacity-50 border-opacity-0 rounded-md shadow-lg border-purple-950">
						<p className="max-w-2xl mb-8 text-lg text-center text-transparent bg-gradient-to-bl from-violet-400 via-cyan-400 to-blue-500 bg-clip-text sm:text-4xl md:text-3xl lg:text-4xl">Bring the future of interactive entertainment to your next event.</p>
						<TypeformPhotoboothBooking buttonText="Fill out interest form" />
						<span className="mt-12 divider">or</span>
						<p className="mt-8 mb-8 text-2xl font-bold text-center">Contact us directly</p>
						<div className="block text-left">
							<p className="mb-4 text-xl">Email: <a href="mailto:tone@davantsystems.com" className="link link-secondary">tone@davantsystems.com</a></p>
							<p className="text-xl">Phone: <a href="tel:+1-702-561-5682" className="link link-secondary">(702)561-5682</a></p>
						</div>
					</div>
					<span className="absolute top-0 left-0 z-10 block w-full h-full opacity-80 glass py-18 bg-gradient-to-br from-fuchsia-600 via-secondary to-purple-950 mix-blend-color"></span>

					<video className="absolute top-0 left-0 z-0 object-cover w-full h-full opacity-20" autoPlay loop muted playsInline>
						<source src="../video/banneranimation-01_5.mp4" type="video/mp4" />
					</video>
					<video className="absolute top-0 left-0 z-20 object-cover w-full h-full opacity-100 blur-md mix-blend-overlay" autoPlay loop muted playsInline>
						<source src="../video/banneranimation-01_5.mp4" type="video/mp4" />
					</video>
				</section>
			</main >

			<Footer />
		</>
	)
}

export default PhotoboothPage

export const Head: HeadFC = () => <title>Davant Systems | Magic Mirror AI Photobooth</title>
