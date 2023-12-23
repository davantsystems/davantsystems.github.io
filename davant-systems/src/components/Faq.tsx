import React from 'react';

const contentSections = [
    {
        id: "SystemRequirements",
        title: "System Requirements",
        content: (
            <div>
                <ul className="">
                    <li><strong>Operating System</strong>: Windows 10 or 11.</li>
                    <li><strong>Processor</strong>:
                        <ul className="list- pl-5">
                            <li>Intel: Core i5 or later.</li>
                            <li>AMD: Ryzen 5 or later.</li>
                        </ul>
                    </li>
                    <li><strong>RAM</strong>:
                        <ul className="list-disc pl-5">
                            <li>Minimum: 16 GB.</li>
                            <li>Recommended: 32 GB or more for optimal performance.</li>
                        </ul>
                    </li>
                    <li><strong>Additional Notes</strong>:
                        <ul className="list-disc pl-5">
                            <li>'Davant Studio' is optimized for efficiency and doesn't require high-end hardware.</li>
                            <li>The GPU-intensive requirements apply to Automatic 1111, not directly to 'Davant Studio'.</li>
                        </ul>
                    </li>
                </ul>

                <h4>Automatic 1111 and Stable Diffusion Requirements</h4>
                <ul className="list-disc pl-5">
                    <li><strong>Operating System</strong>: Windows 10 or 11.</li>
                    <li><strong>Graphics Card</strong> (critical for performance):
                        <ul className="list-disc pl-5">
                            <li><strong>Nvidia</strong>:
                                <ul className="list-disc pl-5">
                                    <li>Minimum: Nvidia 20 series.</li>
                                    <li>Recommended: Nvidia 30 series.</li>
                                    <li>Best: Nvidia 40 series.</li>
                                </ul>
                            </li>
                            <li><strong>AMD</strong>: Compatible, high-end GPUs required for optimal performance. See <a href="#amd-specific-instructions">AMD Specific Instructions</a> in Automatic 1111 Repository.</li>
                        </ul>
                    </li>
                    <li><strong>RAM</strong>:
                        <ul className="list-disc pl-5">
                            <li>Minimum: 16 GB.</li>
                            <li>More RAM is beneficial for optimal performance.</li>
                        </ul>
                    </li>
                    <li><strong>Additional Requirements</strong>:
                        <ul className="list-disc pl-5">
                            <li>These requirements are set by Automatic 1111 and Stable Diffusion, which are used by 'Davant Studio'.</li>
                            <li>For detailed specifications and updates, refer to the <a href="#automatic-1111-repository">Automatic 1111 Repository</a>.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        ),
    },
    {
        id: "InstallationSetup",
        title: "Installation & Setup",
        content: (
            <div>
                <h4>What additional software is needed?</h4>
                <ul>
                    <li><strong>Automatic 1111 WebGUI for Stable Diffusion</strong>: Necessary for 'Davant Studio'.
                        <ul>
                            <li>Nvidia Users: <a href="#">Automatic 1111 GitHub Repository</a>.</li>
                            <li>AMD Users: <a href="#amd-specific-instructions">AMD Specific Instructions</a> in the Automatic 1111 Repository.</li>
                        </ul>
                    </li>
                </ul>

                <h4>How do I install Automatic 1111 Stable Diffusion?</h4>
                <ul>
                    <li><strong>Installation Steps</strong>:
                        <ol>
                            <li>Visit the <a href="#">Automatic 1111 GitHub Repository</a>.</li>
                            <li>For Nvidia users, follow the standard installation guide.</li>
                            <li>For AMD users, refer to the <a href="#amd-specific-instructions">AMD Specific Section</a>.</li>
                            <li>Our recommended version is 1.6.1, which can be found <a href="#link-to-1.6.1">here</a>.</li>
                            <li>Tech-savvy users may clone the latest version, but be aware of potential compatibility issues.</li>
                            <li>After downloading, extract the files to a desired location.</li>
                            <li><strong>Critical Step</strong>: In the <code>web-user.bat</code> file, add the <code>-API</code> argument in the command line. This is essential for operation.</li>
                            <li>To launch, double-click <code>web-user.bat</code>. This will open a console window and initiate Automatic 1111 setup.</li>
                        </ol>
                        <li><strong>Note</strong>: Ensure Python is installed on your system. If not, download Python <a href="#link-to-python-download">here</a>.</li>
                    </li>
                </ul>

                <h4>How do I open "Davant Studio"?</h4>
                <p>Simply download and double-click the .exe file.</p>

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





const Faq = () => {
    return (
        <div className="py-8">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="container mx-auto">
                <div className="mb-10 sticky">
                    <h2 className="text-2xl font-bold mb-2">Table of Contents</h2>
                    <ul className="list-decimal pl-5">
                        {contentSections.map((section) => (
                            <li key={section.id} className="text-secondary hover:text-sky-100">
                                <a href={`#${section.id}`}>{section.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {contentSections.map((section) => (
                    <div key={section.id} id={section.id} className="collapse collapse-arrow bg-slate-400 bg-opacity-5 mt-4 mb-2 leading-relaxed">
                        <input
                            type="radio"
                            name={section.id}
                        />
                        <div className="collapse-title">
                            <h3 className="text-xl font-bold pl-4">{section.title}</h3>
                        </div>
                        <div className="collapse-content">
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
