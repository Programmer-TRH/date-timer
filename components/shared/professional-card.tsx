import Image from "next/image";
import { Star, MapPin, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ProfessionalType } from "@/types/professional-type";
import Link from "next/link";

export default function ProfessionalCard({
  professional,
}: {
  professional: ProfessionalType;
}) {
  return (
    <Card className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ease-in-out pt-0 max-w-sm gap-0 hover:bg-[#f1d2d9]">
      <div className="relative h-64">
        <Image
          src={professional.image}
          alt={professional.title}
          fill
          sizes="100%"
          className="object-cover object-center"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {professional.badges?.map((badge: string, index: number) => (
            <Badge key={index} className="rounded-sm p-4">
              {badge}
            </Badge>
          ))}
        </div>
        <button
          className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          aria-label="Add to favorites"
        >
          <Heart className="w-4 h-4 text-[#ec4899]" />
        </button>
      </div>

      <CardContent className="relative pt-2">
        <span className="text-lg font-semibold whitespace-nowrap absolute top-0 right-0 bg-secondary text-white px-4 py-1.5 rounded-bl-xl">
          Rs. {professional.price}
        </span>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-lg line-clamp-2 max-w-6/10">
            {professional.title}
          </h2>
        </div>

        <div className="flex flex-col gap-1 mb-4">
          <div className="flex items-center gap-3">
            <Image
              src={professional.avatar}
              alt={professional.name}
              width={40}
              height={40}
              className="rounded-full size-8 object-cover object-center"
            />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-base truncate text-foreground/75">
                {professional.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{professional.rating}</span>
            <span className="pr-1.5">({professional.reviews})</span>
            <MapPin className="w-3 h-3" />
            <span className="truncate">{professional.location}</span>
          </div>
        </div>
        {professional?.description && (
          <p className="text-sm text-gray-500 line-clamp-2 mb-6">
            {professional.description}
          </p>
        )}

        <Button
          nativeButton={false}
          variant="outline"
          className="w-full hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
          render={
            <Link href={`/professionals/${professional.slug}`}>
              CONTACT NOW
            </Link>
          }
        />
      </CardContent>
    </Card>
  );
}
