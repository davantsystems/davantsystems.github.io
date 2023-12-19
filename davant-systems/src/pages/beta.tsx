import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Faq from "../components/Faq"

const BetaPage: React.FC<PageProps> = () => {
    return (
        <main className="py-10">
            <section className="hero">
                <div className="hero-content text-center text-neutral-content py-20">
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl mb-8 bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">Download Davant Studio Beta Software</h1>
                        <div className="flex flex-row items-center">
                            <button className="btn btn-primary shadow-md mb-4 lg:mb-0 lg:mr-4">
                                <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                Download Davant Studio Now
                            </button>
                            <div className="alert w-auto text-xs grid-flow-col text-left rounded-none bg-black bg-opacity-20 shadow-md">
                                <svg height="22px" width="24px" className="stroke-white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.986 452.986" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M165.265,53.107L21.689,81.753v132.531l143.575-2.416V53.107 M431.297,245.583l-233.18-3.991 v164.822l233.18,46.571V245.583 M165.265,241.097l-143.575-2.438v132.509l143.575,28.668V241.097 M431.297,0l-233.18,46.528 v164.822l233.18-3.969V0"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
                                <div>
                                    <p className="font-bold underline mb-1">System Requirements</p>
                                    <p>Windows 10/11 | 16gb RAM</p>
                                    <p>Nvidia 2000 series | AMD 6000 series</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container max-w-3xl">
                <div className="alert alert-warning mb-8 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <div>
                        <p className="font-bold">Davant Studio is <span className="italic">not</span> a standalone AI processor.</p>
                        <p>You must have API access to an instance of the <a className="link link-neutral" href="https://github.com/AUTOMATIC1111/stable-diffusion-webui">automatic1111 Stable Diffusion web UI.</a></p>
                        <p>See our instructions for installing auto1111 below.</p>
                    </div>
                </div>
                <p>We recommend you install and run this locally if you have a compatible graphics card.</p>
                <p>If you're an advanced user, you can access a remote Stable Diffusion instance (on your local network or a remote server).</p>

            </section>

            <div className="divider mt-10"></div>

            <section className="container max-w-3xl">
                <Faq />
            </section>

        </main >
    )
}

export default BetaPage

export const Head: HeadFC = () => <title>Davant Systems | Download beta software</title>
