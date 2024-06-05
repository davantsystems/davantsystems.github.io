import React from 'react';
import ContentContext from "../ContentContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin, faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons';

const SocialIcon = ({ platform }: { platform: string }) => {
    const contentVariables = React.useContext(ContentContext);
    const url = contentVariables.davant.links.social[platform as keyof typeof contentVariables.davant.links.social].url;
    const handle = contentVariables.davant.links.social[platform as keyof typeof contentVariables.davant.links.social].handle;

    const icon = {
        instagram: faInstagram,
        twitter: faTwitter,
        facebook: faFacebook,
        linkedin: faLinkedin,
        youtube: faYoutube,
        googleBusiness: faGoogle // Assume 'faGoogle' is correctly named and imported; if it's not available in FontAwesome, you need a different import
    }[platform];

    return (
        <a
            className="flex items-center mr-2 text-xl text-cyan-300"
            href={url} target="_blank">
            {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
        </a>
    )
}

export default SocialIcon;