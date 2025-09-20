"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        if (isOpen) onClose();
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, onClose]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (isOpen) onClose();
        setDropdownOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && isOpen) {
        onClose();
        setDropdownOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      className={`w-11/12 md:hidden absolute top-20 left-0 bg-[#1e1e1e] transform transition-all duration-300 ease-in-out z-50 overflow-auto rounded-2xl border border-[#404040] mx-2 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col h-full px-2 py-4 space-y-2">
        {["Home", "Pricing", "Blog", "FAQ"].map((item) => (
          <a
            key={item}
            href="#"
            onClick={onClose}
            className="block px-6 py-2 rounded-lg hover:bg-[#1ee19b] text-white transition text-sm"
          >
            {item}
          </a>
        ))}

        {/* Dropdown */}
        <div className="pt-2 mt-2">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            id="mobile-dropdown-btn"
            className="flex items-center justify-between w-full px-6 py-4 rounded-lg hover:bg-gray-800 text-white transition text-sm"
          >
            <span>Other</span>
            <i
              id="mobile-dropdown-arrow"
              className={`fa-solid fa-chevron-down transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            id="mobile-dropdown-menu"
            className={`mt-2 space-y-1 p-2 border-t border-[#404040] m-4 ${
              dropdownOpen ? "block" : "hidden"
            }`}
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
                onClick={onClose}
                className="block px-6 py-2 rounded-lg hover:bg-[#1ee19b] text-white transition"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
