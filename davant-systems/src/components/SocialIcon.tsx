import React, { useState, useEffect } from 'react';
import ContentContext from "../ContentContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin, faYoutube, faGoogle, faDiscord } from '@fortawesome/free-brands-svg-icons';

const SocialIcon = ({ contentVariables, platform }: { contentVariables: object, platform: string }) => {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) return null;

    const url = contentVariables.davant.links.social[platform as keyof typeof contentVariables.davant.links.social].url;
    const handle = contentVariables.davant.links.social[platform as keyof typeof contentVariables.davant.links.social].handle;

    const icon = {
        instagram: faInstagram,
        twitter: faTwitter,
        facebook: faFacebook,
        linkedin: faLinkedin,
        youtube: faYoutube,
        googleBusiness: faGoogle,
        discord: faDiscord
    }[platform];

    return (
        <a
            className="flex items-center p-2 text-xl text-secondary hover:text-cyan-200"
            href={url} target="_blank">
            {icon && <FontAwesomeIcon icon={icon} />}
        </a>
    )
}

export default SocialIcon;