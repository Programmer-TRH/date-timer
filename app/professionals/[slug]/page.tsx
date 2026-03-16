import {
  getProfessionalBySlug,
  getProfessionals,
} from "@/services/professional-services";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const professionals = await getProfessionals();
  return professionals.map((professional) => ({
    slug: professional.slug,
  }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const professional = await getProfessionalBySlug(slug);
  return {
    title: professional.name || "SETMySpace - Professional Details",
    description: professional.description || "",
  };
}

export default async function ProfessionalDetailsPage({ params }: Params) {
  const { slug } = await params;
  const professional = await getProfessionalBySlug(slug);

  return (
    <section className="section-spacing">
      <div className="wrapper max-w-6xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">
            {/* Service Image */}
            <Card className="overflow-hidden">
              <Image
                src={professional.image}
                alt={professional.title}
                width={1200}
                height={700}
                className="w-full h-auto"
              />

              <CardContent className="pt-4 space-y-3">
                <div className="flex gap-2">
                  {professional.badges.map((badge: string) => (
                    <Badge key={badge}>{badge}</Badge>
                  ))}
                </div>

                <h1 className="text-2xl font-semibold">{professional.title}</h1>

                <p className="text-sm text-muted-foreground">
                  <Star className="inline size-4 text-yellow-500 fill-yellow-500 mr-1" />
                  {professional.rating} • {professional.reviews} reviews
                </p>
              </CardContent>
            </Card>

            {/* Professional Info */}
            <Card>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
              </CardHeader>

              <CardContent className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={professional.avatar} />
                  <AvatarFallback>{professional.name[0]}</AvatarFallback>
                </Avatar>

                <div>
                  <p className="font-medium">{professional.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {professional.location}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About this service</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  {professional.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT SIDEBAR */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Booking</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Starting price
                  </p>
                  <p className="text-2xl font-semibold">
                    ${professional.price}
                  </p>
                </div>

                <Separator />

                <Button className="w-full">Book Now</Button>

                <Button variant="outline" className="w-full">
                  Contact Professional
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
