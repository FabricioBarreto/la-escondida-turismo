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
  Wifi,
  Coffee,
  Wind,
  Waves,
  Users,
  Star,
  Phone,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const alojamientos = [
  {
    nombre: "Hosterías en La Escondida",
    tipo: "Hostería",
    descripcion:
      "Alojamiento familiar con atención personalizada en el corazón de La Escondida. Ideal para conocer la historia local y la industria del tanino.",
    imagen:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    servicios: ["WiFi", "Desayuno", "Estacionamiento", "Aire acondicionado"],
    capacidad: "2-4 personas por habitación",
    precio: "$$",
    distancia: "En La Escondida",
    destacado: false,
  },
  {
    nombre: "Cabañas del Río",
    tipo: "Cabaña",
    descripcion:
      "Cabañas totalmente equipadas con vista al río Paraná. Cocina completa, parrilla y amplios espacios verdes. Perfecto para familias.",
    imagen:
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&h=600&fit=crop",
    servicios: [
      "Cocina equipada",
      "Parrilla",
      "WiFi",
      "Pileta",
      "Aire acondicionado",
    ],
    capacidad: "4-6 personas",
    precio: "$$",
    distancia: "La Escondida / La Verde (7 km)",
    destacado: true,
  },
  {
    nombre: "Camping Municipal",
    tipo: "Camping",
    descripcion:
      "Área de camping con servicios básicos. Acceso a sanitarios, luz eléctrica y zona de fogones. Ambiente tranquilo rodeado de naturaleza.",
    imagen:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop",
    servicios: ["Sanitarios", "Luz eléctrica", "Fogones", "Seguridad"],
    capacidad: "Carpas y motorhomes",
    precio: "$",
    distancia: "En La Escondida",
    destacado: false,
  },
  {
    nombre: "Howard Johnson Plaza La Ribera",
    tipo: "Hotel 4★",
    descripcion:
      "Hotel premium en Resistencia con spa, 2 restaurantes y vista al río. Cocina regional e internacional. Base ideal para explorar la región.",
    imagen:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
    servicios: ["Spa", "Restaurante", "Piscina", "Room Service", "Cochera"],
    capacidad: "Habitaciones y suites",
    precio: "$$$",
    distancia: "Resistencia (70 km)",
    destacado: true,
  },
  {
    nombre: "Apart Hotel Don Daniel",
    tipo: "Apart Hotel",
    descripcion:
      "Apartamentos con cocina en Resistencia. Ubicación céntrica cerca de esculturas y museos. Ideal para estadías prolongadas.",
    imagen:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    servicios: ["Cocina", "WiFi", "Aire acondicionado", "TV Cable"],
    capacidad: "2-4 personas",
    precio: "$$",
    distancia: "Resistencia Centro (70 km)",
    destacado: false,
  },
  {
    nombre: "Glamping Parque Nacional El Impenetrable",
    tipo: "Glamping",
    descripcion:
      "Experiencia única de camping de lujo en plena naturaleza. Carpas confortables con baño privado. Excursiones y safari incluidos.",
    imagen:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop",
    servicios: [
      "Baño privado",
      "Camas confortables",
      "Excursiones guiadas",
      "Gastronomía",
    ],
    capacidad: "2-3 personas por carpa",
    precio: "$$$",
    distancia: "Parque El Impenetrable (400 km)",
    destacado: true,
  },
];

const iconosServicios: Record<string, LucideIcon> = {
  WiFi: Wifi,
  Pileta: Waves,
  "Aire acondicionado": Wind,
  Desayuno: Coffee,
  Cocina: Coffee,
  "Room Service": Coffee,
};

const precioMap: Record<string, string> = {
  $: "$2,000 - $5,000 por noche",
  $$: "$5,000 - $15,000 por noche",
  $$$: "$15,000 - $35,000 por noche",
};

export default function Alojamiento() {
  return (
    <section id="alojamiento" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">
            Dónde Alojarte
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Desde cabañas junto al río hasta hoteles premium en Resistencia.
            Encontrá el alojamiento perfecto para tu estadía en el Chaco.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alojamientos.map((alojamiento, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-xl transition group ${
                alojamiento.destacado ? "ring-2 ring-emerald-500" : ""
              }`}
            >
              {alojamiento.destacado && (
                <div className="bg-emerald-600 text-white text-center py-1 text-sm font-semibold">
                  ⭐ Recomendado
                </div>
              )}

              <div className="relative overflow-hidden h-52">
                <img
                  src={alojamiento.imagen}
                  alt={alojamiento.nombre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-emerald-700">
                  {alojamiento.tipo}
                </div>
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  {alojamiento.precio}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-emerald-700 text-xl line-clamp-1">
                  {alojamiento.nombre}
                </CardTitle>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-1 text-emerald-600" />
                  <span>{alojamiento.distancia}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="line-clamp-3">
                  {alojamiento.descripcion}
                </CardDescription>

                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2 text-emerald-600" />
                  <span>{alojamiento.capacidad}</span>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-700">
                    Servicios:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {alojamiento.servicios.slice(0, 4).map((servicio, i) => {
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
                  {alojamiento.servicios.length > 4 && (
                    <p className="text-xs text-gray-500">
                      +{alojamiento.servicios.length - 4} servicios más
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t">
                  <p className="text-xs text-gray-500 mb-2">
                    Rango de precios: {precioMap[alojamiento.precio]}
                  </p>
                  <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                    onClick={() =>
                      window.open(
                        "https://wa.me/5493624000000?text=Consulta%20sobre%20alojamiento:%20" +
                          alojamiento.nombre,
                        "_blank"
                      )
                    }
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Consultar Disponibilidad
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-700 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Tips para elegir alojamiento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-700">
              <p>
                ✓ <strong>En La Escondida:</strong> Ideal para vivir la
                experiencia local y acceso rápido a sitios históricos
              </p>
              <p>
                ✓ <strong>Resistencia:</strong> Más opciones, restaurantes y
                servicios. Base para explorar la región
              </p>
              <p>
                ✓ <strong>Camping:</strong> Para los amantes de la naturaleza y
                presupuestos ajustados
              </p>
              <p>
                ✓ <strong>Cabañas:</strong> Perfectas para familias que buscan
                privacidad y cocinar
              </p>
            </CardContent>
          </Card>

          <Card className="bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-700 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Recomendaciones de reserva
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-700">
              <p>
                📅 <strong>Temporada alta:</strong> Reservar con 2-3 semanas de
                anticipación (sep-nov)
              </p>
              <p>
                🎣 <strong>Torneo de Pesca:</strong> Reservar con 2 meses de
                anticipación (5-7 sep)
              </p>
              <p>
                🎨 <strong>Bienal de Esculturas:</strong> Hoteles en Resistencia
                se llenan rápido (julio)
              </p>
              <p>
                💰 <strong>Mejor precio:</strong> Temporada baja (dic-mar) pero
                considerar el calor
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center bg-emerald-50 rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-gray-700 mb-4">
            <strong>¿Necesitás ayuda para encontrar alojamiento?</strong>
            <br />
            Contactanos y te asesoramos según tus preferencias y presupuesto
          </p>
          <Button
            onClick={() =>
              window.open(
                "https://wa.me/5493624000000?text=Necesito%20ayuda%20para%20encontrar%20alojamiento%20en%20La%20Escondida",
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
    </section>
  );
}
