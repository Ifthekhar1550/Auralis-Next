import React from 'react';

const SocialLinks: React.FC = () => {
    return (
        <div>
            <h3 className="text-white font-medium text-sm uppercase tracking-wide mb-6">
                Social
            </h3>
            <ul className="space-y-4">
                <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300"
                    >
                        Facebook
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300"
                    >
                        Instagram
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300"
                    >
                        Linkedin
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300"
                    >
                        Youtube
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialLinks;