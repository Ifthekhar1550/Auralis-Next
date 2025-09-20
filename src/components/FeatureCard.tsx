"use client";

type FeatureCardProps = {
  icon: string;
  title: string;
  desc: string;
};

export default function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div className="bg-gradient-to-b from-[#1e1e1e] to-[#181818] p-6 rounded-xl shadow-md text-left hover:shadow-lg transition border border-[#252525]">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1ee19b] mb-12 mt-2">
        <i className={`${icon} text-black`}></i>
      </div>
      <h4 className="text-2xl font-normal mb-2">{title}</h4>
      <p className="text-[#cfcfcf] text-base leading-relaxed">{desc}</p>
    </div>
  );
}
