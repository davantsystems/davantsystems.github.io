import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import MainNav from "../components/MainNav";


const bucketUrl = "https://davant-public.s3.us-west-1.amazonaws.com";

const PressPage: React.FC<PageProps> = ({ data }) => {

    return (
        <>
            <MainNav />
            <main className="relative px-8 pt-14 pb-96">
                <section className="container relative z-10">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="mb-4 mb-8 text-2xl text-primary">Press</h1>
                    </div>
                </section>
                <section className="container max-w-2xl mb-24 brand">
                    <h2 className="inline mb-4 text-xl">Brand</h2>
                    <span className="ml-3 mr-3 text-xl">/</span>
                    <h3 className="inline mb-2 text-lg">Logos</h3>
                    <ul className="grid grid-cols-3 gap-4 mt-4">
                        {data.logos.nodes.map((node, index) => (
                            <li className="w-full h-full">
                                <a className="block w-full h-full"
                                    key={index} href={`${bucketUrl}/${node.Key}`} download>
                                    <img className="object-contain w-full h-full" src={`${bucketUrl}/${node.Key}`} alt={node.Key} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="container max-w-2xl mb-24 screenshots">
                    <h2 className="inline mb-4 text-xl">Davant Studio</h2>
                    <span className="ml-3 mr-3 text-xl">/</span>
                    <h3 className="inline mb-2 text-lg">Software Screenshots</h3>
                    <ul className="grid grid-cols-3 gap-3 mt-4">
                        {data.appScreenshots.nodes.map((node, index) => (
                            <li className="w-full h-full">
                                <a className="block w-full h-full"
                                    key={index} href={`${bucketUrl}/${node.Key}`} download>
                                    <img className="object-contain w-full h-full" src={`${bucketUrl}/${node.Key}`} alt={node.Key} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="mb-24 elements">
                    <div className="container max-w-2xl">
                        <h2 className="inline mb-4 text-xl">Elements</h2>
                    </div>
                    <ul className="grid grid-cols-4 gap-3 p-2 mt-4 bg-black bg-opacity-30">
                        {data.backgrounds.nodes.map((node, index) => (
                            <li className="w-full h-full">
                                <a className="block w-full h-full"
                                    key={index} href={`${bucketUrl}/${node.Key}`} download>
                                    <img className="object-contain w-full h-full" src={`${bucketUrl}/${node.Key}`} alt={node.Key} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
                <div className="fixed top-0 left-0 w-full h-screen pointer-events-none -z-10 bg opacity-30">
                    <StaticImage
                        src="../images/hero1.png"
                        alt="Davant Systems Press & Media Assets"
                        className="object-cover w-full h-full"
                        placeholder="blurred"
                    />
                </div>
            </main>
        </>
    );
};

export default PressPage;

export const Head: HeadFC = () => <title>Davant Systems | Press & Media Assets</title>;

export const query = graphql`
  query AllImagesQuery {
    appScreenshots: allS3Object(filter: {Key: {regex: "/assets/app_screenshots/"}}) {
        nodes {
        Key
      }
    }
    logos: allS3Object(filter:{Key: {regex: "/assets/logo/"}}) {
        nodes {
        Key
      }
    }
    backgrounds: allS3Object(filter:{Key: {regex: "/assets/website_bg_selects/"}}) {
        nodes {
        Key
      }
    }
  }
`;
