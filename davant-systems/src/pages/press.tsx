import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import davantStudioPresets from "../images/davant-studio-presets.png"
import davantStudioControls from "../images/davant-studio-controls.png"
import davantStudioControlnet from "../images/davant-studio-controlnet.png"
import davantStudioPrompts from "../images/davant-studio-prompts.png"
import davantStudioSettings from "../images/davant-studio-settings.png"

const PressPage: React.FC<PageProps> = () => {
    return (
        <main className="relative px-8 pt-14 pb-96">
            <section className="container relative z-10">
                <div className="max-w-lg mx-auto">
                    <h1 className="mb-4 text-3xl">Press</h1>
                    <div className="screenshots">
                        <h2 className="mb-4 text-xl">Davant Studio</h2>
                        <h3 className="mb-2 text-lg">Software Screenshots</h3>
                        <ul className="flex flex-wrap list">
                            <Link
                                to={davantStudioPresets}
                                target="_blank"
                                className="w-1/2 p-2 list-item link link-secondary">
                                <StaticImage
                                    src="../images/davant-studio-presets.png"
                                    alt="Davant Studio - Presets Tab"
                                    className="w-full"
                                    placeholder="blurred" />
                                Davant Studio - Presets Tab
                            </Link>
                            <Link
                                to={davantStudioControls}
                                target="_blank"
                                className="w-1/2 p-2 list-item link link-secondary">
                                <StaticImage
                                    src="../images/davant-studio-controls.png"
                                    alt="Davant Studio - Controls Tab"
                                    className="w-full"
                                    placeholder="blurred" />
                                Davant Studio - Controls Tab
                            </Link>
                            <Link
                                to={davantStudioPrompts}
                                target="_blank"
                                className="w-1/2 p-2 link list-item link-secondary">
                                <StaticImage
                                    src="../images/davant-studio-prompts.png"
                                    alt="Davant Studio - Prompts Tab"
                                    className="w-full"
                                    placeholder="blurred" />
                                Davant Studio - Prompts Tab
                            </Link>
                            <Link
                                to={davantStudioControlnet}
                                target="_blank"
                                className="w-1/2 p-2 link list-item link-secondary">
                                <StaticImage
                                    src="../images/davant-studio-controlnet.png"
                                    alt="Davant Studio - ControlNet Tab"
                                    className="w-full"
                                    placeholder="blurred" />
                                Davant Studio - ControlNet Tab
                            </Link>
                            <Link
                                to={davantStudioSettings}
                                target="_blank"
                                className="w-1/2 p-2 link list-item link-secondary">
                                <StaticImage
                                    src="../images/davant-studio-settings.png"
                                    alt="Davant Studio - Settings Tab"
                                    className="w-full"
                                    placeholder="blurred" />
                                Davant Studio - Settings Tab
                            </Link>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="absolute top-0 left-0 z-0 w-full h-screen bg opacity-30">
                <StaticImage
                    src="../images/hero1.png"
                    alt="Davant Systems Press & Media Assets"
                    className="object-cover w-full h-full"
                    placeholder="blurred"
                />
            </div>
        </main>
    )
}

export default PressPage

export const Head: HeadFC = () => <title>Davant Systems | Press & Media Assets</title>
