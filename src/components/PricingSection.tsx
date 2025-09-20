"use client";

import { useState } from "react";

interface PricingPlan {
  monthly: number;
  yearly: number;
}

interface PricingPlans {
  basic: PricingPlan;
  pro: PricingPlan;
  enterprise: PricingPlan;
}

const prices: PricingPlans = {
  basic: { monthly: 26, yearly: 20 },
  pro: { monthly: 38, yearly: 32 },
  enterprise: { monthly: 50, yearly: 45 },
};

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const getPrice = (plan: PricingPlan) => (isYearly ? plan.yearly : plan.monthly);
  const getPeriod = () => (isYearly ? "Year" : "Month");

  return (
    <section className="text-white px-6 py-16 md:px-8 md:py-20 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[#1ee19b] text-sm font-medium tracking-[0.2em] uppercase mb-6">PLANS</p>
        <h1 className="text-3xl md:text-5xl font-normal leading-tight">
          <span className="text-[#1ee19b]">Simple</span> pricing for every stage of growth.
        </h1>

      {/* Pricing toggle */}
<div className="mt-10 inline-flex relative bg-gradient-to-b from-[#1e1e1e] to-[#181818] rounded-full px-4 py-3 border border-[#ffffff26]">
  <div
    className={`absolute bg-[#1ee19b] rounded-full w-1/2 h-full transition-all duration-300 ease-in-out top-0 left-0  ${
      isYearly ? "translate-x-full" : "translate-x-0"
    }`}
  ></div>

  <div className="relative z-10 flex w-full justify-between px-2">
    <button
      onClick={() => setIsYearly(false)}
      className={`px-8 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 ${
        !isYearly ? "text-black" : "text-gray-400"
      }`}
    >
      Monthly
    </button>
    <button
      onClick={() => setIsYearly(true)}
      className={`px-8 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 ${
        isYearly ? "text-black" : "text-gray-400"
      }`}
    >
      Yearly
    </button>
  </div>
</div>


      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {/* Basic */}
        <div className="bg-[#1c1c1c] border border-[#3a3a3a] rounded-2xl p-3 hover:border-[#1ee19b] transition-all duration-300 hover:-translate-y-1">
          <div className="bg-[#181818] px-6 py-2 rounded-lg inline-block mb-6">
            <h3 className="text-2xl font-semibold my-3">Basic Plan</h3>
            <p className="text-gray-400 text-sm mb-4">For solo creators and small businesses starting out.</p>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-bold">
              <span className="text-5xl align-top">$</span>{getPrice(prices.basic)}
            </span>
            <span className="text-gray-500 text-sm ml-2">/ <span className="text-[#6f6f6f]">{getPeriod()}</span></span>
          </div>
          <button className="w-full py-3.5 px-6 border border-[#1ee19b] text-[#1ee19b] rounded-lg font-semibold text-sm hover:bg-[#1ee19b] hover:text-black transition-all duration-300 mb-8 hover:shadow-lg hover:shadow-[#1ee19b]/20">
            Get Started With Basic
          </button>
          <div className="border-t border-[#272727] mb-8"></div>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start"><i className="fa-solid fa-check mt-1 mr-3 text-[#1ee19b]"></i>50 images every month</li>
            <li className="flex items-start"><i className="fa-solid fa-check mt-1 mr-3 text-[#1ee19b]"></i>50+ background themes</li>
            <li className="flex items-start"><i className="fa-solid fa-check mt-1 mr-3 text-[#1ee19b]"></i>Background Removal</li>
            <li className="flex items-start"><i className="fa-solid fa-check mt-1 mr-3 text-[#1ee19b]"></i>1 concurrent generation</li>
          </ul>
        </div>

        {/* Pro */}
        <div className="bg-[#1c1c1c] border border-[#3a3a3a] rounded-2xl p-3 hover:border-[#1ee19b] transition-all duration-300 hover:-translate-y-1 relative">
          <div className="bg-gradient-to-br from-[#1ee19b] to-[#0d3b3bcc] px-6 py-2 rounded-lg inline-block mb-6">
            <h3 className="text-2xl font-semibold mb-3 text-black">Pro Plan</h3>
            <p className="text-black text-sm mb-8">For growing e-commerce brands needing more flexibility.</p>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-bold">
              <span className="text-5xl align-top">$</span>{getPrice(prices.pro)}
            </span>
            <span className="text-gray-500 text-sm ml-2">/ <span className="text-[#6f6f6f]">{getPeriod()}</span></span>
          </div>
          <button className="w-full py-3.5 px-6 bg-[#1ee19b] text-black rounded-lg font-semibold text-sm hover:bg-emerald-600 transition-all duration-300 mb-8 hover:shadow-lg hover:shadow-[#1ee19b]/30">
            Get Started With Pro
          </button>
          <div className="border-t border-[#272727] mb-8"></div>
          <p className="text-gray-300 text-sm font-medium mb-3">Everything in Basic plus...</p>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start"><i className="fa-solid fa-check mt-1 mr-3 text-[#1ee19b]"></i>1,000 images every month</li>
            <li className="flex items-start"><i className="fa-solid fa-check mt-1 mr-3 text-[#1ee19b]"></i>Create custom backgrounds</li>
            <li className="flex items-start"><i className="fa-solid fa-check mt-1 mr-3 text-[#1ee19b]"></i>4 concurrent generation</li>
          </ul>
        </div>

        {/* Enterprise */}
        <div className="bg-[#1c1c1c] border border-[#3a3a3a] rounded-2xl p-3 hover:border-[#1ee19b] transition-all duration-300 hover:-translate-y-1">
          <div className="bg-[#181818] px-6 py-2 rounded-lg inline-block mb-6">
            <h3 className="text-2xl font-semibold mb-3">Enterprise Plan</h3>
            <p className="text-gray-400 text-sm mb-8">For agencies and enterprises with large-scale demands.</p>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-bold">
              <span className="text-5xl align-top">$</span>{getPrice(prices.enterprise)}
            </span>
            <span className="text-gray-500 text-sm ml-2">/ <span className="text-[#6f6f6f]">{getPeriod()}</span></span>
          </div>
          <button className="w-full py-3.5 px-6 border border-[#1ee19b] text-[#1ee19b] rounded-lg font-semibold text-sm hover:bg-[#1ee19b] hover:text-black transition-all duration-300 mb-8 hover:shadow-lg hover:shadow-[#1ee19b]/20">
            Get Started With Enterprise
          </button>
          <div className="border-t border-[#272727] mb-8"></div>
          <p className="text-gray-300 text-sm font-medium mb-3">Everything in Pro plus...</p>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start"><i className="fa-solid fa-check mt-1 mr-3 text-[#1ee19b]"></i>Unlimited images</li>
            <li className="flex items-start"><i className="fa-solid fa-check mt-1 mr-3 text-[#1ee19b]"></i>Unlimited storage</li>
            <li className="flex items-start"><i className="fa-solid fa-check mt-1 mr-3 text-[#1ee19b]"></i>8 concurrent generation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
