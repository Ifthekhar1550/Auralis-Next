"use client";

import { useState } from "react";
import PricingToggle from "./PricingToggle";
import PricingCard from "./PricingCard";
import { pricingData } from "../lib/mock-data";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  

  return (
    <section className="text-white px-6 py-16 md:px-8 md:py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-[#1ee19b] text-sm font-medium tracking-[0.2em] uppercase mb-6">PLANS</p>
        <h1 className="text-3xl md:text-5xl font-normal leading-tight">
          <span className="text-[#1ee19b]">Simple</span> pricing for every stage of growth.
        </h1>

        <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {pricingData.map((plan, idx) => (
          <PricingCard key={idx} plan={{
            ...plan,
            price: isYearly ? plan.yearlyPrice : plan.monthlyPrice
          }} />
        ))}
      </div>
    </section>
  );
}
