import React from "react";

const CardPerson = ({headline, name, email}: {headline: string, name: string, email: string}) => {
    return (
        <div className="relative px-4 py-10 border border-opacity-10 border-success lg:px-8 lg:py-20">
            <div className="relative z-10 block content">
                <h4 className="mb-4 text-xl font-bold sm:text-3xl md:text-3xl lg:text-4xl lg:mb-6">{headline}</h4>
                <p className="text-sm lg:text-lg">{name}</p>
                <a className="font-bold link-hover" href="mailto:{email}">{email}</a>
            </div>
            <div className="bg-overlay
                absolute
                top-0
                left-0
                w-full
                h-full
                z-0
                bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]
                from-purple-900
                via-teal-900
                to-black
                opacity-10">
            </div>
        </div>
    )
};

export default CardPerson;