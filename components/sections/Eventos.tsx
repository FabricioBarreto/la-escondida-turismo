"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ZoomIn } from "lucide-react";
import { useTranslations } from "next-intl";
import Lightbox from "@/components/ui/Lightbox";

const imagenesEventos: Record<number, string[]> = {
  0: Array.from(
    { length: 9 },
    (_, i) => `/images/festival-del-guiso/festival-del-guiso-${i + 1}.jpg`,
  ),
};

const imagenesFallback = [
  "/images/festival-del-guiso/festival-del-guiso-9.jpg",
  "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1576020799627-aeac74d58064?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&h=300&fit=crop",
];

const esLocal = [true, false, true, true, false, false];

const tipoColores: Record<string, string> = {
  Gastronómico: "bg-orange-100 text-orange-700",
  Gastronomic: "bg-orange-100 text-orange-700",
  Gastronômico: "bg-orange-100 text-orange-700",
  Deportivo: "bg-blue-100 text-blue-700",
  Sports: "bg-blue-100 text-blue-700",
  Esportivo: "bg-blue-100 text-blue-700",
  Cultural: "bg-purple-100 text-purple-700",
  Religioso: "bg-amber-100 text-amber-700",
  Religious: "bg-amber-100 text-amber-700",
  Arte: "bg-pink-100 text-pink-700",
  Art: "bg-pink-100 text-pink-700",
  Naturaleza: "bg-green-100 text-green-700",
  Nature: "bg-green-100 text-green-700",
  Natureza: "bg-green-100 text-green-700",
};

export default function Eventos() {
  const t = useTranslations("eventos");
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  const eventos = Array.from({ length: 6 }, (_, i) => ({
    fecha: t(`items.${i}.fecha`),
    año: t(`items.${i}.año`),
    titulo: t(`items.${i}.titulo`),
    lugar: t(`items.${i}.lugar`),
    descripcion: t(`items.${i}.descripcion`),
    tipo: t(`items.${i}.tipo`),
    imagen: imagenesFallback[i],
    esLocal: esLocal[i],
    fotos: imagenesEventos[i] ?? [imagenesFallback[i]],
  }));

  return (
    <section id="eventos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventos.map((evento, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition group"
            >
              {!evento.esLocal && (
                <div className="bg-blue-600 text-white text-center py-1 text-sm font-semibold">
                  📍 {t("fueraDeLocalidad")}
                </div>
              )}

              {/* Imagen con lightbox */}
              <div
                className="relative overflow-hidden h-48 cursor-pointer"
                onClick={() => setLightbox({ images: evento.fotos, index: 0 })}
              >
                <img
                  src={evento.imagen}
                  alt={evento.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold leading-none">
                    {evento.fecha.split(" ")[0]}
                  </div>
                  <div className="text-sm">
                    {evento.fecha.split(" ").slice(1).join(" ")}
                  </div>
                  <div className="text-xs mt-1 opacity-90">{evento.año}</div>
                </div>
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${tipoColores[evento.tipo] ?? "bg-gray-100 text-gray-700"}`}
                >
                  {evento.tipo}
                </div>
                {evento.fotos.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                    📷 {evento.fotos.length} fotos
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-emerald-700 mb-2 line-clamp-2">
                  {evento.titulo}
                </h3>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <MapPin className="w-4 h-4 mr-1 text-emerald-600" />
                  <span>{evento.lugar}</span>
                </div>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {evento.descripcion}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-emerald-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-emerald-700 mb-4 text-center">
            📅 {t("calendarioTitle")}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i}>
                <h4 className="font-semibold text-emerald-700 mb-2">
                  {t(`estaciones.${i}.titulo`)}
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {Array.from({ length: 3 }, (_, j) => (
                    <li key={j}>• {t(`estaciones.${i}.items.${j}`)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            💡 <strong>{t("tipLabel")}</strong> {t("tip")}
          </p>
        </div>
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          currentIndex={lightbox.index}
          onClose={() => setLightbox(null)}
          onNext={() =>
            setLightbox((prev) =>
              prev
                ? { ...prev, index: (prev.index + 1) % prev.images.length }
                : null,
            )
          }
          onPrev={() =>
            setLightbox((prev) =>
              prev
                ? {
                    ...prev,
                    index:
                      (prev.index - 1 + prev.images.length) %
                      prev.images.length,
                  }
                : null,
            )
          }
        />
      )}
    </section>
  );
}
