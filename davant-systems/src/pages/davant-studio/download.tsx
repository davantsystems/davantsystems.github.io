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
							<div role="alert" className="container flex items-center max-w-lg py-2 mx-auto mb-4 text-center text-warning alert">
  								<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current shrink-0" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
								<p className="text-lg">This is a 2-step download. You need BOTH of these!</p>
								{/* <p>Click the buttons below to download Davant Studio and the Stable Diffusion Quickstart bundle.</p> */}
							</div>
							<div className="box-border flex flex-col w-full max-w-4xl gap-2 px-4 mx-auto md:flex-row md:box-content">
								<div className="relative flex flex-col items-center flex-1 p-4 bg-opacity-100 border-2 rounded-md border-opacity-5 border-secondary bg-base-300">
									<p className="mb-4 mr-auto badge badge-warning">Download 1 of 2</p>
									<Link
										className="w-full mb-4 border-purple-900 shadow-md l-0 text-md lg:text-md hover:shadow-lg hover:border-cyan-300 hover:bg-cyan-500 hover:border-purple-900 btn btn-md btn-secondary shadow-base-300"
										to="https://davant-public.s3.us-west-1.amazonaws.com/software/StableDiffusion_Davant-Auto111-Quickstart.zip">
										<span className="p-2 bg-transparent rounded-full badge-neutral">
											<svg className="fill-base-300" fill="#000000" width="28px" height="28px" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"></path></g></svg>
										</span>
										Stable Diffusion Quickstart
									</Link>
									<div className="text-center text-md md:text-left md:mr-auto">
										<p className="mb-2.5">The AI image-generation engine.</p>
										<p>This must be running for Davant Studio to work!</p>
										{/* <p className="mb-2">Custom bundle of the core Stable Diffusion engine.</p>
										<p className="mb-1">Everything you need to get started.</p> */}
										{/* <p>Built with <a href={contentVariables.auto1111.links.repoUrl} className="link" target="_blank" rel="noreferrer">Automatic1111</a></p> */}
									</div>
								</div>

								<div className="flex flex-col items-center flex-1 p-4 border-2 rounded-md bg-base-300 border-primary border-opacity-15">
									<p className="mb-4 mr-auto badge badge-warning">Download 2 of 2</p>
									<Link className="relative z-10 w-full pl-0 pr-4 mx-auto mb-4 border-opacity-50 rounded-sm shadow-sm cta__button--download effect__chromeflash btn btn-primary text-md lg:text-md indicator bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 hover:from-pink-500 hover:to-purple-400 text-neutral border-1 border-cyan-500 shadow-pink-500"
										to="https://github.com/davantsystems/davant-studio-release/releases/download/v1.0.2/DavantStudio_v1.0.2.zip">
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
										<p className="mb-2.5">Our creative software application.</p>
										<p>An interface to control Stable Diffusion and integrate it into your workflow.</p>
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
					<h2 className="mb-4 font-bold">Advanced Users:</h2>
					<p className="mb-4">If you already have a working installation of Automatic1111, you can use it. If it's running on a non-default port, be sure to change the IP & port in the "Settings" tab in Davant Studio.</p>
					<p>Davant Studio is now compatible with <a href="https://github.com/lllyasviel/stable-diffusion-webui-forge" target="_blank" rel="noreferrer" className="link">SD Forge</a>. Our tests show a ~25% speed increase. A custom "quickstart" bundle for SD Forge is coming soon.</p>
				</section>

				<div className="fixed bottom-0 left-0 z-50 block w-full pointer-events-none bg h-1/6 bg-gradient-to-b from-transparent to-base-300 opacity-80"></div>
			</main >

			<Footer />
		</>
	)
}

export default DownloadPage

export const Head: HeadFC = () => <title>Davant Systems | Download Davant Studio</title>
