import ProductRow from "./ProductRow";

import { productsRow1, productsRow2 } from "@/lib/mock-data";
export default function ProductSection() {
  return (
    <section className="py-4 relative mx-auto max-w-screen-2xl">
      <ProductRow products={productsRow1} />
      <ProductRow products={productsRow2} reverse />
    </section>
  );
}