import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const LogoGrid = () => {
    return (
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            <div className="relative flex items-center justify-center px-2 py-2 sm:px-4 md:px-8 sm:py-0">
                <StaticImage
                    src="../images/logos/logo-RalphLauren-white.png"
                    quality={80}
                    placeholder="blurred"
                    loading="lazy"
                    alt="Ralph Lauren logo"
                />
            </div>
            <div className="relative flex items-center justify-center px-2 py-2 sm:px-4 md:px-8 sm:py-0">
                <StaticImage
                    src="../images/logos/logo-AMD-white.png"
                    quality={80}
                    placeholder="blurred"
                    loading="lazy"
                    alt="AMD logo"
                />
            </div>
            <div className="relative flex items-center justify-center px-2 py-2 sm:px-4 md:px-8 sm:py-0">
                <StaticImage
                    src="../images/logos/logo-Hackaday-white.png"
                    quality={80}
                    placeholder="blurred"
                    loading="lazy"
                    alt="Hackaday logo"
                />
            </div>
            <div className="relative flex items-center justify-center px-2 py-2 sm:px-4 md:px-8 sm:py-0">
                <StaticImage
                    src="../images/logos/logo-VanJones-white.png"
                    quality={80}
                    placeholder="blurred"
                    loading="lazy"
                    alt="Van Jones logo"
                />
            </div>
            <div className="relative flex items-center justify-center px-2 py-2 sm:px-4 md:px-8 sm:py-0">
                <StaticImage
                    src="../images/logos/logo-AILA-white.png"
                    quality={80}
                    placeholder="blurred"
                    loading="lazy"
                    alt="AILA logo"
                />
            </div>
            <div className="relative flex items-center justify-center px-2 py-2 sm:px-4 md:px-8 sm:py-0">
                <StaticImage
                    src="../images/logos/logo-AIMVS-white.png"
                    quality={80}
                    placeholder="blurred"
                    loading="lazy"
                    alt="AIMVS logo"
                />
            </div>
            <div className="relative flex items-center justify-center px-2 py-2 sm:px-4 md:px-8 sm:py-0">
                <StaticImage
                    src="../images/logos/logo-BruinAI-color.png"
                    quality={80}
                    placeholder="blurred"
                    loading="lazy"
                    alt="BruinAI logo"
                />
            </div>
            <div className="relative flex items-center justify-center px-2 py-2 sm:px-4 md:px-8 sm:py-0">
                <StaticImage
                    src="../images/logos/logo-CuriousRefuge-white.png"
                    quality={80}
                    placeholder="blurred"
                    loading="lazy"
                    alt="CuriousRefuge logo"
                />
            </div>
            <div className="relative flex items-center justify-center px-2 py-2 sm:px-4 md:px-8 sm:py-0">
                <StaticImage
                    src="../images/logos/logo-GlobalObjects-white.png"
                    quality={80}
                    placeholder="blurred"
                    loading="lazy"
                    alt="GlobalObjects logo"
                />
            </div>
            <div className="relative flex items-center justify-center px-2 py-2 sm:px-4 md:px-8 sm:py-0">
                <StaticImage
                    src="../images/logos/logo-NFMLA-white.png"
                    quality={80}
                    placeholder="blurred"
                    loading="lazy"
                    alt="NFMLA logo"
                />
            </div>
            <div className="relative flex items-center justify-center px-2 py-2 sm:px-4 md:px-8 sm:py-0">
                <StaticImage
                    src="../images/logos/logo-silverdraft.png"
                    quality={80}
                    placeholder="blurred"
                    loading="lazy"
                    alt="silverdraft logo"
                />
            </div>
            <div className="relative flex items-center justify-center px-2 py-2 sm:px-4 md:px-8 sm:py-0">
                <StaticImage
                    src="../images/logos/logo-XRM-white.png"
                    quality={80}
                    placeholder="blurred"
                    loading="lazy"
                    alt="XRM logo"
                />
            </div>
        </div>
    )
}

export default LogoGrid;