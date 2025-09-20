"use client";

import { useState, useRef } from "react";

export default function NavMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = (delay: number) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    closeTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, delay);
  };

  return (
    <nav className="hidden md:flex items-center space-x-2 bg-[#1e1e1eb3] border border-[#ffffff26] rounded-xl px-4 py-2 backdrop-blur-md">
      {["Home", "Pricing", "Blog", "FAQ"].map((item) => (
        <a
          key={item}
          href="#"
          className="px-3 py-1 rounded-lg hover:bg-[#1ee19b] text-white hover:text-black transition"
        >
          {item}
        </a>
      ))}

      {/* Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => handleMouseLeave(500)} 
      >
        <button className="flex items-center space-x-1 px-3 py-1 rounded-lg hover:bg-[#1ee19b] hover:text-black text-white transition">
          <span>Other</span>
          <i
            className={`fa-solid fa-chevron-down ml-2 text-xs transition-transform duration-200 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          ></i>
        </button>

        {dropdownOpen && (
          <div
            className="absolute left-2 mt-3 w-40 bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-2 z-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => handleMouseLeave(100)} 
          >
            {[
              "Contact",
              "Blog Details",
              "Blog Category",
              "404",
              "Changelog",
              "Licenses",
              "Styleguide",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="block px-4 py-2 rounded-lg hover:bg-[#1ee19b] hover:text-black text-white transition"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
