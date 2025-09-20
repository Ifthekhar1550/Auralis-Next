"use client";
import Image from "next/image";

import { useEffect, useRef } from "react";

const productsRow1 = [
  "/images/product/pexels-alexandra-maria-58259-336372.jpg",
  "/images/product/pexels-brandandpalms-768975.jpg",
  "/images/product/pexels-mota-701877.jpg",
  "/images/product/pexels-nietjuhart-934064.jpg",
  "/images/product/pexels-alexandra-maria-58259-336372.jpg",
  "/images/product/pexels-nietjuhart-934070.jpg",
  "/images/product/pexels-nietjuhart-934064.jpg",
  "/images/product/pexels-mota-701877.jpg",
  "/images/product/pexels-alexandra-maria-58259-336372.jpg",
  "/images/product/pexels-nietjuhart-934070.jpg",
];

const productsRow2 = [
  "/images/product/pexels-nietjuhart-934070.jpg",
  "/images/product/pexels-nietjuhart-934064.jpg",
  "/images/product/pexels-mota-701877.jpg",
  "/images/product/pexels-alexandra-maria-58259-336372.jpg",
  "/images/product/pexels-nietjuhart-934070.jpg",
  "/images/product/pexels-nietjuhart-934070.jpg",
  "/images/product/pexels-nietjuhart-934064.jpg",
  "/images/product/pexels-mota-701877.jpg",
  "/images/product/pexels-alexandra-maria-58259-336372.jpg",
  "/images/product/pexels-nietjuhart-934070.jpg",
];

export default function ProductSection() {
  const rowRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    rowRefs.current.forEach((row) => {
      const content = row.querySelector(".content") as HTMLElement;
      if (content) {
        const clone = content.cloneNode(true);
        row.appendChild(clone);

        const pxPerSec = 100;
        const contentWidth = content.scrollWidth;
        (row as HTMLElement).style.animationDuration = `${contentWidth / pxPerSec}s`;
      }
    });
  }, []);

  const renderRow = (products: string[], reverse = false) => (
    <div className="overflow-hidden relative mb-4">
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#101010] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#101010] to-transparent z-10"></div>

      <div
        ref={(el) => { if (el) rowRefs.current.push(el) }}
        className={`container flex ${reverse ? "scroll-right" : "scroll-left"}`}
      >
        <div className="content flex space-x-2 md:space-x-4">
          {products.map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-28 md:w-64 overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={img}
                alt={`Product ${idx + 1}`}
                className="w-full h-28 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                width={256}
                height={256}
                priority={idx < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-4 relative mx-auto max-w-screen-2xl">
      {renderRow(productsRow1)}
      {renderRow(productsRow2, true)}
    </section>
  );
}
