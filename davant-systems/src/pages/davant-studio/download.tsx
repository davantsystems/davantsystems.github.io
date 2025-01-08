import React, { useContext } from 'react';
import { Link, type HeadFC, type PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ContentContext from "../../ContentContext";
import MainNav from "../../components/MainNav";
import Footer from "../../components/Footer";

const DownloadPage: React.FC<PageProps> = () => {
	const contentVariables = useContext(ContentContext);

	return (
		<>
			<MainNav />
			<main className="">
				<section className="relative border-b-2 hero__wrapper border-slate-400 border-opacity-5">
					<div className="relative pt-20">
						<span className="absolute top-0 left-0 z-40 block w-screen opacity-100 hero-gradient-1"></span>
						<div className="relative z-20 pt-8 pb-16">

							<h1 className="mb-12 font-light text-center text-transparent bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-clip-text">
								<span className="block text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">Downloads</span>
							</h1>
							<div className="box-border flex flex-col w-full max-w-4xl gap-2 px-4 mx-auto md:flex-row md:box-content">

								<div className="flex flex-col items-center flex-1 p-4 border-2 rounded-md bg-base-300 border-primary border-opacity-15">
									<Link className="relative z-10 w-full pl-0 pr-4 mx-auto mb-4 border-opacity-50 rounded-sm shadow-sm cta__button--download effect__chromeflash btn btn-primary text-md lg:text-md indicator bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 hover:from-pink-500 hover:to-purple-400 text-neutral border-1 border-cyan-500 shadow-pink-500"
										to="https://davant-public.s3.us-west-1.amazonaws.com/software/Davant+Studio+Builds/PC-NVIDIA/DavantStudio_win_1-1-1.rar">
										<span className="p-2 bg-transparent rounded-full badge-neutral">
											{/* <svg className="stroke-neutral" width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
														<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
														<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
														<g id="SVGRepo_iconCarrier">
															<path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" strokeWidth="1.5" strokeLinecap="round"></path>
															<path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg> */}
											<svg height="22px" width="24px" className="stroke-white fill-base-300" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.986 452.986" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M165.265,53.107L21.689,81.753v132.531l143.575-2.416V53.107 M431.297,245.583l-233.18-3.991 v164.822l233.18,46.571V245.583 M165.265,241.097l-143.575-2.438v132.509l143.575,28.668V241.097 M431.297,0l-233.18,46.528 v164.822l233.18-3.969V0"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
										</span>
										<span className="pt-1">Davant Studio for Windows</span>
									</Link>
									<div className="text-center text-md md:text-left">
										<p className="mb-2.5 mt-2">Requires Windows 10 or 11</p>
										<p>NVIDIA RTX 3060 or better</p>
									</div>
								</div>

								<div className="flex flex-col items-center flex-1 p-4 border-2 rounded-md bg-base-300 border-primary border-opacity-15">
									<Link className="relative z-10 w-full pl-0 pr-4 mx-auto mb-4 border-opacity-50 rounded-sm shadow-sm cta__button--download effect__chromeflash btn btn-primary text-md lg:text-md indicator bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 hover:from-pink-500 hover:to-purple-400 text-neutral border-1 border-cyan-500 shadow-pink-500"
										to="https://davant-public.s3.us-west-1.amazonaws.com/software/Davant+Studio+Builds/Mac/DavantStudio-1.1.1.dmg">
										<span className="p-2 bg-transparent rounded-full badge-neutral">
											{/* <svg className="stroke-neutral" width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
														<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
														<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
														<g id="SVGRepo_iconCarrier">
															<path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" strokeWidth="1.5" strokeLinecap="round"></path>
															<path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg> */}
											<svg width="22px" height="22px" className="stroke-white fill-base-300" viewBox="-1.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fff">
												<g id="SVGRepo_bgCarrier" stroke-width="0" />
												<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
												<g id="SVGRepo_iconCarrier"> <title>apple [#173]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.0002" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-102.000000, -7439.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485" id="apple-[#173]"> </path> </g> </g> </g> </g>
											</svg>
										</span>
										<span className="pt-1">Davant Studio for Mac</span>
									</Link>
									<div className="text-center text-md md:text-left">
										<p className="mb-2.5 mt-2">Requires Apple Silicon</p>
										<p>M1 or newer, macOS Sequoia 14.6 or newer</p>
									</div>
								</div>

							</div>
						</div>
					</div>

					<div className="absolute bottom-0 block h-full min-w-full -translate-x-1/2 opacity-100 pointer-events-none select-none background-image left-1/2 z-1">
						<StaticImage
							className="relative block h-full hero__background-image"
							src="../../images/hero2.png"
							quality={100}
							placeholder="blurred"
							layout="fullWidth"
							loading="eager"
							objectFit="cover"
							objectPosition="center"
							alt="Screenshot of Davant Studio software" />
						<div className="absolute bottom-0 left-0 z-10 w-full opacity-100 gradient-fade pb-28 bg-gradient-to-b from-transparent to-base-300 "></div>
					</div>
				</section>

				<section className="container max-w-xl px-4 pb-24 text-sm pt-14">
					<h2 className="mb-4 font-bold">If you purchased a Standard License</h2>
					<p className="mb-4">You will receive your license key via email. Activate your license key in the Davant Launcher.	</p>
					<p>Your key is unique to your account, do not share your license key.</p>
				</section>

				< section className="container" >
					<div className="max-w-3xl px-4 py-32 mx-auto text-center ">
						<p className="mb-2 text-2xl text-cyan-300">Can't find what you're looking for?</p>
						<a className="text-transparent bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-purple-800 bg-clip-text"
							href="mailto:support@davantsystems.com">support@davantsystems.com</a>
					</div>
				</section >

				<div className="fixed bottom-0 left-0 z-50 block w-full pointer-events-none bg h-1/6 bg-gradient-to-b from-transparent to-base-300 opacity-80"></div>
			</main >

			<Footer />
		</>
	)
}

export default DownloadPage

export const Head: HeadFC = () => <title>Davant Systems | Download Davant Studio</title>
