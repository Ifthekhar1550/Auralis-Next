import React from "react";

import Brand from "./Brand";
import FooterParagraph from "./FooterParagraph";
import WebLinks from "./WebLinks";
import SocialLinks from "./SocialLinks";
import TemplateLinks from "./TemplateLinks";
import CopyRight from "./CopyRight";
import SocialIcons from "./SocialIcons";
const Footer = () => {
  return (
    <footer className="py-16 max-w-6xl mx-auto px-4">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand  */}
          <div className="lg:col-span-2">
        <Brand></Brand>
       <FooterParagraph></FooterParagraph>
          </div>

          {/*web Links */}
          <WebLinks></WebLinks>

          {/* Social Links */}
          <SocialLinks></SocialLinks>

          {/* Template Links */}
          <TemplateLinks></TemplateLinks>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/*copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
        <CopyRight></CopyRight>
          {/* Social Icons */}
          <SocialIcons></SocialIcons>
      
        </div>
      </div>
    </footer>
  );
};

export default Footer;
