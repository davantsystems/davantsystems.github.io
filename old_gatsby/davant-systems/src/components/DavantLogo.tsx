import React from "react";

const DavantLogo = () => {
    return (
        <div className="relative block pt-2 pb-0 mb-32 logo__word--first sm:pt-1 md:pt-1 lg:pt-1 sm:mb-32 md:mb-24 lg:mb-28 ">
            <span className="text-4xl font-orbitron sm:text-4xl md:text-5xl lg:text-6xl text-fx__title">
                Davant </span>
            <span className="text-xl logo__word--second font-yellowtail sm:text-xl md:text-3xl lg:text-4xl text-fx__title-secondary">
                Systems</span>

            <svg className="absolute top-0 block w-24 -translate-x-1/2 logo-triangle sm:w-24 md:w-28 lg:w-36 left-1/2"
                height="320"
                width="400"
                viewBox="0 0 400 300">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: 'rgb(50,50,50)', stopOpacity: 0.2 }} />
                        <stop offset="100%" style={{ stopColor: 'black', stopOpacity: 0.2 }} />
                    </linearGradient>
                </defs>
                <filter id="dropshadow" height="130%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="2" dy="2" result="offsetblur" />
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <polygon points="0,0 400,0 200,300" stroke="#36e2f8" strokeWidth="3" />
            </svg>
        </div>
    )
}

export default DavantLogo;