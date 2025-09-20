"use client";

type PricingPlan = {
  title: string;
  desc: string;
  features: string[];
  price: number;
  isHighlighted?: boolean;
  buttonText: string;
};

type PricingCardProps = {
  plan: PricingPlan;
};

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className={`bg-[#1c1c1c] border border-[#3a3a3a] rounded-2xl p-3 hover:border-[#1ee19b] transition-all duration-300 hover:-translate-y-1 ${plan.isHighlighted ? "relative z-10" : ""}`}>
      <div className={`px-6 py-2 rounded-lg inline-block mb-6 ${plan.isHighlighted ? "bg-gradient-to-br from-[#1ee19b] to-[#0d3b3bcc]" : "bg-[#181818]"}`}>
        <h3 className={`text-2xl font-semibold mb-3 ${plan.isHighlighted ? "text-black" : "text-white"}`}>{plan.title}</h3>
        <p className={`${plan.isHighlighted ? "text-black" : "text-gray-400"} text-sm mb-8`}>{plan.desc}</p>
      </div>

      <div className="mb-8">
        <span className="text-5xl font-bold">
          <span className="text-5xl align-top">$</span>{plan.price}
        </span>
        <span className="text-gray-500 text-sm ml-2">/ <span className="text-[#6f6f6f]">Month</span></span>
      </div>

      <button className={`w-full py-3.5 px-6 rounded-lg font-semibold text-sm mb-8 transition-all duration-300 ${plan.isHighlighted ? "bg-[#1ee19b] text-black hover:bg-emerald-600" : "border border-[#1ee19b] text-[#1ee19b] hover:bg-[#1ee19b] hover:text-black hover:shadow-lg hover:shadow-[#1ee19b]/20"}`}>
        {plan.buttonText}
      </button>

      <div className="border-t border-[#272727] mb-8"></div>

      <ul className="space-y-4 text-gray-300 text-sm">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <i className="fa-solid fa-check mt-1 mr-3 text-[#1ee19b]"></i> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
