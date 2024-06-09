import React, { useContext, useEffect } from 'react';
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
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';


const PhotoboothPage: React.FC<PageProps> = () => {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (typeof window !== "undefined") {

			// const tl = gsap.timeline({
			// 	scrollTrigger: {
			// 		trigger: "section",
			// 		start: "top bottom-=50%",  // starts halfway through the viewport
			// 		end: "bottom top+=50%",  // ends halfway through the viewport
			// 		markers: true,
			// 		scrub: true,
			// 		snap: {
			// 			snapTo: "labels",
			// 			duration: { min: 0.2, max: 0.5 },
			// 			delay: 0.2,
			// 			ease: "power1.inOut",
			// 			directional: true,
			// 		}
			// 	}
			// });

			// // Adding animations with labels
			// tl.from("#label1", { opacity: 0.4, y: 40, duration: 1 })
			// 	.addLabel("label1")
			// tl.from("#label2", { opacity: 0, x: -40, duration: 1 })
			// 	.addLabel("label2")
			// tl.to("#label3", { opacity: 1, y: 0, duration: 1 })
			// 	.addLabel("label3")
			// tl.to("#label4", { opacity: 1, y: 0, duration: 1 })
			// 	.addLabel("label4")


			// gsap.from("#label1", {
			// 	opacity: 0,
			// 	y: -20,
			// 	duration: 1,
			// 	scrollTrigger: {
			// 		trigger: "#label1",
			// 		start: "top bottom",
			// 		end: "to center",
			// 		scrub: 1,
			// 		toggleActions: "play none none reverse",
			// 	},
			// });

			const tlTitleOne = gsap.timeline({
				scrollTrigger: {
					trigger: "#megaTitleTwo",
					start: "bottom 90%",
					end: "bottom 0%",
					// markers: true,
					scrub: 1,
					// toggleActions: "play pause resume reverse",
					// pin: true,
					snap: {
						snapTo: "labels",
						duration: { min: 0.2, max: 1 },
						delay: 0.2,
						// ease: "power1.inOut",
						directional: true,
					},
				},
			});

			const tlMegaTitle = gsap.timeline({
				scrollTrigger: {
					trigger: "#megaTitle",
					start: "bottom 75%",
					end: "bottom top",
					// markers: true,
					scrub: 1,
					// toggleActions: "play pause resume reverse",
					pin: true,
					snap: {
						snapTo: "labels",
						duration: { min: 0.2, max: 1 },
						delay: 0.2,
						// ease: "power1.inOut",
						directional: true,
					},
				},
			});

			tlMegaTitle.addLabel("start")

			const tlMegaTitleTop = gsap.timeline({
				scrollTrigger: {
					trigger: "#megaTitle",
					start: "top 10%",
					end: "bottom top",
					// markers: true,
					scrub: 1,
					// toggleActions: "play pause resume reverse",
					pin: true,
					// snap: {
					// 	snapTo: "labels",
					// 	duration: { min: 0.2, max: 1 },
					// 	delay: 0.2,
					// 	// ease: "power1.inOut",
					// 	// directional: true,
					// },
				},
			});




			tlTitleOne
				.fromTo("#megaTitleOneMain", { opacity: "0%", y: "10%", duration: 1 }, { opacity: "100%", y: "0%" }, "<")
				.fromTo("#megaTitleOneShadow", { opacity: "0%", y: "10%", duration: 1 }, { opacity: "100%", y: "0%" }, "<")
				.fromTo("#megaTitleTwoMain", { opacity: "90%", scale: 1.8, y: "50%", duration: 1,  ease: "power3.inOut" }, { opacity: "100%", scale: 1, y: "0%" }, "<")
				.fromTo("#megaTitleTwoShadow", { opacity: "90%", scale: 1.8, y: "50%", duration: 1 }, { opacity: "100%", scale: 1, y: "0%" }, "<")


			const tlGuestsSection = gsap.timeline({
				scrollTrigger: {
					trigger: "#guests-wrapper",
					start: "top bottom",
					end: "bottom top",
					markers: true,
					scrub: 1,
					// toggleActions: "play pause resume reverse",
					pin: true,
				},
			});



			// const tlTitleTwo = gsap.timeline({
			// 	scrollTrigger: {
			// 		trigger: "#megaTitleTwo",
			// 		start: "top 50%",
			// 		end: "=+200%",
			// 		markers: true,
			// 		scrub: 1,
			// 		// toggleActions: "play pause resume reverse",
			// 		// pin: true,
			// 	},
			// });

			// tlTitleTwo
			// 	.from("#megaTitleTwoMain", { opacity: 0.9, y: "200%", duration: 1 }, "<")
			// 	.from("#megaTitleTwoShadow", { opacity: 0.9, y: "200%", duration: 1 }, "<")

			// const tlHero = gsap.timeline({
			// 	scrollTrigger: {
			// 		trigger: "#megaTitleTwo",
			// 		start: "top 90%",
			// 		end: "=+200%",
			// 		// markers: true,
			// 		scrub: 1,
			// 		toggleActions: "play pause resume reset",
			// 		// pin: true,
			// 		// snap: {
			// 		// 	snapTo: "labels",
			// 		// 	duration: { min: 0.2, max: 1 },
			// 		// 	delay: 0.2,
			// 		// 	ease: "power1.inOut",
			// 		// 	directional: true,
			// 		// },
			// 	},
			// });

			// tlHero
			// .add("start")
			// .fromTo("#megaTitleOneMain",
			// 	{
			// 		opacity: "0%",
			// 		y: "60%",
			// 		duration: 1,
			// 		scale: 1.5,
			// 		toggleActions: "play pause resume reset",
			// 		// scrollTrigger: {
			// 		// 	markers: true,
			// 		// 	pin: true,
			// 		// 	trigger: "#megaTitleOneMain",
			// 		// 	start: "top center",
			// 		// 	end: "+=200%",
			// 		// 	scrub: 1,
			// 		// 	snap: {
			// 		// 		snapTo: "labels",
			// 		// 		duration: { min: 0.2, max: 5 },
			// 		// 		delay: 1,
			// 		// 		ease: "power1.inOut",
			// 		// 		directional: true,
			// 		// 	},
			// 		// },
			// 	},
			// 	{
			// 		opacity: "100%",
			// 		y: "30%",
			// 		scale: 1,
			// 	},
			// 	"start"
			// )
			// .fromTo("#megaTitleOneShadow",
			// 	{
			// 		opacity: "0%",
			// 		y: "60%",
			// 		duration: 1,
			// 		scale: 1.5,
			// 		toggleActions: "play none none reverse",
			// 		// scrollTrigger: {
			// 		// 	markers: true,
			// 		// 	// pin: true,
			// 		// 	trigger: "#megaTitleOne",
			// 		// 	start: "top bottom",
			// 		// 	end: "=+2000%",
			// 		// 	scrub: 1,
			// 		// },
			// 	},
			// 	{
			// 		opacity: 1,
			// 		y: "30%",
			// 		scale: 1,
			// 	},
			// 	"start"
			// )
			// .fromTo("#megaTitleTwo",
			// 	{
			// 		opacity: 0.8,
			// 		y: "-200%",
			// 		scale: 1.3,
			// 		duration: 1,
			// 		toggleActions: "play none none reverse",
			// 		// scrollTrigger: {
			// 		// 	trigger: "#megaTitleTwo",
			// 		// 	// pin: true,
			// 		// 	start: "top bottom",
			// 		// 	end: "top center",
			// 		// 	scrub: 1,
			// 		// },
			// 	},
			// 	{
			// 		opacity: 1,
			// 		y: 0,
			// 		scale: 1,
			// 	},
			// 	"<"
			// )
			// .fromTo("#megaTitleTwoShadow",
			// 	{
			// 		opacity: 0.8,
			// 		y: 0,
			// 		scale: 1.3,
			// 		duration: 1,
			// 		toggleActions: "play none none reverse",
			// 		// scrollTrigger: {
			// 		// 	trigger: "#megaTitleTwo",
			// 		// 	// pin: true,
			// 		// 	start: "top bottom",
			// 		// 	end: "top center",
			// 		// 	scrub: 1,
			// 		// },
			// 	},
			// 	{
			// 		opacity: 1,
			// 		y: 0,
			// 		scale: 1,
			// 	},
			// 	"<"
			// )

			// .from("#megaTitleTwo",
			// 	{
			// 		duration: 1,
			// 		opacity: 1,
			// 		toggleActions: "play none none reverse",
			// 		// scrollTrigger: {
			// 		// 	trigger: "#megaTitleTwo",
			// 		// 	start: "top center",
			// 		// 	end: "+=200%",
			// 		// 	markers: true,
			// 		// 	scrub: 1,
			// 		// 	pin: true,
			// 		// },
			// 	},
			// )





			const tlGuests = gsap.timeline({});

			tlGuests
				.fromTo("#guests-one",
					{
						clipPath: "polygon(-100% 0%, -100% 0%, -100% 100%, 0% 100%)"
					},
					{
						clipPath: "polygon(100% 0%, -100% 0%, -100% 100%, 100% 100%)",
						duration: 2,
						repeat: -1,
						yoyo: true,
						ease: "power3.inOut"
					},
					"<")
				.fromTo(
					"#guests-two",
					{
						clipPath: "polygon(-100% 0%, 100% 0%, 100% 100%, 0% 100%)",
					},
					{
						clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
						duration: 2,
						repeat: -1,
						yoyo: true,
						ease: "power3.inOut",
					},
					"<"
				)


			// const tlOverview = gsap.timeline({
			// 	scrollTrigger: {
			// 		trigger: "#overview",
			// 		start: "top bottom",
			// 		end: "top center",
			// 		markers: true,
			// 		scrub: 1,
			// 		toggleActions: "play none none reverse",
			// 		snap: {
			// 			snapTo: "labels",
			// 			duration: { min: 0.2, max: 0.5 },
			// 			delay: 0.2,
			// 			ease: "power1.inOut",
			// 			directional: true,
			// 		},
			// 	},
			// });

			// tlOverview
			// 	.add("start")
			// 	.from("#overview__content", { opacity: 0, x: -100, duration: 1 }, "start")
			// 	.from("#overview__video", { opacity: 0, x: 100, duration: 1 }, "start")
			// 	.addLabel("end");
		}
	}, []);
	const contentVariables = useContext(ContentContext);

	return (
		<>
			<MainNav />
			<main className="relative z-10 text-base font-open-sans">
				<div className="relative">
					<section id="fancyHero" className="relative">
						<span className="relative z-50 block h-[70vh] bg-yellow-400 bg-opacity-0"></span>
						<div id="megaTitle" className="relative z-40 flex flex-col justify-end hero__supertitle">
							<div className="relative block">
								<div id="megaTitleOne" className="relative block text-2xl font-black text-center opacity-100 sm:text-3xl md:text-4xl">
									<p id="megaTitleOneMain" className="relative z-10 text-transparent opacity-100 bg-clip-text bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-primary">Make your event</p>
									{/* <p id="megaTitleOneShadow" className="absolute z-0 text-transparent -translate-x-1/2 -translate-y-1/2 opacity-100 top-1/2 left-1/2 shadow-only bg-clip-text bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-primary">Make your event</p> */}
									
								</div>
								<div id="megaTitleTwo" className="relative block text-6xl font-black text-center opacity-100 sm:text-8xl md:text-9xl">
									<p id="megaTitleTwoMain" className="relative text-transparent opacity-100 bg-clip-text bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-primary">One of a kind</p>
									<p id="megaTitleTwoShadow" className="absolute w-full text-transparent -translate-x-1/2 -translate-y-1/2 -z-10 top-1/2 left-1/2 shadow-only bg-clip-text bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-primary">One of a kind</p>
								</div>
							</div>
						</div>
						<span className="relative z-50 block h-[100vh] bg-yellow-400 bg-opacity-0"></span>
						<div id="guests-wrapper" className="hidden max-w-6xl mx-auto bg-red-400">
							<div className="">
								<div className="">
									<img src="/image/photobooth-hero-guest1-before.png" width="100%" className="relative block object-contain w-full h-full" alt="Guests Before" />
								</div>
								{/* <div className="absolute bottom-0 left-0 w-full" id="guests-one">
									<StaticImage
										className="object-contain w-full"
										src="../images/photobooth-hero-guest1-before.png"
										quality={80}
										placeholder="blurred"
										loading="eager"
										alt="Guests Before"
									/>
								</div>
								<div className="absolute bottom-0 left-0 w-full" id="guests-two">
									<StaticImage
										className="object-contain w-full"
										src="../images/photobooth-hero-guest1-after.png"
										quality={80}
										placeholder="blurred"
										loading="eager"
										alt="Guests Before"
									/>
								</div> */}
							</div>
						</div>
						<div className="absolute top-0 left-0 z-10 w-full h-full">
							<span className="absolute top-0 left-0 z-10 w-full h-full bg-black opacity-30"></span>
							<span className="absolute bottom-0 left-0 z-10 w-full opacity-100 h-1/2 bg-gradient-to-t from-base-300 to-transparent"></span>
							<span className="absolute bottom-0 left-0 z-20 w-full opacity-100 h-1/4 bg-gradient-to-t from-base-300 to-transparent"></span>
							<video className="fixed top-0 left-0 z-0 object-cover w-full h-full opacity-100" autoPlay loop muted playsInline>
								<source src="../video/NinjaPenguin-02_timelapse-afters.mp4" type="video/mp4" />
							</video>
							<span className="absolute top-0 left-0 z-50 block w-screen h-full opacity-50 mix-blend-color hero-gradient-1"></span>
						</div>
					</section>

					<section className="relative z-20 pt-32 pb-20 bg-base-300">
						<div className="relative z-30 hero sm:flex-row" id="label1">
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

								<div className="relative inline-block w-full m-2 mb-auto rounded-lg sm:w-1/2 bg-base-300">
									<span className="absolute top-0 left-0 w-full h-full scale-95 opacity-30 blur-xl bg-gradient-to-bl from-primary via-secondary to-purple-950"></span>
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
					</section>

					<section className="relative z-20 bg-base-300" id="overview">
						<div className="container flex flex-col px-4 py-20 mx-auto md:flex-row md:items-center">
							<div className="block mb-8 md:w-1/2 md:pr-12 md:mb-unset" id="overview__content">
								<div className="relative max-w-lg ml-auto mr-auto md:mr-0">
									<h2 className="mb-8 text-2xl text-transparent bg-gradient-to-bl from-violet-400 via-cyan-400 to-blue-500 bg-clip-text sm:text-4xl md:text-3xl lg:text-4xl">Magically transformed <span className="sm:block">by AI in real-time</span></h2>
									<p className="mb-4">Our cutting-edge system snaps a photo every 3 seconds, and uses generative AI to transform people in amazing ways.</p>
									<p>See youself as paper origami, a puppet made of felt, or a comic book hero.</p>
								</div>
							</div>
							<div className="block md:w-1/2" id="overview__video">
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
					<div className="container relative z-10 max-w-2xl px-4" id="label3">
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

				<section className="relative z-20 flex justify-center py-24 overflow-hidden border-t-2 border-b-2 border-opacity-100 md:py-32 lg:py-48 border-purple-950" id="label4">
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
