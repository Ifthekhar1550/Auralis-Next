"use client";
import FeatureCard from "./FeatureCard";
import { featureCards } from "@/lib/mock-data";

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 text-center text-white">
      <h3 className="text-lg text-[#1ee19b] font-medium">FEATURES</h3>
      <h2 className="mt-2 text-2xl md:text-4xl font-normal px-4 max-w-xl mx-auto">
        Packed with smart features that <span className="text-[#1ee19b]">save you time.</span>
      </h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {featureCards.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
