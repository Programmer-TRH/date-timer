import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Husband's Birthday Party",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    gradient: "from-[#e91e63] to-[#9c27b0]",
  },
  {
    title: "Wife's Birthday Party",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    gradient: "from-[#9c27b0] to-[#673ab7]",
  },
  {
    title: "Kids's Birthday Party",
    image:
      "https://images.unsplash.com/photo-1534637192341-e1e7b5c0d80e?w=600&q=80",
    gradient: "from-[#673ab7] to-[#3f51b5]",
  },
];

export function FeaturedCategories() {
  return (
    <section className="relative -mt-32 pb-16">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-content-center">
          {categories.map((category) => (
            <div key={category.title} className="relative group cursor-pointer">
              <div
                className={`relative h-64 rounded-xl overflow-hidden bg-linear-to-br ${category.gradient}`}
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {category.title}
                  </h3>
                  <div className="flex items-center text-white/80 text-sm group-hover:text-white transition-colors">
                    Explore Now
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
