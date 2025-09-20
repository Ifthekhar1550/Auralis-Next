"use client";

import Image from "next/image";
import { useState } from "react";
import '../app/globals.css';

interface Product {
  src: string;
  alt: string;
}

interface Tab {
  name: string;
  products: Product[];
}

export default function UseCaseSection() {
  const tabs: Tab[] = [
    {
      name: "shoes",
      products: [
        { src: "/images/product/pexels-alexandra-maria-58259-336372.jpg", alt: "Product 1" },
        { src: "/images/product/pexels-brandandpalms-768975.jpg", alt: "Product 2" },
        { src: "/images/product/pexels-mota-701877.jpg", alt: "Product 3" },
        { src: "/images/product/pexels-nietjuhart-934064.jpg", alt: "Product 4" },
        { src: "/images/product/pexels-nietjuhart-934070.jpg", alt: "Product 5" },
        { src: "/images/product/pexels-nietjuhart-934064.jpg", alt: "Product 6" },
      ],
    },
    {
      name: "perfumes",
      products: [
        { src: "/images/how it works/pexels-karolina-grabowska-4041391.jpg", alt: "Product 1" },
        { src: "/images/how it works/pexels-karolina-grabowska-4938453.jpg", alt: "Product 2" },
        { src: "/images/how it works/pexels-karolina-grabowska-4041391.jpg", alt: "Product 3" },
        { src: "/images/how it works/pexels-karolina-grabowska-4041391.jpg", alt: "Product 4" },
        { src: "/images/how it works/pexels-karolina-grabowska-4938453.jpg", alt: "Product 5" },
        { src: "/images/how it works/pexels-karolina-grabowska-4041391.jpg", alt: "Product 6" },
      ],
    },
   
      {
      name: "furniture",
      products: [
        { src: "/images/product/pexels-alexandra-maria-58259-336372.jpg", alt: "Product 1" },
        { src: "/images/product/pexels-brandandpalms-768975.jpg", alt: "Product 2" },
        { src: "/images/product/pexels-mota-701877.jpg", alt: "Product 3" },
        { src: "/images/product/pexels-nietjuhart-934064.jpg", alt: "Product 4" },
        { src: "/images/product/pexels-nietjuhart-934070.jpg", alt: "Product 5" },
        { src: "/images/product/pexels-nietjuhart-934064.jpg", alt: "Product 6" },
      ],
    },
    {
      name: "jwellery",
      products: [
        { src: "/images/how it works/pexels-karolina-grabowska-4041391.jpg", alt: "Product 1" },
        { src: "/images/how it works/pexels-karolina-grabowska-4938453.jpg", alt: "Product 2" },
        { src: "/images/how it works/pexels-karolina-grabowska-4041391.jpg", alt: "Product 3" },
        { src: "/images/how it works/pexels-karolina-grabowska-4041391.jpg", alt: "Product 4" },
        { src: "/images/how it works/pexels-karolina-grabowska-4938453.jpg", alt: "Product 5" },
        { src: "/images/how it works/pexels-karolina-grabowska-4041391.jpg", alt: "Product 6" },
      ],
    },
      {
      name: "bags",
      products: [
        { src: "/images/product/pexels-alexandra-maria-58259-336372.jpg", alt: "Product 1" },
        { src: "/images/product/pexels-brandandpalms-768975.jpg", alt: "Product 2" },
        { src: "/images/product/pexels-mota-701877.jpg", alt: "Product 3" },
        { src: "/images/product/pexels-nietjuhart-934064.jpg", alt: "Product 4" },
        { src: "/images/product/pexels-nietjuhart-934070.jpg", alt: "Product 5" },
        { src: "/images/product/pexels-nietjuhart-934064.jpg", alt: "Product 6" },
      ],
    },
    {
      name: "foods",
      products: [
        { src: "/images/how it works/pexels-karolina-grabowska-4041391.jpg", alt: "Product 1" },
        { src: "/images/how it works/pexels-karolina-grabowska-4938453.jpg", alt: "Product 2" },
        { src: "/images/how it works/pexels-karolina-grabowska-4041391.jpg", alt: "Product 3" },
        { src: "/images/how it works/pexels-karolina-grabowska-4041391.jpg", alt: "Product 4" },
        { src: "/images/how it works/pexels-karolina-grabowska-4938453.jpg", alt: "Product 5" },
        { src: "/images/how it works/pexels-karolina-grabowska-4041391.jpg", alt: "Product 6" },
      ],
    },
  ];

   const [activeTab, setActiveTab] = useState<string>("shoes");

  return (
    <section className="text-white px-6 md:px-8 py-16 md:py-20 max-w-6xl mx-auto">
      <h5 className="text-[#1ee19b] font-medium uppercase mb-4">Use Cases</h5>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-normal leading-tight">
            One solution for <span className="text-primary">every</span> product category.
          </h2>
        </div>
        <div>
          <p className="text-base text-gray-300">
            Our AI is designed to handle any product, in any category. From fashion to cosmetics, furniture
            to electronics, you can create stunning visuals that fit your brand and resonate with your audience.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="my-10 flex flex-wrap gap-4 text-base font-normal">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`tab-btn ${activeTab === tab.name ? "active-tab" : ""}`}
          >
            {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-8">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`tab-content grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 transition-all ${
              activeTab === tab.name ? "block opacity-100 animate-fade-in" : "hidden opacity-0"
            }`}
          >
            {tab.products.map((product, idx) => (
              <div key={idx} className="overflow-hidden w-full rounded-xl shadow-lg">
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
