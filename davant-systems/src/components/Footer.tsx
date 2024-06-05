import React, { useContext } from 'react';
import SocialIcon from './SocialIcon';


const Footer = () => {
    return (
        <footer className="pb-12 bg-base-300">
            <section className="flex block w-full max-w-4xl px-4 py-8 mx-auto">
                <SocialIcon platform="instagram" />
                <SocialIcon platform="twitter" />
                <SocialIcon platform="facebook" />
                <SocialIcon platform="linkedin" />
                <SocialIcon platform="youtube" />
                <SocialIcon platform="googleBusiness" />
            </section>
        </footer>
    );
};
export default Footer;