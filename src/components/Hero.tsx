"use client";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 md:px-6 py-8 md:py-24 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-normal leading-tight text-white max-w-4xl">
        Transform your products photos into{" "}
        <span className="text-[#1ee19b]">stunning visuals.</span>
      </h1>

      <p className="mt-6 text-[#cccccc] text-base max-w-2xl">
        Upload your product, pick a style or scene, and let our AI create
        professional, high-converting images tailored for e-commerce, ads, or
        social media.
      </p>

      {/* Hero buttons */}
      <div className="mt-10 flex gap-4 items-center justify-center">
        <a
          href="#"
          className="bg-[#1ee19b] hover:bg-[#1ee09b] text-black font-medium text-sm md:text-base px-6 py-3 rounded-xl"
        >
          Get Started
        </a>
        <a
          href="#"
          className="border border-[#1ee19b] text-[#1ee19b] hover:bg-[#1ee19b] hover:text-black font-medium text-sm md:text-base px-6 py-3 rounded-xl"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
