"use client";

type PricingToggleProps = {
  isYearly: boolean;
  setIsYearly: (val: boolean) => void;
};

export default function PricingToggle({ isYearly, setIsYearly }: PricingToggleProps) {
  return (
    <div className="mt-10 inline-flex relative bg-gradient-to-b from-[#1e1e1e] to-[#181818] rounded-full px-4 py-3 border border-[#ffffff26]">
      <div
        className={`absolute bg-[#1ee19b] rounded-full w-1/2 h-full transition-all duration-300 ease-in-out top-0 left-0 ${
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
  );
}
