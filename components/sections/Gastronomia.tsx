"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  UtensilsCrossed,
  Coffee,
  Fish,
  Phone,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

import { useState } from "react";
import { ZoomIn } from "lucide-react";
import Lightbox from "@/components/ui/Lightbox";

const imagenesRestaurantes = [
  "/images/casa-de-comidas-isabella/casa-de-comidas-isabella-1.jpg",
  "/images/comedor-delicias/comedor-delicias-1.jpg",
  "/images/comedor-delicias/comedor-delicias-2.jpg",
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&h=600&fit=crop",
];

const imagenesPlatosTypicos = [
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
];

const iconosPescado = ["🐟", "🐟", "🐟", "🐟"];
const iconosSabores = ["🧀", "🍯", "🧉", "🍖"];
const esLocal = [true, true, true, false, false, false];

const destacadosRestaurantes = [true, true, true, false, false, false];

export default function Gastronomia() {
  const t = useTranslations("gastronomia");

  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  const imagenesGastronomia: Record<string, string[]> = {
    "casa-de-comidas-isabella": Array.from(
      { length: 9 },
      (_, i) =>
        `/images/casa-de-comidas-isabella/casa-de-comidas-isabella-${i + 1}.jpg`,
    ),
    "comedor-delicias": Array.from(
      { length: 5 },
      (_, i) => `/images/comedor-delicias/comedor-delicias-${i + 1}.jpg`,
    ),
  };

  const slugsRestaurantes = [
    "casa-de-comidas-isabella",
    "comedor-delicias",
    "bufet-la-gloriosa",
    "",
    "",
    "",
  ];

  const restaurantes = Array.from({ length: 6 }, (_, i) => ({
    nombre: t(`restaurantes.${i}.nombre`),
    tipo: t(`restaurantes.${i}.tipo`),
    descripcion: t(`restaurantes.${i}.descripcion`),
    especialidades: Array.from({ length: 4 }, (_, j) =>
      t(`restaurantes.${i}.especialidades.${j}`),
    ),
    ubicacion: t(`restaurantes.${i}.ubicacion`),
    precio: t(`restaurantes.${i}.precio`) as "$" | "$$" | "$$$",
    destacado: destacadosRestaurantes[i], // ← fix: booleano directo
    imagen: imagenesRestaurantes[i],
  }));

  const platosTypicos = Array.from({ length: 6 }, (_, i) => ({
    nombre: t(`platosList.${i}.nombre`),
    descripcion: t(`platosList.${i}.descripcion`),
    categoria: t(`platosList.${i}.categoria`),
    imagen: imagenesPlatosTypicos[i],
  }));

  return (
    <section
      id="gastronomia"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <h3 className="text-2xl font-bold text-emerald-700 mb-6">
          {t("dondeComer")}
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {restaurantes.map((resto, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-xl transition group ${resto.destacado ? "ring-2 ring-amber-500" : ""}`}
            >
              {resto.destacado && (
                <div className="bg-amber-600 text-white text-center py-1 text-sm font-semibold">
                  ⭐ {t("recomendado")}
                </div>
              )}
              {!esLocal[index] && (
                <div className="bg-blue-600 text-white text-center py-1 text-sm font-semibold">
                  📍 {t("fueraDeLocalidad")}
                </div>
              )}

              {/* Imagen con lightbox */}
              <div
                className="relative overflow-hidden h-52 cursor-pointer"
                onClick={() => {
                  const slug = slugsRestaurantes[index];
                  const imgs = imagenesGastronomia[slug] ?? [resto.imagen];
                  setLightbox({ images: imgs, index: 0 });
                }}
              >
                <img
                  src={resto.imagen}
                  alt={resto.nombre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition" />
                </div>
                {(imagenesGastronomia[slugsRestaurantes[index]]?.length ?? 0) >
                  1 && (
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                    📷 {imagenesGastronomia[slugsRestaurantes[index]].length}{" "}
                    fotos
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-amber-700">
                  {resto.tipo}
                </div>
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {resto.precio}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-amber-700 text-xl line-clamp-1">
                  {resto.nombre}
                </CardTitle>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-1 text-amber-600" />
                  <span>{resto.ubicacion}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="line-clamp-2">
                  {resto.descripcion}
                </CardDescription>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-700 flex items-center">
                    <UtensilsCrossed className="w-4 h-4 mr-1 text-amber-600" />
                    {t("especialidades")}
                  </p>
                  <div className="space-y-1">
                    {resto.especialidades.slice(0, 3).map((plato, i) => (
                      <p key={i} className="text-xs text-gray-600">
                        • {plato}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-gray-500">
                    {t("precioPromedio")} {t(`precios.${resto.precio}`)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-emerald-700 mb-6">
          {t("platosTipicos")}
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {platosTypicos.map((plato, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={plato.imagen}
                  alt={plato.nombre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {plato.categoria}
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-bold text-emerald-700 mb-2">
                  {plato.nombre}
                </h4>
                <p className="text-sm text-gray-600">{plato.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-700 flex items-center">
                <Fish className="w-5 h-5 mr-2" />
                {t("pescadosTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-700">
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i}>
                  <p className="font-semibold text-emerald-700">
                    {iconosPescado[i]} {t(`pescados.${i}.nombre`)}
                  </p>
                  <p>{t(`pescados.${i}.descripcion`)}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-700 flex items-center">
                <Coffee className="w-5 h-5 mr-2" />
                {t("saboresTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-700">
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i}>
                  <p className="font-semibold text-amber-700">
                    {iconosSabores[i]} {t(`sabores.${i}.nombre`)}
                  </p>
                  <p>{t(`sabores.${i}.descripcion`)}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-emerald-700 mb-6 text-center flex items-center justify-center">
            <Star className="w-6 h-6 mr-2" />
            {t("guiaTitle")}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-emerald-700">
                🍽️ {t("dondeEncontrar")}
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {Array.from({ length: 4 }, (_, i) => (
                  <li key={i}>{t(`dondeItems.${i}`)}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-amber-700">
                💰 {t("rangoTitle")}
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {Array.from({ length: 4 }, (_, i) => (
                  <li key={i}>{t(`rangoItems.${i}`)}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700 mb-4">
              <strong>{t("recomendacionesTitle")}</strong>
              <br />
              {t("recomendacionesSubtitle")}
            </p>
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/5493624000000?text=Quiero%20recomendaciones%20gastron%C3%B3micas",
                  "_blank",
                )
              }
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t("whatsappBtn")}
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600 bg-white rounded-lg p-4 max-w-2xl mx-auto">
          <p className="font-semibold mb-2">⏰ {t("horariosTitle")}</p>
          <p>{t("horarios")}</p>
          <p className="text-xs mt-2">{t("horariosNota")}</p>
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
