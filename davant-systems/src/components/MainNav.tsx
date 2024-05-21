import React, { useContext } from "react";
import Logo from "./Logo";
import { StaticImage } from "gatsby-plugin-image";
import DavantStudioPage from "../pages/davant-studio";
import { Link } from "gatsby";
import ContentContext from "../ContentContext";


const MainNav = () => {
  const contentVariables = useContext(ContentContext);

  return (
    <div className="fixed top-0 z-50 bg-opacity-0 navbar bg-gradient-to-b from-black to-transparent">
      <div className="navbar-start">
        <Link className="text-xl btn btn-ghost" to="/">
          <StaticImage src="../images/DavantSystems-logo-1000.png" quality={100} alt="Davant Systems" placeholder="blurred" layout="fixed" width={100} height={40} />
        </Link>
      </div>
      <div className="hidden navbar-center md:flex">
        <ul className="px-1 tracking-tight menu menu-horizontal text-cyan-100 drop-shadow-sm">
          <li><Link to="/davant-studio/" className="hover:bg-base-100 hover:bg-opacity-70">Davant Studio</Link></li>
          <li><Link to="/photobooth/">Magic Mirror AI Photo Booth</Link></li>
          <li><Link to="/training/">Training & Workshops</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-secondary btn-xs" href={contentVariables.davant.links.davantStudioStripePortal} target="_blank">Manage Subscription</a>
      </div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content text-cyan-100 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0">
          <li><Link to="/davant-studio/">Davant Studio</Link></li>
          <li><Link to="/photobooth/">Magic Mirror AI Photo Booth</Link></li>
          <li><Link to="/training/">Training & Workshops</Link></li>
        </ul>
      </div>
      <span className="absolute top-0 left-0 w-full h-full scale-y-150 pointer-events-none select-none opacity-40 -z-10 bg-gradient-to-b from-base-100 via-base-100 to-transparent"></span>
    </div >
  )
};

export default MainNav;