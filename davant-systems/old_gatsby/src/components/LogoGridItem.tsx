import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const LogoGridItem = ({path, alt}: {path:string, alt:string}) => {
    return (
        <div className="relative flex items-center justify-center px-8 py-4">
            <StaticImage
                src={path}
                quality={80}
                placeholder="blurred"
                loading="lazy"
                alt={alt}
            />
        </div>
    )
};

export default LogoGridItem;