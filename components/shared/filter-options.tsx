"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { professionalsFilters } from "@/lib/data/professionals-data";

export default function FilterOptions() {
  const [activeFilter, setActiveFilter] = useState("All");
  return (
    <div className="flex flex-wrap lg:flex-col gap-2">
      {professionalsFilters.map((filter) => (
        <Button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          variant={activeFilter === filter ? "secondary" : "outline"}
          className={`px-4 py-2 rounded-lg text-sm font-medium text-left justify-start transition-all ${
            activeFilter !== filter && "hover:bg-secondary/75 hover:text-white"
          }`}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}
