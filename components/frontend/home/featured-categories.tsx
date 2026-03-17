import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data/categories-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FeaturedCategories() {
  return (
    <section className="relative mt-16 md:-mt-24 pb-16">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-content-center">
          {categories.map((category) => (
            <Card key={category.title} className="relative group py-0">
              <CardContent
                className={`relative h-52 rounded-xl overflow-hidden bg-linear-to-br ${category.gradient}`}
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="100%"
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-white text-xl font-semibold">
                    {category.title}
                  </h2>
                  <Button
                    nativeButton={false}
                    variant="link"
                    className="text-white group-hover:underline cursor-pointer px-0"
                    render={
                      <Link href="#">
                        Explore Now
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    }
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
