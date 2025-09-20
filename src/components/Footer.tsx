import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-16 max-w-6xl mx-auto px-4">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand  */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                src="/logo/logo.svg"
                alt="Auralis Logo"
                className="h-10 w-auto"
                width={40} height={40}
              />
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-xs">
              Auralis helps brands create stunning product photos effortlessly. Powerful AI tools for startups, creators, and businesses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-medium text-sm uppercase tracking-wide mb-6">Website</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-medium text-sm uppercase tracking-wide mb-6">Social</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300">Linkedin</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300">Youtube</a></li>
            </ul>
          </div>

          {/* Template Links */}
          <div>
            <h3 className="text-white font-medium text-sm uppercase tracking-wide mb-6">Template</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300">Styleguide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300">Licenses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300">Changelog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1ee19b] transition-colors duration-300">Webflow</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/*copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Auralis. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#1ee19b] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <i className="fab fa-facebook-f text-gray-400 group-hover:text-white transition-colors duration-300"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#1ee19b] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <i className="fab fa-instagram text-gray-400 group-hover:text-white transition-colors duration-300"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#1ee19b] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <i className="fas fa-envelope text-gray-400 group-hover:text-white transition-colors duration-300"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#1ee19b] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
              <i className="fab fa-linkedin-in text-gray-400 group-hover:text-white transition-colors duration-300"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
