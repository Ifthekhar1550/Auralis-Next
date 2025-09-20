
interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

export const productsRow1: string[] = [
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

export const productsRow2: string[] = [
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

export const featureCards = [
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

export const pricingData = [
  {
    title: "Basic Plan",
    desc: "For solo creators and small businesses starting out.",
    features: ["50 images every month", "50+ background themes", "Background Removal", "1 concurrent generation"],
    monthlyPrice: 26,
    yearlyPrice: 20,
    buttonText: "Get Started With Basic",
  },
  {
    title: "Pro Plan",
    desc: "For growing e-commerce brands needing more flexibility.",
    features: ["1,000 images every month", "Create custom backgrounds", "4 concurrent generation"],
    monthlyPrice: 38,
    yearlyPrice: 32,
    isHighlighted: true,
    buttonText: "Get Started With Pro",
  },
  {
    title: "Enterprise Plan",
    desc: "For agencies and enterprises with large-scale demands.",
    features: ["Unlimited images", "Unlimited storage", "8 concurrent generation"],
    monthlyPrice: 50,
    yearlyPrice: 45,
    buttonText: "Get Started With Enterprise",
  },
];



export const testimonialsData: Testimonial[] = [
  {
    name: "Liam Thompson",
    role: "Fashion Blogger",
    image: "/images/testimonials/pexels-gabby-k-5876516.jpg",
    text: "This tool made my product photos stand out instantly. The AI-generated backgrounds are stunning and save me hours of editing.",
  },
  {
    name: "Emma Johnson",
    role: "E-commerce Owner",
    
    image: "/images/testimonials/pexels-gabby-k-6999225.jpg",
    text: "I love how fast and precise this AI is. Uploading a product photo and getting ready-to-use visuals takes seconds!",
  },
  {
    name: "Noah Williams",
    role: "Startup Founder",
 image: "/images/testimonials/pexels-gabby-k-5876516.jpg",
    text: "Our marketing visuals have improved drastically. The AI tool provides multiple variations which help us test different looks quickly.",
  },
  {
    name: "Olivia Brown",
    role: "Online Boutique Owner",
    
    image: "/images/testimonials/pexels-gabby-k-6999225.jpg",
    text: "This is the perfect solution for small businesses. High-resolution images, no manual editing, and incredibly realistic results!",
  },
  {
    name: "Ethan Davis",
    role: "Creative Director",
 image: "/images/testimonials/pexels-gabby-k-5876516.jpg",
    text: "I’ve tried many tools, but nothing comes close to the speed and quality of this one. Our product photography has never looked better.",
  },
  {
    name: "Sophia Miller",
    role: "Marketing Manager",
 image: "/images/testimonials/pexels-gabby-k-5876516.jpg",
    text: "Amazing AI! The templates and style options are perfect for social media posts, ads, and e-commerce visuals.",
  },
  {
    name: "James Wilson",
    role: "Entrepreneur",
  
    image: "/images/testimonials/pexels-gabby-k-6999225.jpg",
    text: "We scaled our product photoshoot virtually overnight. The AI tool saves our team so much time and effort.",
  },
  {
    name: "Isabella Moore",
    role: "Brand Strategist",
 image: "/images/testimonials/pexels-gabby-k-5876516.jpg",
    text: "Highly recommended! The generated images are professional, clean, and versatile for multiple platforms.",
  },
  {
    name: "Alexander Taylor",
    role: "Tech Startup Founder",
   
    image: "/images/testimonials/pexels-gabby-k-6999225.jpg",
    text: "The AI backgrounds are so realistic, it feels like we had a full photoshoot in a studio for every product.",
  },
  {
    name: "Mia Anderson",
    role: "Fashion Designer",
 image: "/images/testimonials/pexels-gabby-k-5876516.jpg",
    text: "Finally, a tool that lets us create stunning visuals without hiring a professional photographer. Love it!",
  },
    {
    name: "Alexander Taylor",
    role: "Tech Startup Founder",

    image: "/images/testimonials/pexels-gabby-k-6999225.jpg",
    text: "The AI backgrounds are so realistic, it feels like we had a full photoshoot in a studio for every product.",
  },
  {
    name: "Mia Anderson",
    role: "Fashion Designer",
 image: "/images/testimonials/pexels-gabby-k-5876516.jpg",
    text: "Finally, a tool that lets us create stunning visuals without hiring a professional photographer. Love it!",
  },
];
interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  tag: string;
  image: string;
  authorImage: string;
}

export const blogsData: Blog[] = [
  {
    id: 1,
    title: "From clicks to sales: The role of AI in visual marketing",
    description:
      "How product images improve customer engagement and drive conversions.",
    author: "Alisa Hester",
    date: "August 19, 2025",
    tag: "Marketing",
    image: "/images/product/pexels-igor-ovsyannykov-56123-205961.jpg",
    authorImage: "/images/testimonials/pexels-gabby-k-5876516.jpg",
  },
  {
    id: 2,
    title: "From clicks to sales: The role of AI in visual marketing",
    description:
      "How product images improve customer engagement and drive conversions.",
    author: "Alisa Hester",
    date: "August 19, 2025",
    tag: "Marketing",
    image: "/images/product/pexels-alexandra-maria-58259-336372.jpg",
    authorImage: "/images/testimonials/pexels-gabby-k-5876516.jpg",
  },
  {
    id: 3,
    title: "From clicks to sales: The role of AI in visual marketing",
    description:
      "How product images improve customer engagement and drive conversions.",
    author: "Alisa Hester",
    date: "August 19, 2025",
    tag: "Marketing",
    image: "/images/product/pexels-nietjuhart-934070.jpg",
    authorImage: "/images/testimonials/pexels-gabby-k-5876516.jpg",
  },
];