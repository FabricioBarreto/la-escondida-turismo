"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Wifi,
  Coffee,
  Wind,
  Waves,
  Users,
  Star,
  Phone,
  LucideIcon,
  ZoomIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";
import { ALOJAMIENTOS_DATA, alojamientos } from "@/lib/data";
import Lightbox from "@/components/ui/Lightbox";

const iconosServicios: Record<string, LucideIcon> = {
  WiFi: Wifi,
  Pileta: Waves,
  Pool: Waves,
  "Aire acondicionado": Wind,
  "Air conditioning": Wind,
  Desayuno: Coffee,
  Breakfast: Coffee,
  Cocina: Coffee,
  Kitchen: Coffee,
  Spa: Star,
  Restaurante: Coffee,
  Restaurant: Coffee,
  TV: Star,
};

type Lang = "es" | "en";

function getText(
  field: string | { es: string; en: string },
  lang: Lang,
): string {
  if (typeof field === "string") return field;
  return field[lang] ?? field.es;
}

function getArray(
  field: string[] | { es: string[]; en: string[] },
  lang: Lang,
): string[] {
  if (Array.isArray(field)) return field;
  return field[lang] ?? field.es;
}

// Mapeo de imágenes por slug
const imagenesExtra: Record<string, string[]> = {
  "hotel-falcon-oscar": Array.from(
    { length: 9 },
    (_, i) => `/images/hotel-falcon-oscar/hotel-falcon-oscar-${i + 1}.jpg`,
  ),
};

export default function Alojamiento() {
  const t = useTranslations("alojamiento");
  const locale = useLocale();
  const lang: Lang = locale === "en" ? "en" : "es";

  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  const openLightbox = (slug: string, fallbackImg: string) => {
    const images = imagenesExtra[slug] ?? [fallbackImg];
    setLightbox({ images, index: 0 });
  };

  return (
    <section id="alojamiento" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALOJAMIENTOS_DATA.map((alojamiento, index) => {
            const nombre = getText(alojamiento.nombre, lang);
            const tipo = getText(alojamiento.tipo, lang);
            const descripcion = getText(alojamiento.descripcion, lang);
            const capacidad = getText(alojamiento.capacidad, lang);
            const distancia = getText(alojamiento.distancia, lang);
            const servicios = getArray(alojamiento.servicios, lang);

            // Buscar slug en alojamientos para el lightbox
            const establecimiento = alojamientos.find(
              (a) => getText(a.nombre, lang) === nombre,
            );
            const slug = establecimiento?.slug ?? "";

            return (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl transition group ${
                  alojamiento.destacado ? "ring-2 ring-emerald-500" : ""
                }`}
              >
                {alojamiento.destacado && (
                  <div className="bg-emerald-600 text-white text-center py-1 text-sm font-semibold">
                    ⭐ {t("recomendado")}
                  </div>
                )}
                {!alojamiento.esLocal && (
                  <div className="bg-blue-600 text-white text-center py-1 text-sm font-semibold">
                    📍 {t("fueraDeLocalidad")}
                  </div>
                )}

                {/* Imagen con click para lightbox */}
                <div
                  className="relative overflow-hidden h-52 cursor-pointer"
                  onClick={() => openLightbox(slug, alojamiento.imagen)}
                >
                  <img
                    src={alojamiento.imagen}
                    alt={nombre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition" />
                  </div>
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-emerald-700">
                    {tipo}
                  </div>
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {alojamiento.precio}
                  </div>
                  {(imagenesExtra[slug]?.length ?? 0) > 1 && (
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                      📷 {imagenesExtra[slug].length} fotos
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-emerald-700 text-xl line-clamp-1">
                    {nombre}
                  </CardTitle>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-1 text-emerald-600" />
                    <span>{distancia}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="line-clamp-3">
                    {descripcion}
                  </CardDescription>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-emerald-600" />
                    <span>{capacidad}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-700">
                      {t("servicios")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {servicios.slice(0, 4).map((servicio, i) => {
                        const Icon = iconosServicios[servicio] || Star;
                        return (
                          <div
                            key={i}
                            className="flex items-center bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-xs"
                          >
                            <Icon className="w-3 h-3 mr-1" />
                            {servicio}
                          </div>
                        );
                      })}
                    </div>
                    {servicios.length > 4 && (
                      <p className="text-xs text-gray-500">
                        +{servicios.length - 4} {t("masServicios")}
                      </p>
                    )}
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-gray-500 mb-2">
                      {t("rangoPrecio")} {t(`precios.${alojamiento.precio}`)}{" "}
                      {t("porNoche")}
                    </p>
                    <Button
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      onClick={() =>
                        window.open(
                          `https://wa.me/${alojamiento.whatsapp || "5493624000000"}?text=Consulta%20sobre%20alojamiento:%20${nombre}`,
                          "_blank",
                        )
                      }
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {t("consultarBtn")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-700 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {t("tipsTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-700">
              {Array.from({ length: 4 }, (_, i) => (
                <p key={i}>✓ {t(`tips.${i}`)}</p>
              ))}
            </CardContent>
          </Card>
          <Card className="bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-700 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                {t("reservasTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-700">
              {Array.from({ length: 4 }, (_, i) => (
                <p key={i}>📅 {t(`reservas.${i}`)}</p>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center bg-emerald-50 rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-gray-700 mb-4">
            <strong>{t("ayudaTitle")}</strong>
            <br />
            {t("ayudaSubtitle")}
          </p>
          <Button
            onClick={() =>
              window.open(
                "https://wa.me/5493624000000?text=Necesito%20ayuda%20para%20encontrar%20alojamiento%20en%20La%20Escondida",
                "_blank",
              )
            }
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            <Phone className="w-4 h-4 mr-2" />
            {t("ayudaBtn")}
          </Button>
        </div>
      </div>

      {/* Lightbox */}
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
