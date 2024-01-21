import React, { useContext } from 'react';
import ContentContext from '../ContentContext';
import ExternalLink from '../icons/ExternalLink';


const Faq = () => {
    const contentVariables = useContext(ContentContext);

    const contentSections = [
        {
            id: "SystemRequirements",
            title: "System Requirements",
            content: (
                <div className="pt-6">
                    <div className="px-4 pt-6 pb-4 pl-6 mb-4 border-2 border-secondary border-opacity-10 bg-secondary bg-opacity-5">
                        <h4 className="mb-4 text-lg font-bold">Davant Studio Requirements</h4>
                        <p className="mb-6">Currently only Windows 10 & 11 are supported. <span className="italic">(Mac support coming soon.)</span></p>
                        <ul className="mb-4">
                            <li className="mb-3"><strong>CPU</strong>:
                                <ul className="pl-5 list">
                                    <li>Intel: Core i5 or later.</li>
                                    <li>AMD: Ryzen 5 or later.</li>
                                </ul>
                            </li>
                            <li><strong>RAM</strong>:
                                <ul className="pl-5 list-disc">
                                    <li>Minimum: 16 GB.</li>
                                    <li>Recommended: 32 GB or more for optimal performance.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="px-4 pt-6 pb-4 pl-6 border-2 border-secondary border-opacity-10 bg-secondary bg-opacity-5">
                        <h4 className="mb-4 text-lg font-bold">Automatic 1111 and Stable Diffusion Requirements</h4>
                        <p className="mb-8">For up-to-date detailed specifications, refer to the <a className="link link-secondary" href={contentVariables.auto1111.links.repoUrl}>Automatic 1111 Repository.<ExternalLink /></a></p>
                        <p className="mb-3"><strong>Operating System</strong>: Windows, Linux, Mac</p>
                        <p className="mb-3"><strong>Graphics Card</strong> (critical for performance):</p>
                        <ul className="pl-5 mb-5 list-disc">
                            <li><span className="font-semibold">Nvidia:</span>
                                <ul className="pl-5 list-disc">
                                    <li>Minimum: RTX 2000 series</li>
                                    <li>Recommended: RTX 3000 series</li>
                                    <li>Best: RTX 4090</li>
                                </ul>
                            </li>
                            <li><span className="font-semibold">AMD:</span>
                                <ul className="pl-5 list-disc">
                                    <li>Radeon 6000 series or better.</li>
                                </ul>
                                <p>AMD cards may require additional steps for proper drivers, see <a className="link link-secondary" href={contentVariables.auto1111.links.installation.windows.amd}>AMD Specific Instructions<ExternalLink /></a> in the Automatic 1111 documentation.</p>
                            </li>
                        </ul>
                        <p className="font-semibold">RAM</p>
                        <ul className="pl-5 mb-3 list-disc">
                            <li>Minimum: 16 GB.</li>
                            <li>More RAM is beneficial for optimal performance.</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: "Installation",
            title: "Automatic 1111 Installation",
            content: (
                <div className="pt-6">
                    <h4>Required third-party software</h4>
                    <ul>
                        <li><strong>Automatic 1111 WebGUI for Stable Diffusion</strong>.
                            <ul>
                                <li>Nvidia Users: <a className="link link-secondary" href={contentVariables.auto1111.links.installation.windows.nvidia}>Automatic 1111 GitHub Repository<ExternalLink /></a>.</li>
                                <li>AMD Users: <a className="link link-secondary" href={contentVariables.auto1111.links.installation.windows.nvidia}>AMD Specific Instructions<ExternalLink /></a> in the Automatic 1111 Repository.</li>
                            </ul>
                        </li>
                    </ul>

                    <h4>How do I install Automatic 1111 Stable Diffusion?</h4>
                    <ul>
                        <li><strong>Installation Steps</strong>:
                            <ol>
                                <li>Visit the <a className="link link-secondary" href={contentVariables.auto1111.links.repoUrl}>Automatic 1111 GitHub Repository<ExternalLink /></a>.</li>
                                <li>For Nvidia users, follow the standard installation guide.</li>
                                <li>For AMD users, refer to the <a className="link link-secondary" href={contentVariables.auto1111.links.installation.windows.amd}>AMD Specific Section<ExternalLink /></a>.</li>
                                <li>Davant Studio has been tested on <a className="link link-secondary" href={contentVariables.auto1111.links.releases.v1_7_0} target="_blank">version {`${contentVariables.auto1111.links.releases.recommended.tag}`}<ExternalLink /></a>.</li>
                                <li>Tech-savvy users may clone the latest version, but be aware of potential compatibility issues.</li>
                                <li>After downloading, extract the files to a desired location.</li>
                                <li><strong>Critical Step</strong>: In the <code>web-user.bat</code> file, add the <code>--api</code> argument in the command line. This is essential for operation.</li>
                                <li>To launch, double-click <code>web-user.bat</code>. This will open a console window and initiate Automatic 1111 setup.</li>
                            </ol>
                            <li><strong>Note</strong>: Ensure Python is installed on your system. If not, download Python <a className="link link-secondary" href="#link-to-python-download">here<ExternalLink /></a>.</li>
                        </li>
                    </ul>

                    <h4>How do I open "Davant Studio"?</h4>
                    <p>Simply download and double-click the .exe file.</p>

                </div>
            )
        },
        {
            id: "SetupConfiguration",
            title: "Automatic 1111 Setup & Configuration",
            content: (
                <div className="pt-6">
                    <h4 className="mb-4 text-lg font-bold">Required:</h4>
                    <h3 className="font-bold text-md">Extensions</h3>
                    <p className="mb-6"><a className="link link-secondary" href={contentVariables.auto1111.links.controlnetExtension}>ControlNet Extension</a> & recommended models</p>
                    
                    <h3 className="font-bold text-md">Command line arguments in launcher file</h3>
                    <p className="mb-6">The <span className="px-1 mx-1 font-mono text-sm italic font-light bg-slate-800 text-success">--api</span> command line argument must be added in your user config file (<span className="px-1 mx-1 font-mono text-sm italic font-light bg-slate-800 text-success">webui-user.bat</span> on Windows).</p>
                
                    <h3 className="font-bold text-md">IP Address & Port</h3>
                    <p>The default IP address and port it's run on is <span className="px-1 mx-1 font-mono text-sm italic font-light bg-slate-800 text-success">http://127.0.0.1:7860</span>. Check in the launcher for the IP. If yours is different, you'll need to update the "API IP" field in the Davant Studio "Settings" pane.</p>
                </div>
            )
        },
        {
            id: "UsageFeatures",
            title: "Usage & Features",
            content: (
                <div>
                    <h4>Why is there a terminal window in the beta?</h4>
                    <p>It's a debug console for system status and bug reporting.</p>

                    <h4>Where are my images saved?</h4>
                    <p>In "Pictures\Davant Systems" on your computer. They're organized by date and session.</p>

                    <h4>Do I own the images I create?</h4>
                    <p>Yes, but be aware of evolving AI-image legalities, especially for commercial use.</p>

                    <h4>Did "Davant Systems" create the AI in "Davant Studio"?</h4>
                    <p>No, it uses the Stable Diffusion engine, requiring Automatic 1111 to run.</p>
                </div>
            )
        },
        {
            id: "TechnicalConsiderations",
            title: "Technical Considerations",
            content: (
                <div>
                    <h4>What if I don't have the right computer setup?</h4>
                    <p>You can use another Automatic 1111 instance (e.g., cloud or another machine) by connecting to it via API IP in settings. Cloud integration is planned for future updates.</p>

                    <h4>Will the beta software get updates?</h4>
                    <p>No updates for beta. It stops working after February 17th. Final release will be preset-compatible.</p>

                    <h4>Cost after beta?</h4>
                    <p>'Davant Studio' will switch to a subscription model. Pricing details to come.</p>

                    <h4>Where does the app store my images?</h4>
                    <p>All images stay on your machine.</p>
                </div>
            )
        },
        {
            id: "SupportResources",
            title: "Support & Resources",
            content: (
                <div>
                    <h4>How do I get help?</h4>
                    <p>Email support@davantsystems.com or use our website's feedback form.</p>

                    <h4>What is Automatic 1111?</h4>
                    <p>It's open-source software required for 'Davant Studio'. For more, contact us or explore online resources.</p>

                </div>
            )
        },
        {
            id: "PerformanceCompatibility",
            title: "Performance & Compatability",
            content: (
                <div>
                    <h4>How to optimize performance?</h4>
                    <p>Use a higher-end GPU, like the Nvidia RTX 4090, for better performance.</p>

                    <h4>Can it integrate with other software?</h4>
                    <p>No direct integrations yet. Photoshop workflows are supported. Screenshot inputs work for any program.</p>

                </div>
            )
        },
        {
            id: "CustomizationExporting",
            title: "Customization & Exporting",
            content: (
                <div>
                    <h4>What customization is available?</h4>
                    <p>Limited to enabling/disabling controls and selecting models.</p>

                    <h4>How do I access resources?</h4>
                    <p>'Davant Studio' doesn't provide external resources.</p>

                    <h4>Exporting and sharing work?</h4>
                    <p>Use the recording button to save images as PNGs with Automatic 1111 metadata.</p>

                </div>
            )
        },
        {
            id: "CommunityUseCases",
            title: "Community & Use Cases",
            content: (
                <div>
                    <h4>How can I give feedback?</h4>
                    <p>Use our feedback form or connect with us on Instagram and at events.</p>

                    <h4>What's "Davant Studio" best for?</h4>
                    <p>Ideal for idea generation, aesthetics exploration, and creating final outputs. Not recommended for animation due to frame inconsistency. It works well with image sequences.</p>

                </div>
            )
        },
    ];

    return (
        <div className="py-20">
            <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="container mx-auto">
                <div className="sticky mb-10">
                    <h2 className="mb-4 text-2xl font-bold">Table of Contents</h2>
                    <ul className="pl-5 list-decimal">
                        {contentSections.map((section) => (
                            <li key={section.id} className="text-secondary hover:text-sky-100">
                                <a className="link link-secondary" href={`#${section.id}`}>{section.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {contentSections.map((section) => (
                    <div key={section.id} id={section.id} className="mt-4 mb-2 leading-relaxed collapse collapse-arrow bg-slate-400 bg-opacity-5">
                        <input
                            type="radio"
                            name={section.id}
                        />
                        <div className="collapse-title">
                            <h3 className="pl-4 text-xl font-bold">{section.title}</h3>
                        </div>
                        <div className="collapse-content bg-base-300">
                            <div className="pb-4 pl-4">
                                {section.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Faq;
