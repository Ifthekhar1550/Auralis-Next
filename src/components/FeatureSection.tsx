"use client";

export default function Features() {
  const featureCards = [
    {
      icon: "fa-solid fa-wand-magic-sparkles",
      title: "Background removal",
      desc: "Automatically removes the original background from your product photo with a single click no manual editing needed."
    },
    {
      icon: "fa-brands fa-microsoft",
      title: "Scene templates",
      desc: "A variety of AI-powered scene templates, including studio, lifestyle, and seasonal styles, are available for selection."
    },
    {
      icon: "fa-solid fa-image",
      title: "High resolution output",
      desc: "Get high-resolution, crystal-clear product photos that are prepared for the web, print, or marketplaces."
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Fast generation",
      desc: "Generate high-quality product images in just seconds no rendering delays or long processing times."
    },
    {
      icon: "fa-solid fa-file",
      title: "Bulk generation",
      desc: "Upload multiple product photos at once and generate scenes in bulk—a huge time saver for agencies and large shops."
    },
    {
      icon: "fa-brands fa-files-pinwheel",
      title: "Multiple Variations",
      desc: "Create several styled versions of the same product image to test different looks for ads, content, or marketplaces."
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 text-center text-white">
      <h3 className="text-lg text-[#1ee19b] font-medium">FEATURES</h3>
      <h2 className="mt-2 text-2xl md:text-4xl font-normal px-4 max-w-xl mx-auto">
        Packed with smart features that <span className="text-[#1ee19b]">save you time.</span>
      </h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {featureCards.map((card, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#1e1e1e] to-[#181818] p-6 rounded-xl shadow-md text-left hover:shadow-lg transition border border-[#252525]"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1ee19b] mb-12 mt-2">
              <i className={`${card.icon} text-black`}></i>
            </div>
            <h4 className="text-2xl font-normal mb-2">{card.title}</h4>
            <p className="text-[#cfcfcf] text-base leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
