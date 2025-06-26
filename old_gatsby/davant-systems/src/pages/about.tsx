import React from "react";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";


const AboutPage = () => {
    return (
        <>
            <MainNav />
            <main className="container pt-32 pb-24">
                <div className="relative max-w-lg px-4 pt-16 mx-auto mb-12">
                    <h1 className="mb-8 text-3xl font-bold">About Davant Systems</h1>
                    <p>Davant Systems is a software company that specializes in AI-powered creative software for professionals in visual art & design.</p>
                </div>

                <div className="max-w-lg px-4 py-8 mx-auto">
                    <h2 className="mb-2 text-2xl font-bold">Team</h2>
                    <p className="mb-2 font-bold">Grant Keller</p>
                    <p className="mb-2 font-bold">David Shorey</p>
                    <p className="mb-2 font-bold">Matt Whitesell</p>
                    <p className="mb-2 font-bold">MC de Martino</p>
                    <p className="mb-2 font-bold">Isaac Laster</p>
                    <p className="mb-2 font-bold">Kevin Aguirre</p>
                    <p className="mb-2 font-bold">Laura Pursley</p>
                    <p className="mb-2 font-bold">Tone Burnette</p>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AboutPage;