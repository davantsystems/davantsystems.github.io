import React, { useContext } from 'react';
import SocialIcon from './SocialIcon';
import ContentContext from "../ContentContext";


const Footer = () => {
    const contentVariables = useContext(ContentContext);
    return (
        <footer className="pt-16 pb-12 bg-base-300">
            <section className="flex block w-full max-w-4xl px-4 py-8 mx-auto">
                <div className="flex ml-auto">
                    <SocialIcon platform="instagram" contentVariables={contentVariables} />
                    <SocialIcon platform="twitter" contentVariables={contentVariables} />
                    <SocialIcon platform="facebook" contentVariables={contentVariables} />
                    <SocialIcon platform="linkedin" contentVariables={contentVariables} />
                    <SocialIcon platform="youtube" contentVariables={contentVariables} />
                    <SocialIcon platform="googleBusiness" contentVariables={contentVariables} />
                </div>
            </section>
        </footer>
    );
};
export default Footer;