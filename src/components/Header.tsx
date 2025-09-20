"use client";

import { useState } from "react";
;
import Brand from "./Brand";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="max-w-6xl mx-auto">
    
      <div className="flex justify-between items-center py-8 px-2">
        {/* Brand */}
        <Brand />

        {/* Desktop nav */}
        <NavMenu />

        {/* Get Started */}
        <a
          href="#"
          className="hidden md:block bg-[#1ee19b] text-black font-medium px-5 py-2 rounded-xl shadow"
        >
          Get Started
        </a>
      </div>

      {/* Mobile nav ham */}
      <div className="md:hidden flex items-center justify-between w-full mx-auto pb-2">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-gray-300 hover:text-white z-50 absolute top-8 right-2"
        >
          <i
            className={`fa-solid ${
              mobileOpen ? "fa-xmark" : "fa-bars"
            } text-xl transition-all duration-300`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
