import { HeroSection } from "@/components/frontend/home/hero-section";
import { FeaturedCategories } from "@/components/frontend/home/featured-categories";
import { ProfessionalsSection } from "@/components/frontend/home/professionals-section";
import { TestimonialsSection } from "@/components/frontend/home/testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <ProfessionalsSection />
      <TestimonialsSection />
    </>
  );
}
