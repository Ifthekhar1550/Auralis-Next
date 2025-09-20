import Hero from "../components/Hero";
import ProductSection from "@/components/ProductSection";
import BrandSection from "@/components/BrandSection";
import HowItWorks from "@/components/HowItWorksSection";
import Features from "@/components/FeatureSection";
import UseCaseSection from "@/components/UseCaseSection";
export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <ProductSection></ProductSection>
      <BrandSection></BrandSection>
      <HowItWorks></HowItWorks>
      <Features></Features>
      <UseCaseSection></UseCaseSection>

    </div>
  );
}
