"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, MapPin, Star } from "lucide-react";
import { useTranslations } from "next-intl";

const imagenes = [
  "https://images.unsplash.com/photo-1576020799627-aeac74d58064?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&h=600&fit=crop",
];

export default function Imperdibles() {
  const t = useTranslations("imperdibles");

  const items = Array.from({ length: 6 }, (_, i) => ({
    titulo: t(`items.${i}.titulo`),
    descripcion: t(`items.${i}.descripcion`),
    duracion: t(`items.${i}.duracion`),
    distancia: t(`items.${i}.distancia`),
    highlights: Array.from({ length: 3 }, (_, j) =>
      t(`items.${i}.highlights.${j}`),
    ),
    imagen: imagenes[i],
  }));

  return (
    <section id="imperdibles" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-emerald-700 mb-4">
          {t("title")}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {item.distancia}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-emerald-700 text-xl">
                  {item.titulo}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-gray-700">
                  {item.descripcion}
                </CardDescription>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4 mr-1 text-emerald-600" />
                  <span>{item.duracion}</span>
                </div>
                <div className="space-y-1">
                  {item.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center text-xs text-emerald-700"
                    >
                      <Star className="w-3 h-3 mr-1 fill-emerald-600" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">{t("mejorEpoca")}</p>
          <div className="inline-flex items-center bg-emerald-50 px-6 py-3 rounded-lg">
            <span className="text-emerald-700 font-semibold">
              🦜 {t("fauna")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
