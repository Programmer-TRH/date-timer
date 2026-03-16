import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amanda Richardson",
    role: "Birthday Celebrant",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    content:
      "SETMySpace made my daughter's birthday absolutely magical! The decoration team was professional, punctual, and the balloon arch was stunning. Highly recommend their services for anyone looking to create unforgettable moments.",
  },
  {
    id: 2,
    name: "Robert Martinez",
    role: "Event Planner",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    content:
      "As an event planner, I need reliable partners. SETMySpace has been my go-to for birthday decorations. Their attention to detail and creative designs never disappoint. The team goes above and beyond to make each celebration special.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="wrapper">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          What Our Customers Are Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-[#fce4ec] to-[#f3e5f5] rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#e91e63]/20" />

              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
