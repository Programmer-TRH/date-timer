"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { TestimonialType } from "@/types/testimonial-type";

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: TestimonialType[];
}) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {testimonials?.map((testimonial) => (
          <CarouselItem
            key={testimonial.id}
            className="basis-full md:basis-1/2"
          >
            <Card className="bg-linear-to-br from-[#fce4ec] to-[#f3e5f5]">
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {`“${testimonial.content}”`}
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full size-15 object-center object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-primary">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
