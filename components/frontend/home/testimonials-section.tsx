import TestimonialCarousel from "@/components/shared/testimonial-carousel";
import { testimonialsData } from "@/lib/data/testimonials-data";

export function TestimonialsSection() {
  const testimonials = testimonialsData;
  return (
    <section className="section-spacing bg-white">
      <div className="wrapper">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          What Our Customers Are Saying
        </h2>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
