"use client";
import { useState } from "react";
import TestimonialsGrid from "./TestimonialsGrid";

import { testimonialsData } from "../lib/mock-data";

export default function TestimonialsSection() {
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
        <TestimonialsGrid testimonials={testimonialsData} showAll={showAll} />

        {!showAll && (
          <div className="absolute left-0 right-0 bottom-0 h-full bg-gradient-to-t from-[#1e1e1e] to-transparent pointer-events-none transition-opacity duration-500" />
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
