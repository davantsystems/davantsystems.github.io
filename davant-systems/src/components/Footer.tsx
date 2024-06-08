import React, { useContext } from 'react';
import SocialIcon from './SocialIcon';
import ContentContext from "../ContentContext";
import { Link } from 'gatsby';

const Footer = () => {
    const contentVariables = useContext(ContentContext);
    return (
        <>
            <footer className="relative z-50 px-10 pt-16 pb-12 bg-base-300 footer text-cyan-400">
                <nav>
                    <Link to="/davant-studio/" className="link link-hover">Davant Studio</Link>
                    <Link to="/photobooth/" className="link link-hover">Magic Mirror AI Photo Booth</Link>
                </nav>
                <nav>
                    <Link className="link link-hover" to="/training/">Training & Workshops</Link>
                    <a className="link link-hover" href="https://lu.ma/davantsystems">Events Calendar</a>
                </nav>
                <nav className="flex ml-auto">
                    <div className="flex gap-4">
                        <SocialIcon platform="instagram" contentVariables={contentVariables} />
                        <SocialIcon platform="twitter" contentVariables={contentVariables} />
                        <SocialIcon platform="facebook" contentVariables={contentVariables} />
                        <SocialIcon platform="linkedin" contentVariables={contentVariables} />
                        <SocialIcon platform="youtube" contentVariables={contentVariables} />
                        <SocialIcon platform="googleBusiness" contentVariables={contentVariables} />
                    </div>
                </nav>
            </footer>
            <div className="fixed bottom-0 left-0 z-10 block w-full scale-y-50 pointer-events-none opacity-70 translate-y-1/4 bg h-1/6 bg-gradient-to-b from-transparent to-base-300"></div>
        </>
    );
};
export default Footer;