import React from "react";
import { PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import ZohoAmbassadorForm from "../components/ZohoAmbassadorForm";

const AmbassadorsPage: React.FC<PageProps> = () => {
    return (
        <>
            <MainNav />
            <main className="relative pb-24 text-base font-open-sans">
                <section className="relative">
                    <div className="relative max-w-full pt-16">
                        <div className="relative z-20 max-w-2xl px-4 pt-12 pb-4 mx-auto md:pb-8">
                            <h1 className="text-2xl font-bold text-transparent text-cyan-300 bg-clip-text bg-gradient-to-tr from-cyan-300 via-cyan-200 to-fuchsia-100 sm:text-2xl md:text-3xl lg:text-3xl prose-h1:">Creative Ambassadors Program</h1>
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
                                objectPosition="center bottom"
                                alt="Abstract color gradient from pink to dark purple" />
                            <div className="absolute bottom-0 left-0 z-10 w-full opacity-100 gradient-fade pb-28 bg-gradient-to-b from-transparent to-base-300 "></div>
                        </div>
                    </div>
                    <div className="max-w-2xl px-4 py-8 mx-auto">
                        <div className="mb-0">
                            {/* <span className="text-2xl text-transparent sm:text-3xl md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-t from-fuchsia-400 via-fuchsia-300 to-fuchsia-100">Innovate. Create. Inspire.</span> */}
                            {/* <span className="text-2xl text-transparent sm:text-3xl md:text-4xl lg:text-4xl bg-clip-text bg-gradient-to-t from-fuchsia-400 via-fuchsia-300 to-fuchsia-100">Create (in) the future</span> */}
                            {/* <p>Existing AI image tools can be creatively limiting, throttle your service, or even see what you're creating.</p> */}
                            <p className="mb-4">We're on a mission to build the best AI-powered creative software for professionals in visual art & design.</p>
                            {/* <ul>
                            <li> Unlock the immense universe of Stable Diffusion resources in one click.</li>
                            <li>Generate on your local machine in real-time.</li>
                        </ul> */}
                            <p className="mb-0 prose-p:">From fine artist to filmmaker, fashion design to photography -- if you're passionate about visual expression, we're here to help supercharge your process. We're crafting a "new paintbrush", it's up to you to make great things with it!</p>
                        </div>
                        <span className="py-8 divider"></span>
                        <div className="pb-4">
                            <h2 className="mb-4 text-xl font-bold text-transparent text-cyan-300 bg-clip-text bg-gradient-to-tr from-cyan-300 via-cyan-200 to-fuchsia-100 sm:text-xl md:text-2xl lg:text-2xl prose-h1:">Join the Creative Ambassadors Program</h2>
                            <p className="mb-8 prose-p">We’re looking for talented, tech-savvy artists who want to get their hands on our tools and push the boundaries of creativity.</p>
                            <p className="mb-4 prose-p:">This invite-only program begins later this summer, and includes:</p>
                            <ul className="list-disc list-inside list prose-ul:">
                                <li className="list-item prose-li:">Free access to all features of Davant Studio</li>
                                <li className="list-item prose-li:">Access to VIP online workshops & industry-specific training sessions</li>
                                <li className="list-item prose-li:">Exclusive access to new features and tools before release</li>
                                <li className="list-item prose-li:">Invitation to submit to our ongoing competition/gallery series</li>
                                <li className="list-item prose-li:">Be part of a community of other forward-thinking & talented creators</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <ZohoAmbassadorForm />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AmbassadorsPage;
