import React from 'react';

const SocialIcons: React.FC = () => {
    return (
        <div className="flex space-x-4">
            <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#1ee19b] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
                <i className="fab fa-facebook-f text-gray-400 group-hover:text-white transition-colors duration-300"></i>
            </a>
            <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#1ee19b] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
                <i className="fab fa-instagram text-gray-400 group-hover:text-white transition-colors duration-300"></i>
            </a>
            <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#1ee19b] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
                <i className="fas fa-envelope text-gray-400 group-hover:text-white transition-colors duration-300"></i>
            </a>
            <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#1ee19b] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
                <i className="fab fa-linkedin-in text-gray-400 group-hover:text-white transition-colors duration-300"></i>
            </a>
        </div>
    );
};

export default SocialIcons;