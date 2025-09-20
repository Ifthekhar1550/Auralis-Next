import React from 'react';

const WebLinks: React.FC = () => {
    return (
        <div>
            <h3 className="text-white font-medium text-sm uppercase tracking-wide mb-6">
                Website
            </h3>
            <ul className="space-y-4">
                <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300"
                    >
                        Pricing
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300"
                    >
                        Blog
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300"
                    >
                        FAQ
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default WebLinks;