"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}



const testimonialsData: Testimonial[] = [
  {
    name: "Jason Patel",
    role: "Startup Founder",
    image: "/images/testimonials/pexels-gabby-k-5876516.jpg",
    text: "We needed something affordable but still high-quality, and this turned out perfect. The visuals impressed our investors and our customers alike. I recommend it to any startup trying to look professional.",
  },
  {
    name: "Rachel Donovann",
    role: "E-commerce Store Owner",
    image: "/images/testimonials/pexels-gabby-k-6999225.jpg",
    text: "This tool completely changed how we present our products online. In just minutes, we had visuals that looked like they were done by a professional designer. Our sales went up almost immediately after updating our site with these stunning images!",
  },
  {
    name: "Omar Farouk",
    role: "Online Store Owner",
    image: "/images/testimonials/pexels-gabby-k-5876516.jpg",
    text: "I’ve tried several tools before, but nothing came close to how fast and professional this one is. My product catalog looks like it was shot in a studio now!",
  },
  {
    name: "Jason Patel",
    role: "Startup Founder",
    image: "/images/testimonials/pexels-gabby-k-5876516.jpg",
    text: "We needed something affordable but still high-quality, and this turned out perfect. The visuals impressed our investors and our customers alike. I recommend it to any startup trying to look professional.",
  },
  {
    name: "Rachel Donovann",
    role: "E-commerce Store Owner",
    image: "/images/testimonials/pexels-gabby-k-6999225.jpg",
    text: "This tool completely changed how we present our products online. In just minutes, we had visuals that looked like they were done by a professional designer. Our sales went up almost immediately after updating our site with these stunning images!",
  },
  {
    name: "Omar Farouk",
    role: "Online Store Owner",
    image: "/images/testimonials/pexels-gabby-k-5876516.jpg",
    text: "I’ve tried several tools before, but nothing came close to how fast and professional this one is. My product catalog looks like it was shot in a studio now!",
  },  {
    name: "Jason Patel",
    role: "Startup Founder",
    image: "/images/testimonials/pexels-gabby-k-5876516.jpg",
    text: "We needed something affordable but still high-quality, and this turned out perfect. The visuals impressed our investors and our customers alike. I recommend it to any startup trying to look professional.",
  },
  {
    name: "Rachel Donovann",
    role: "E-commerce Store Owner",
    image: "/images/testimonials/pexels-gabby-k-6999225.jpg",
    text: "This tool completely changed how we present our products online. In just minutes, we had visuals that looked like they were done by a professional designer. Our sales went up almost immediately after updating our site with these stunning images!",
  },
  {
    name: "Omar Farouk",
    role: "Online Store Owner",
    image: "/images/testimonials/pexels-gabby-k-5876516.jpg",
    text: "I’ve tried several tools before, but nothing came close to how fast and professional this one is. My product catalog looks like it was shot in a studio now!",
  },  {
    name: "Jason Patel",
    role: "Startup Founder",
    image: "/images/testimonials/pexels-gabby-k-5876516.jpg",
    text: "We needed something affordable but still high-quality, and this turned out perfect. The visuals impressed our investors and our customers alike. I recommend it to any startup trying to look professional.",
  },
  {
    name: "Rachel Donovann",
    role: "E-commerce Store Owner",
    image: "/images/testimonials/pexels-gabby-k-6999225.jpg",
    text: "This tool completely changed how we present our products online. In just minutes, we had visuals that looked like they were done by a professional designer. Our sales went up almost immediately after updating our site with these stunning images!",
  },
  {
    name: "Omar Farouk",
    role: "Online Store Owner",
    image: "/images/testimonials/pexels-gabby-k-5876516.jpg",
    text: "I’ve tried several tools before, but nothing came close to how fast and professional this one is. My product catalog looks like it was shot in a studio now!",
  },
];



export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="text-white py-16 md:py-20 mx-auto bg-[#1e1e1e] rounded-t-2xl relative">
      <div className="text-center mb-16 max-w-6xl mx-auto">
        <p className="text-[#1ee19b] text-sm font-medium tracking-wide uppercase mb-4">
          TESTIMONIALS
        </p>
        <h2 className="text-4xl md:text-5xl font-normal text-white mb-4">
          Trusted by thousands of
          <br />
          <span className="bg-gradient-to-r from-[#1ee19b] to-teal-400 bg-clip-text text-transparent">
            creative teams worldwide
          </span>
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
          {testimonialsData.map((t, index) => (
            <div
              key={index}
              className={`bg-[#171717] rounded-2xl p-6 border border-[#323232] hover:border-[#1ee19b] hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300
                ${!showAll && index >= 9 ? "max-h-0 opacity-0 overflow-hidden" : "max-h-[1000px] opacity-100"}
              `}
              style={{ transitionProperty: "max-height, opacity" }}
            >
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6">{t.text}</p>
              <div className="my-8 border-t border-[#262626]"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shadow overlay */}
        {!showAll && (
          <div
            className="absolute left-0 right-0 bottom-0 h-full bg-gradient-to-t from-[#1e1e1e] to-transparent pointer-events-none transition-opacity duration-500"
          />
        )}

        <div className="text-center mt-10 relative z-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#1ee19b] hover:bg-emerald-600 text-black px-8 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-xl shadow-[#1e1e1e]"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}