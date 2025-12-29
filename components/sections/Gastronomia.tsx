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
  Beef,
  Phone,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const restaurantes = [
  {
    nombre: "El Fogón de los Arrieros",
    tipo: "Parrilla Tradicional",
    descripcion:
      "Icónico centro cultural y restaurante de Resistencia. Parrilla argentina de primera calidad en un ambiente histórico desde 1943.",
    imagen:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop",
    especialidades: [
      "Asado de tira",
      "Vacío",
      "Bife de chorizo",
      "Parrillada completa",
    ],
    ubicacion: "Resistencia (70 km)",
    precio: "$$",
    destacado: true,
  },
  {
    nombre: "La Querencia",
    tipo: "Cocina Regional",
    descripcion:
      "Sabores auténticos del norte argentino. Platos típicos chaqueños en un ambiente cálido con decoración tradicional.",
    imagen:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
    especialidades: [
      "Locro norteño",
      "Empanadas criollas",
      "Humita",
      "Tamales",
    ],
    ubicacion: "Resistencia (70 km)",
    precio: "$$",
    destacado: true,
  },
  {
    nombre: "Restaurante del Puerto",
    tipo: "Pescados de Río",
    descripcion:
      "Especializado en pescados frescos del Paraná. Surubí, dorado y pacú preparados a la parrilla, plancha o al horno.",
    imagen:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&h=600&fit=crop",
    especialidades: [
      "Surubí a la parrilla",
      "Dorado al limón",
      "Pacú frito",
      "Milanesa de surubí",
    ],
    ubicacion: "Isla del Cerrito (90 km)",
    precio: "$$",
    destacado: true,
  },
  {
    nombre: "Le Béret Brasserie",
    tipo: "Contemporáneo",
    descripcion:
      "Propuesta moderna con menú de pasos que cambia cada 15 días. Fusión de cocina internacional y productos regionales.",
    imagen:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    especialidades: [
      "Menú de pasos",
      "Bondiola",
      "Fetuccini en salsa rosa",
      "Postres artesanales",
    ],
    ubicacion: "Resistencia - Av. Sarmiento 1994",
    precio: "$$$",
    destacado: false,
  },
  {
    nombre: "Carmela Restaurant - Howard Johnson",
    tipo: "Internacional/Regional",
    descripcion:
      "Cocina de nivel internacional con énfasis en productos regionales. Ambiente elegante con vista al río.",
    imagen:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    especialidades: [
      "Cocina internacional",
      "Platos regionales",
      "Carta de vinos",
      "Menú ejecutivo",
    ],
    ubicacion: "Hotel HJ - Resistencia",
    precio: "$$$",
    destacado: false,
  },
  {
    nombre: "Parrillas y Fondas Locales",
    tipo: "Comida Casera",
    descripcion:
      "Comedores familiares en La Escondida y alrededores. Comida casera chaqueña a precios accesibles.",
    imagen:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
    especialidades: ["Guisos", "Milanesas", "Empanadas", "Chipá casero"],
    ubicacion: "La Escondida",
    precio: "$",
    destacado: false,
  },
];

const platosTypicos = [
  {
    nombre: "Chipá",
    descripcion:
      "Panecillo de queso guaraní hecho con almidón de mandioca. Acompañamiento perfecto para el mate.",
    imagen:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
    categoria: "Tradicional",
  },
  {
    nombre: "Surubí",
    descripcion:
      "Pescado de río del Paraná, preparado a la parrilla o frito. Sabor suave y textura firme.",
    imagen:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop",
    categoria: "Pescado",
  },
  {
    nombre: "Locro Norteño",
    descripcion:
      "Guiso tradicional con maíz, porotos, carne y verduras. Versión chaqueña del clásico argentino.",
    imagen:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
    categoria: "Tradicional",
  },
  {
    nombre: "Dorado",
    descripcion:
      "El rey de los ríos. Pescado deportivo por excelencia, servido fresco del Paraná.",
    imagen:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    categoria: "Pescado",
  },
  {
    nombre: "Mbeyú",
    descripcion:
      "Tortilla de almidón de mandioca con queso. Especialidad guaraní del litoral argentino.",
    imagen:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
    categoria: "Tradicional",
  },
  {
    nombre: "Asado Chaqueño",
    descripcion:
      "Cortes de carne a la parrilla al estilo norteño. Acompañado con chipá y ensaladas.",
    imagen:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    categoria: "Parrilla",
  },
];

const precioMap: Record<string, string> = {
  $: "$3,000 - $6,000 por persona",
  $$: "$6,000 - $12,000 por persona",
  $$$: "$12,000 - $25,000 por persona",
};

export default function Gastronomia() {
  return (
    <section
      id="gastronomia"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">
            Sabores del Chaco
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre la auténtica gastronomía chaqueña: pescados de río, asados
            tradicionales y herencia guaraní en cada plato
          </p>
        </div>

        {/* Restaurantes destacados */}
        <h3 className="text-2xl font-bold text-emerald-700 mb-6">
          Dónde Comer
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {restaurantes.map((resto, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-xl transition group ${
                resto.destacado ? "ring-2 ring-amber-500" : ""
              }`}
            >
              {resto.destacado && (
                <div className="bg-amber-600 text-white text-center py-1 text-sm font-semibold">
                  ⭐ Recomendado
                </div>
              )}

              <div className="relative overflow-hidden h-52">
                <img
                  src={resto.imagen}
                  alt={resto.nombre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
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
                    Especialidades:
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
                  <p className="text-xs text-gray-500 mb-2">
                    Precio promedio: {precioMap[resto.precio]}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platos típicos */}
        <h3 className="text-2xl font-bold text-emerald-700 mb-6">
          Platos Típicos del Chaco
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

        {/* Información adicional */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-700 flex items-center">
                <Fish className="w-5 h-5 mr-2" />
                Pescados de Río del Paraná
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-emerald-700">🐟 Surubí</p>
                <p>
                  El más popular. Carne blanca, firme y sabrosa. Ideal a la
                  parrilla o milanesa.
                </p>
              </div>
              <div>
                <p className="font-semibold text-emerald-700">🐟 Dorado</p>
                <p>
                  Pescado deportivo por excelencia. Sabor intenso, mejor fresco
                  del día.
                </p>
              </div>
              <div>
                <p className="font-semibold text-emerald-700">🐟 Pacú</p>
                <p>
                  Muy sabroso frito o a la parrilla. Típico de la región,
                  imperdible.
                </p>
              </div>
              <div>
                <p className="font-semibold text-emerald-700">🐟 Boga</p>
                <p>
                  Pescado pequeño, excelente para frito. Económico y delicioso.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-700 flex items-center">
                <Coffee className="w-5 h-5 mr-2" />
                Sabores Tradicionales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-amber-700">🧀 Chipá</p>
                <p>
                  Panecillo de queso y almidón de mandioca. Se come caliente o
                  frío con mate.
                </p>
              </div>
              <div>
                <p className="font-semibold text-amber-700">🍯 Miel de Caña</p>
                <p>Dulce regional usado en postres y cervezas artesanales.</p>
              </div>
              <div>
                <p className="font-semibold text-amber-700">🧉 Tereré</p>
                <p>Mate frío con hierbas. Bebida social del verano chaqueño.</p>
              </div>
              <div>
                <p className="font-semibold text-amber-700">🍖 Asado Norteño</p>
                <p>Cortes a la parrilla con influencia guaraní y criolla.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Guía gastronómica */}
        <div className="mt-12 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-emerald-700 mb-6 text-center flex items-center justify-center">
            <Star className="w-6 h-6 mr-2" />
            Guía Gastronómica del Chaco
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-emerald-700">
                🍽️ Dónde encontrar cada especialidad
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <strong>Pescados frescos:</strong> Isla del Cerrito, Puerto
                  Vilelas
                </li>
                <li>
                  <strong>Parrillas tradicionales:</strong> Resistencia centro
                </li>
                <li>
                  <strong>Comida casera:</strong> La Escondida, La Verde
                </li>
                <li>
                  <strong>Chipá artesanal:</strong> Ferias y panaderías locales
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-amber-700">
                💰 Rango de precios
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <strong>Económico ($):</strong> Fondas y comedores
                  $3,000-6,000
                </li>
                <li>
                  <strong>Moderado ($$):</strong> Restaurantes $6,000-12,000
                </li>
                <li>
                  <strong>Premium ($$$):</strong> Alta cocina $12,000-25,000
                </li>
                <li>
                  <strong>Tip:</strong> El almuerzo suele ser más económico que
                  la cena
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-700 mb-4">
              <strong>¿Buscás recomendaciones personalizadas?</strong>
              <br />
              Te sugerimos los mejores lugares según tu presupuesto y
              preferencias
            </p>
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/5493624000000?text=Quiero%20recomendaciones%20gastronómicas%20en%20La%20Escondida",
                  "_blank"
                )
              }
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Consultanos por WhatsApp
            </Button>
          </div>
        </div>

        {/* Horarios típicos */}
        <div className="mt-8 text-center text-sm text-gray-600 bg-white rounded-lg p-4 max-w-2xl mx-auto">
          <p className="font-semibold mb-2">⏰ Horarios típicos en el Chaco</p>
          <p>
            <strong>Almuerzo:</strong> 12:00 - 15:00 • <strong>Cena:</strong>{" "}
            20:00 - 24:00
          </p>
          <p className="text-xs mt-2">
            Los domingos al mediodía muchos restaurantes ofrecen menús
            especiales
          </p>
        </div>
      </div>
    </section>
  );
}
