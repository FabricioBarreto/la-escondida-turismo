"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const imagenes = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=600&fit=crop",
];

export default function Hero() {
  const t = useTranslations("hero");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { titulo: t("slides.0.titulo"), subtitulo: t("slides.0.subtitulo") },
    { titulo: t("slides.1.titulo"), subtitulo: t("slides.1.subtitulo") },
    { titulo: t("slides.2.titulo"), subtitulo: t("slides.2.subtitulo") },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="inicio" className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={imagenes[index]}
            alt={slide.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {slide.titulo}
              </h1>
              <p className="text-xl md:text-2xl">{slide.subtitulo}</p>
            </div>
          </div>
        </div>
      ))}
      <Button
        onClick={prevSlide}
        variant="secondary"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        onClick={nextSlide}
        variant="secondary"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>
    </section>
  );
}
