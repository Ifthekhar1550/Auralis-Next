import Image from "next/image";

interface ProductCardProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const ProductCard = ({ src, alt, priority }: ProductCardProps) => (
  <div className="flex-shrink-0 w-28 md:w-64 overflow-hidden rounded-2xl shadow-lg">
    <Image
      src={src}
      alt={alt}
      className="w-full h-28 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
      width={256}
      height={256}
      priority={priority}
    />
  </div>
);

export default ProductCard;
