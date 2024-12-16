import React from 'react';
import { Link } from 'gatsby';


const PurchaseCard = ({ level }: { level: string }) => {
    return (
        <div className="flex-1 px-12 pt-8 pb-8 shadow-sm card bg-base-100 shadow-purple-900">
            <h3 className="mb-8 text-3xl text-center text-white">{level === "standard" ? "Standard" : "Lite"}</h3>

            <ul className="mb-8 list-disc list-outside">
                {level === "standard" ? (
                    <>
                        <li className="pb-2 mb-2 border-b-2 border-purple-950 border-opacity-20 list-item">Max size: 2048x2048</li>
                        <li className="pb-2 mb-2 border-b-2 border-purple-950 border-opacity-20 list-item">Active ControlNets: 2</li>
                        <li className="pb-2 mb-2 border-b-2 border-purple-950 border-opacity-20 list-item">Seed Control: Random, manual number or alphanumeric</li>
                        <li className="pb-2 mb-2 border-b-2 border-purple-950 border-opacity-20 list-item">Save presets?: Yes</li>
                        <li className="pb-2 mb-2 border-b-2 border-purple-950 border-opacity-20 list-item">Create preset groups?: Yes</li>

                    </>
                ) : (
                    <>
                        <li className="pb-2 mb-2 border-b-2 border-purple-950 border-opacity-20 list-item">Max size: 1024x1024</li>
                        <li className="pb-2 mb-2 border-b-2 border-purple-950 border-opacity-20 list-item">Active ControlNets: 1</li>
                        <li className="pb-2 mb-2 border-b-2 border-purple-950 border-opacity-20 list-item">Seed Control: Random only</li>
                        <li className="pb-2 mb-2 border-b-2 border-purple-950 border-opacity-20 list-item">Save presets?: No</li>
                        <li className="pb-2 mb-2 border-b-2 border-purple-950 border-opacity-20 list-item">Create preset groups?: No</li>
                    </>
                )}
            </ul>

            <p className="justify-end mb-4 text-2xl text-center text-white">{level === "standard" ? ("$30/month") : ("Free")}</p>

            <Link className="justify-end pl-0 pr-4 mx-auto mt-auto mb-0 overflow-hidden border-opacity-50 rounded-sm shadow shadow-lg shadow-purple-900 cta__button--download effect__chromeflash btn btn-primary text-md md:text-lg indicator bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 hover:from-pink-500 hover:to-purple-400 hover:scale-105 text-neutral border-1 border-cyan-500 shadow-pink-500"
                to={level === "standard" ? "https://buy.stripe.com/3cs7vZ6Nr3Azc3CbIK" : "https://mailchi.mp/davantsystems/davant-studio-free-download"}>

                <span className="p-2 bg-transparent rounded-full badge-neutral">
                    <svg className="stroke-neutral" width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" strokeWidth="1.5" strokeLinecap="round"></path>
                            <path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </span>
                <span className="pt-1">{level === "standard" ? "Unlock Features" : "Download"}</span>
            </Link>
        </div>
    )
}

export default PurchaseCard;