import React from "react"


const RequirementsPane = () => {

    return (
        <div className="flex flex-col">
            <div className="cta__info--requirements w-auto text-sm text-left text-cyan-100">
                <div className="flex gap-4">
                    <svg height="22px" width="24px" className="item-start mt-3 stroke-white fill-cyan-300" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452.986 452.986" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M165.265,53.107L21.689,81.753v132.531l143.575-2.416V53.107 M431.297,245.583l-233.18-3.991 v164.822l233.18,46.571V245.583 M165.265,241.097l-143.575-2.438v132.509l143.575,28.668V241.097 M431.297,0l-233.18,46.528 v164.822l233.18-3.969V0"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
                    <div className="flex flex-col">
                        <p className="font-bold underline">Minimum PC Requirements:</p>
                        <p>Windows 10/11 | 16gb RAM</p>
                        <p>Nvidia RTX 2080 | AMD RX 6600</p>
                        <p className="mt-4 font-bold underline">Third-Party Software Required:</p>
                        <p>Automatic1111 Stable Diffusion Web UI</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequirementsPane
