"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, MapPin, Star } from "lucide-react";

const imperdibles = [
  {
    titulo: "Resistencia - Ciudad de las Esculturas",
    descripcion:
      "Capital Nacional de las Esculturas con más de 650 obras al aire libre. Museo a cielo abierto reconocido mundialmente.",
    imagen:
      "https://images.unsplash.com/photo-1576020799627-aeac74d58064?w=800&h=600&fit=crop",
    duracion: "Medio día - Día completo",
    distancia: "70 km",
    highlights: [
      "Bienal Internacional",
      "El Fogón de los Arrieros",
      "+ 650 esculturas",
    ],
  },
  {
    titulo: "Isla del Cerrito - Pesca Deportiva",
    descripcion:
      "Uno de los mejores pesqueros de Argentina. Captura dorados, surubíes y pacúes en los ríos Paraná y Paraguay.",
    imagen:
      "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&h=600&fit=crop",
    duracion: "Día completo",
    distancia: "90 km",
    highlights: [
      "Torneo Internacional del Dorado",
      "Gastronomía del río",
      "Paseos náuticos",
    ],
  },
  {
    titulo: "Parque Nacional Chaco",
    descripcion:
      "Bosques, lagunas y 350 especies de aves. Senderos, miradores y avistaje de fauna autóctona del Chaco húmedo.",
    imagen:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    duracion: "Medio día",
    distancia: "130 km",
    highlights: ["350 especies de aves", "Laguna Yacaré", "Camping"],
  },
  {
    titulo: "Parque Nacional El Impenetrable",
    descripcion:
      "128,000 hectáreas del mítico Chaco Seco. Yaguaretés, tapires y más de 300 especies de aves en estado salvaje.",
    imagen:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&h=600&fit=crop",
    duracion: "2-3 días",
    distancia: "400 km",
    highlights: ["Río Bermejo", "Safari fotográfico", "Glamping"],
  },
  {
    titulo: "Patrimonio Industrial - Fábrica de Tanino",
    descripcion:
      "Historia viva de La Escondida. Fundada en 1927 junto a Indunor S.A., una de las dos fábricas de tanino del Chaco.",
    imagen:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    duracion: "2-3 horas",
    distancia: "En La Escondida",
    highlights: [
      "Historia desde 1927",
      "Arquitectura industrial",
      "Tradición tanino",
    ],
  },
  {
    titulo: "Cabalgata de San Carlos Borromeo",
    descripcion:
      "Tradición chaqueña cada último domingo de octubre. Jinetes desde El Cacique Llorón con festival folclórico.",
    imagen:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&h=600&fit=crop",
    duracion: "Día completo",
    distancia: "En La Escondida",
    highlights: [
      "Tradición desde 1927",
      "Festival folclórico",
      "Fiesta patronal 4 Nov",
    ],
  },
];

export default function Imperdibles() {
  return (
    <section id="imperdibles" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-emerald-700 mb-4">
          Imperdibles de La Escondida y el Chaco
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Descubre naturaleza salvaje, patrimonio cultural y tradiciones
          auténticas en el corazón del Chaco argentino
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imperdibles.map((item, index) => (
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
          <p className="text-gray-600 mb-4">
            <strong>Mejor época para visitar:</strong> Abril - Noviembre (clima
            agradable 15-28°C)
          </p>
          <div className="inline-flex items-center bg-emerald-50 px-6 py-3 rounded-lg">
            <span className="text-emerald-700 font-semibold">
              🦜 Fauna destacada: Yaguareté, Tapir, Chuña de patas negras,
              Dorado, Surubí
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
