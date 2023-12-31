import React from 'react';

// Define a type for your content variables
interface ContentVariables {
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
            }
        }
    }
}

// Create a context with a default value
const ContentContext = React.createContext<ContentVariables>({
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
            }
        }
    }
});

export default ContentContext;