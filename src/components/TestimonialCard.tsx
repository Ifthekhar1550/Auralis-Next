"use client";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  text: string;
  show: boolean;
}

export default function TestimonialCard({ name, role, image, text, show }: TestimonialCardProps) {
  return (
    <div
      className={`bg-[#171717] rounded-2xl p-6 border border-[#323232] hover:border-[#1ee19b] hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300
        ${!show ? "max-h-0 opacity-0 overflow-hidden" : "max-h-[1000px] opacity-100"}`}
      style={{ transitionProperty: "max-height, opacity" }}
    >
      <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6">{text}</p>
      <div className="my-8 border-t border-[#262626]"></div>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
          <Image
            src={image}
            alt={name}
            width={40}
            height={40}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <p className="text-white font-medium text-sm">{name}</p>
          <p className="text-gray-400 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
