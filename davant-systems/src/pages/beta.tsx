import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Faq from "../components/Faq"

const BetaPage: React.FC<PageProps> = () => {
    return (
        <main className="py-10">
            <section className="hero">
                <h1 className="text-4xl">Download Davant Studio Beta Software</h1>
            </section>

            <section className="container max-w-3xl">
                <Faq/>
            </section>

        </main>
    )
}

export default BetaPage

export const Head: HeadFC = () => <title>Davant Systems | Download beta software</title>
