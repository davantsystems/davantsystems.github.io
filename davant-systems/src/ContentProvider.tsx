import React, { ReactNode } from 'react';
import ContentContext from './ContentContext';

interface ContentProviderProps {
  children: ReactNode; // Define the type for children
}

const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const contentVariables = {
    davant: {
      links: {
        davantStudioStripeCheckout: "https://buy.stripe.com/7sIg2v8Vz5IH5Fe145",
        davantStudioStripePortal: "https://billing.stripe.com/p/login/6oEg26f8K3697yE144",
        davantStudioDownload: "https://github.com/davantsystems/davant-studio-release/releases/download/v1.0.2/DavantStudio_v1.0.2.zip",
        davantStudioAllDownloads: "/davant-studio/download",
        social: {
          instagram: {
            handle: "@DavantSystems",
            url: "https://instagram.com/DavantSystems"
          },
          twitter: {
            handle: "@DavantSystems",
            url: "https://twitter.com/DavantSystems"
          },
          facebook: {
            handle: "@DavantSystems",
            url: "https://facebook.com/DavantSystems"
          },
          linkedin: {
            handle: "@DavantSystems",
            url: "https://linkedin.com/company/DavantSystems"
          },
          youtube: {
            handle: "@DavantSystems",
            url: "https://youtube.com/@DavantSystems"
          },
          googleBusiness: {
            handle: "@DavantSystems",
            url: "https://www.google.com/search?q=Davant+Systems"
          },
          discord: {
            handle: "@DavantSystems",
            url: "https://discord.gg/P8JQtcxfym"
          }
        }
      },
    },
    auto1111: {
      links: {
        repoUrl: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
        installation: {
          windows: {
            nvidia: "https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-NVidia-GPUs",
            amd: "https: //github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-AMD-GPUs"
          },
          mac: "https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Installation-on-Apple-Silicon",
          cloudServerList: "https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Online-Services"
        },
        releases: {
          latest: "https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases/latest",
          1_7_0: "https://github.com/AUTOMATIC1111/stable-diffusion-webui/releases/tag/v1.7.0"
        },
        controlnetExtenstion: "https://github.com/Mikubill/sd-webui-controlnet"
      }
    }
  }

  return (
    <ContentContext.Provider value={contentVariables} >
      {children}
    </ContentContext.Provider >
  );
};

export default ContentProvider;
