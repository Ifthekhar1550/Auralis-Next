"use client";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="bg-[#1e1e1e] text-white py-20 px-4 md:px-8 rounded-4xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Col */}
        <div>
          <h3 className="mb-10 text-lg text-[#1ee19b] font-medium">HOW IT WORK</h3>
          <h2 className="text-4xl md:text-5xl font-normal leading-tight mb-6">
            Generate your product photo <span className="text-[#1ee19b]">in seconds.</span>
          </h2>
        </div>

        {/* Right Col */}
        <div>
          <p className="text-gray-400 mb-8 max-w-lg">
            Just upload your product, select a scene, and watch our AI instantly create
            stunning visuals for your brand, ads, or social posts.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="w-2/3 border border-[#1ee19b] text-[#1ee19b] font-semibold p-2 md:px-6 md:py-3 rounded-xl bg-transparent hover:bg-[#1ee19b] hover:text-black transition">
              Try It Now
            </button>
            <button className="w-2/3 border border-[#1ee19b] text-[#1ee19b] font-semibold p-2 md:px-6 md:py-3 rounded-xl bg-transparent hover:bg-[#1ee19b] hover:text-black transition">
              See Examples
            </button>
          </div>
        </div>
      </div>

      {/* Step 01 */}
      <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h3 className="text-6xl font-normal text-[#1ee19b] mb-4">01</h3>
          <h4 className="text-2xl font-normal mb-4">Upload your product photo</h4>
          <p className="text-gray-400 max-w-xl">
            Take a clean photo of your product using your phone or camera on any background.
            Upload it to the tool, and our AI will detect and isolate the product automatically.
          </p>
        </div>
        <div className="bg-[#171717] rounded-2xl p-6 flex flex-col items-center shadow-lg border border-[#ffffff26]">
          <div className="w-full max-w-xs">
            <Image
              src="/images/how it works/pexels-karolina-grabowska-4041391.jpg"
              alt="Product Upload"
              className="rounded-lg mb-6 h-94 object-cover max-w-full mx-auto"
                width={400}
                height={400
              }
            />
            <button className="w-full border border-[#1ee19b] hover:bg-transparent text-dark font-semibold py-3 rounded-md flex items-center justify-center gap-2 bg-[#1ee19b] transition">
              <i className="fa-solid fa-upload"></i> Upload
            </button>
          </div>
        </div>
      </div>

      {/* Step 02 */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="bg-[#171717] rounded-2xl p-4 lg:p-12 grid grid-cols-3 items-center shadow-lg gap-4 border-[#ffffff26] border order-2 lg:order-1">
          <div className="w-full max-w-xs flex flex-col gap-4 items-center col-span-1">
            <Image src="/images/how it works/pexels-karolina-grabowska-4041391.jpg" alt="" className="rounded-xl h-1/3 object-cover w-full mx-auto border-4 border-transparent hover:border-emerald-700"   width={400} height={400}/>
            <Image src="/images/how it works/pexels-karolina-grabowska-4938453.jpg" alt="" className="rounded-xl h-1/3 object-cover w-full mx-auto border-4 border-transparent hover:border-emerald-700"   width={400} height={400}/>
            <Image src="/images/how it works/pexels-karolina-grabowska-4041391.jpg" alt="" className="rounded-xl h-1/3 object-cover w-full mx-auto border-4 border-transparent hover:border-emerald-700"   width={400} height={400}/>
          </div>
          <div className="col-span-2 h-full">
            <Image src="/images/how it works/pexels-polina-kovaleva-8101532.jpg" alt="" className="rounded-xl h-full object-cover w-full mx-auto border-4 border-transparent hover:border-emerald-700" width={400} height={400} />
          </div>
        </div>
        <div className="max-w-2xl order-1 lg:order-2">
          <h3 className="text-6xl font-normal text-[#1ee19b] mb-4">02</h3>
          <h4 className="text-2xl font-normal mb-4">Choose a style or scene</h4>
          <p className="text-gray-400 max-w-xl">
            Select from a library of backgrounds minimalist studio, lifestyle, seasonal, or custom brand scenes. You can
            adjust lighting, angles, shadows, and even add props to match your aesthetic.
          </p>
        </div>
      </div>

      {/* Step 03 */}
      <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h3 className="text-6xl font-normal text-[#1ee19b] mb-4">03</h3>
          <h4 className="text-2xl font-normal mb-4">Generate and download</h4>
          <p className="text-gray-400 max-w-xl">
            In seconds, our AI creates high-resolution images with your selected style. Preview, tweak if needed, and
            download your final shots ready to use on your store, social media, or ad campaigns.
          </p>
        </div>
        <div className="bg-[#171717] rounded-2xl p-6 flex flex-col items-center shadow-lg border border-[#ffffff26]">
          <div className="w-full max-w-xs">
            <Image
              src="/images/how it works/pexels-karolina-grabowska-4041391.jpg"
              alt="Product Upload"
              className="rounded-lg mb-6 h-94 object-cover max-w-full mx-auto"
                width={400}
                height={400}
            />
            <button className="w-full border border-[#1ee19b] hover:bg-transparent text-dark font-semibold py-3 rounded-md flex items-center justify-center gap-2 bg-[#1ee19b] transition">
              <i className="fa-solid fa-download"></i> Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
