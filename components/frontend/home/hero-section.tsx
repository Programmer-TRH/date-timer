import { Search, LocateFixed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Item, ItemContent, ItemMedia } from "@/components/ui/item";
import Image from "next/image";
import HeroBg from "@/public/images/hero-bg.png";
import { featureItems } from "@/lib/data/feature-items";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden ">
      <Image
        src={HeroBg}
        alt="Hero"
        fill
        className="absolute inset-0 object-center object-cover"
      />
      <div className="wrapper-hero relative z-10 mt-16 sm:mt-24 section-spacing text-foreground">
        <h1 className="text-4xl md:text-5xl mb-4 max-w-3xl leading-snug">
          <span>We set up your space to celebrate your</span>{" "}
          <strong>Birthday Party</strong>
        </h1>

        <div className="flex flex-col md:flex-row items-center mb-2 max-w-lg">
          {featureItems.map((feature) => (
            <Item key={feature.id} className="px-0 gap-2">
              <ItemMedia>
                <feature.icon className="size-5 text-primary" />
              </ItemMedia>
              <ItemContent className="font-semibold">
                {feature.name}
              </ItemContent>
            </Item>
          ))}
        </div>

        <div className="max-w-4xl">
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl mb-4">
            <InputGroup className="sm:rounded-tr-none sm:rounded-br-none py-6 px-4">
              <InputGroupInput
                type="text"
                placeholder="Search Service, Professionals etc."
                className="outline-none placeholder:text-gray-500 border-none "
              />
              <InputGroupAddon align="inline-end">
                <Search className="w-5 h-5 shrink-0 text-foreground" />
              </InputGroupAddon>
            </InputGroup>
            <InputGroup className="sm:rounded-tl-none sm:rounded-bl-none py-6 px-4">
              <InputGroupInput
                type="text"
                placeholder="Enter Location"
                className="outline-none placeholder:text-gray-500 border-none"
              />
              <InputGroupAddon align="inline-end">
                <LocateFixed className="w-5 h-5 shrink-0 text-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </div>
          <Button className="px-5">Search Professionals</Button>
        </div>
      </div>
    </section>
  );
}
