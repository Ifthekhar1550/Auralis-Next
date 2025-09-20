"use client";
import { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";

interface ProductRowProps {
  products: string[];
  reverse?: boolean;
}

const ProductRow = ({ products, reverse = false }: ProductRowProps) => {
  const rowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rowRef.current) return;
    const row = rowRef.current;
    const content = row.querySelector(".content") as HTMLElement;

    if (content) {
      const clone = content.cloneNode(true);
      row.appendChild(clone);

      const pxPerSec = 100;
      const contentWidth = content.scrollWidth;
      row.style.animationDuration = `${contentWidth / pxPerSec}s`;
    }
  }, []);

  return (
    <div className="overflow-hidden relative mb-4">
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#101010] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#101010] to-transparent z-10"></div>

      <div
        ref={rowRef}
        className={`container flex ${reverse ? "scroll-right" : "scroll-left"}`}
      >
        <div className="content flex space-x-2 md:space-x-4">
          {products.map((img, idx) => (
            <ProductCard
              key={idx}
              src={img}
              alt={`Product ${idx + 1}`}
              priority={idx < 2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductRow;
