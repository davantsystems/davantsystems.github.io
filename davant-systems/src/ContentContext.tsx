import React from 'react';

// Define a type for your content variables
interface ContentVariables {
    davant: {
        links: {
            davantStudioStripeCheckout: string,
            davantStudioStripePortal: string,
            davantStudioDownload: string,
            social: {
                instagram: {
                    handle: string,
                    url: string
                },
                twitter: {
                    handle: string,
                    url: string
                },
                facebook: {
                    handle: string,
                    url: string
                },
                linkedin: {
                    handle: string,
                    url: string
                },
                youtube: {
                    handle: string,
                    url: string
                },
                googleBusiness: {
                    handle: string,
                    url: string
                }
            }
        }
    },
    auto1111: {
        links: {
            repoUrl: string,
            installation: {
                windows: {
                    nvidia: string,
                    amd: string
                },
                mac: string,
                cloudServerList: string
            },
            releases: {
                latest: string,
                1_7_0: string,
            },
            controlnetExtenstion: string
        }
    }
}

// Create a context with a default value
const ContentContext = React.createContext<ContentVariables>({
    davant: {
        links: {
            davantStudioStripeCheckout: "",
            davantStudioStripePortal: "",
            davantStudioDownload: "",
            social: {
                instagram: "",
                twitter: "",
                facebook: "",
                linkedin: "",
                youtube: "",
                googleBusiness: ""
            }
        }
    },
    auto1111: {
        links: {
            repoUrl: "",
            installation: {
                windows: {
                    nvidia: "",
                    amd: ""
                },
                mac: "",
                cloudServerList: ""
            },
            releases: {
                latest: "",
                1_7_0: ""
            },
            controlnetExtenstion: ""
        }
    }
});

export default ContentContext;