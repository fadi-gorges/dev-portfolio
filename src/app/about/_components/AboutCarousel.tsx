"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const images = [
  {
    src: "/media/about/portrait.jpg",
    alt: "Portrait of Fadi Gorges",
  },
  {
    src: "/media/about/harbour.jpg",
    alt: "Sydney Harbour",
  },
  {
    src: "/media/about/portrait2.jpg",
    alt: "Portrait of Fadi Gorges",
  },
  {
    src: "/media/about/bondi.jpg",
    alt: "Bondi Beach",
  },
  {
    src: "/media/about/portrait3.jpg",
    alt: "Portrait of Fadi Gorges",
  },
  {
    src: "/media/about/ultimo.jpg",
    alt: "Ultimo",
  },
];

const AboutCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
        }),
      ]}
      className="md:w-[90%] xl:w-full mx-auto"
    >
      <CarouselContent className="-ml-1">
        {images.map((img) => (
          <CarouselItem key={img.src} className="pl-1 basis-1/2 md:basis-1/3">
            <div className="p-1">
              <Card className="overflow-hidden">
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority
                    className="object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:hidden top-[110%] left-[44%] -translate-x-1/2" />
      <CarouselNext className="md:hidden top-[110%] left-[56%] -translate-x-1/2" />
      <CarouselPrevious className="hidden md:inline-flex" />
      <CarouselNext className="hidden md:inline-flex" />
    </Carousel>
  );
};

export default AboutCarousel;
