import React from 'react';

const TemplateLinks: React.FC = () => {
    return (
        <div>
            <h3 className="text-white font-medium text-sm uppercase tracking-wide mb-6">
                Template
            </h3>
            <ul className="space-y-4">
                <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300"
                    >
                        Styleguide
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300"
                    >
                        Licenses
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300"
                    >
                        Changelog
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300"
                    >
                        Webflow
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default TemplateLinks;