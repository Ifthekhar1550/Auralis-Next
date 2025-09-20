"use client";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

interface TestimonialsGridProps {
  testimonials: Testimonial[];
  showAll: boolean;
  maxVisible?: number;
}

export default function TestimonialsGrid({ testimonials, showAll, maxVisible = 9 }: TestimonialsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
      {testimonials.map((t, index) => (
        <TestimonialCard
          key={index}
          {...t}
          show={showAll || index < maxVisible}
        />
      ))}
    </div>
  );
}
