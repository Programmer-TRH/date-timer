"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = ["Birthday", "Anniversary", "Baby Shower"];

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("Birthday");

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/30" />
      </div>

      <div className="relative z-10 wrapper text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
          We set up your space to celebrate your Birthday Party
        </h1>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#e91e63] text-white"
                  : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg p-4 max-w-4xl mx-auto shadow-xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Search for professionals..."
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>
            <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
              <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Location"
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>
            <Button className="bg-[#e91e63] hover:bg-[#c2185b] text-white px-8 py-3 text-base font-semibold">
              Search Professionals
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
