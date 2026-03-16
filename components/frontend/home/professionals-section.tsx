"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, MapPin, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const filters = [
  "All",
  "Balloon Decorations",
  "Flower Decorations",
  "Theme Decorations",
  "Lighting",
  "Catering",
  "Photography",
];

const professionals = [
  {
    id: 1,
    title: "Premium Birthday Package",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80",
    badge: "Best Seller",
    rating: 4.8,
    reviews: 124,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    name: "John Smith",
    location: "New York, NY",
    price: "$299",
  },
  {
    id: 2,
    title: "Luxury Party Setup",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80",
    badge: "Premium",
    rating: 4.9,
    reviews: 89,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    name: "Sarah Johnson",
    location: "Los Angeles, CA",
    price: "$449",
  },
  {
    id: 3,
    title: "Kids Fun Zone Package",
    image:
      "https://images.unsplash.com/photo-1534637192341-e1e7b5c0d80e?w=400&q=80",
    badge: "Popular",
    rating: 4.7,
    reviews: 156,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    name: "Mike Wilson",
    location: "Chicago, IL",
    price: "$249",
  },
  {
    id: 4,
    title: "Elegant Garden Theme",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80",
    badge: "New",
    rating: 4.6,
    reviews: 67,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    name: "Emily Davis",
    location: "Miami, FL",
    price: "$379",
  },
  {
    id: 5,
    title: "Royal Birthday Celebration",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0202128?w=400&q=80",
    badge: "Featured",
    rating: 4.9,
    reviews: 203,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    name: "David Brown",
    location: "Seattle, WA",
    price: "$529",
  },
  {
    id: 6,
    title: "Colorful Balloon Arch",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&q=80",
    badge: "Trending",
    rating: 4.8,
    reviews: 178,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    name: "Lisa Anderson",
    location: "Boston, MA",
    price: "$199",
  },
];

export function ProfessionalsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="section-spacing bg-gray-50">
      <div className="wrapper">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Explore Our Professional Decoration Packages
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 shrink-0">
            <div className="bg-white rounded-xl p-4 shadow-sm sticky top-24">
              <h3 className="font-semibold mb-4">Filter By</h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium text-left transition-all ${
                      activeFilter === filter
                        ? "bg-[#e91e63] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {professionals.map((pro) => (
                <div
                  key={pro.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={pro.image}
                      alt={pro.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-[#e91e63] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {pro.badge}
                    </span>
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                        <Heart className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                        <Share2 className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(pro.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {pro.rating} ({pro.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <Image
                        src={pro.avatar}
                        alt={pro.name}
                        width={36}
                        height={36}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium text-sm">{pro.name}</p>
                        <div className="flex items-center text-gray-500 text-xs">
                          <MapPin className="w-3 h-3 mr-1" />
                          {pro.location}
                        </div>
                      </div>
                    </div>

                    <h3 className="font-semibold mb-3 line-clamp-2">
                      {pro.title}
                    </h3>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-[#e91e63]">
                          {pro.price}
                        </span>
                      </div>
                      <Button className="bg-[#e91e63] hover:bg-[#c2185b] text-white text-sm px-4">
                        CONTACT NOW
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
