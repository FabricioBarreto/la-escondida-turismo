// components/sections/Eventos.tsx
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar as CalendarIcon } from "lucide-react";

const eventos = [
  {
    fecha: "5-7 Sep",
    año: "2025",
    titulo: "XXI Torneo Internacional de Pesca del Dorado",
    lugar: "Isla del Cerrito",
    descripcion:
      "Pesca con devolución. Récord esperado: 400-450 embarcaciones. Incluye actividades culturales, gastronómicas y torneo infantil.",
    tipo: "Deportivo",
    imagen:
      "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=400&h=300&fit=crop",
  },
  {
    fecha: "26 Oct",
    año: "2025",
    titulo: "Cabalgata de Bendiciones a San Carlos Borromeo",
    lugar: "La Escondida",
    descripcion:
      "Tradición chaqueña. Jinetes desde El Cacique Llorón (Km 548) hasta todos los barrios. Festival folclórico incluido.",
    tipo: "Cultural",
    imagen:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&h=300&fit=crop",
  },
  {
    fecha: "4 Nov",
    año: "2025",
    titulo: "Fiesta Patronal de San Carlos Borromeo",
    lugar: "La Escondida",
    descripcion:
      "Aniversario de la fundación de La Escondida (1927). Celebración religiosa, feria artesanal y actividades tradicionales.",
    tipo: "Religioso",
    imagen:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  },
  {
    fecha: "Julio",
    año: "2026",
    titulo: "XIII Bienal Internacional de Esculturas",
    lugar: "Resistencia",
    descripcion:
      "Artistas de todo el mundo crean obras a cielo abierto. Más de 650,000 visitantes esperados. Declarada de interés cultural por la OEA.",
    tipo: "Arte",
    imagen:
      "https://images.unsplash.com/photo-1576020799627-aeac74d58064?w=400&h=300&fit=crop",
  },
  {
    fecha: "Mar-Nov",
    año: "2025",
    titulo: "Temporada Alta de Avistaje de Aves",
    lugar: "Parques Nacionales Chaco e Impenetrable",
    descripcion:
      "Mejor época para observar más de 350 especies. Safaris fotográficos y excursiones guiadas disponibles.",
    tipo: "Naturaleza",
    imagen:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&h=300&fit=crop",
  },
  {
    fecha: "Todo el año",
    año: "2025",
    titulo: "City Tour Resistencia - Ciudad de las Esculturas",
    lugar: "Resistencia",
    descripcion:
      "Circuito gratuito ampliado. Incluye Museo Qom Chelaalapí, El Fogón de los Arrieros y recorrido por + 650 esculturas urbanas.",
    tipo: "Cultural",
    imagen:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
  },
];

const tipoColores: Record<string, string> = {
  Deportivo: "bg-blue-100 text-blue-700",
  Cultural: "bg-purple-100 text-purple-700",
  Religioso: "bg-amber-100 text-amber-700",
  Arte: "bg-pink-100 text-pink-700",
  Naturaleza: "bg-green-100 text-green-700",
};

export default function Eventos() {
  return (
    <section id="eventos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">
            Eventos y Festivales
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vive la tradición chaqueña, el arte internacional y la naturaleza en
            estado puro a lo largo del año
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventos.map((evento, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={evento.imagen}
                  alt={evento.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
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
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    tipoColores[evento.tipo]
                  }`}
                >
                  {evento.tipo}
                </div>
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
            📅 Calendario Turístico Chaco 2025
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-emerald-700 mb-2">
                🌸 Primavera (Sep-Nov)
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Torneo de Pesca del Dorado (Sep)</li>
                <li>• Cabalgata de San Carlos (Oct)</li>
                <li>• Fiesta Patronal La Escondida (4 Nov)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-700 mb-2">
                ❄️ Invierno (Jun-Ago)
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Bienal de Esculturas (Jul - cada 2 años)</li>
                <li>• Mejor época para El Impenetrable</li>
                <li>• Temporada ideal de avistaje</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-700 mb-2">
                🍂 Otoño (Mar-May)
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Inicio temporada de aves</li>
                <li>• Clima ideal para parques nacionales</li>
                <li>• Pesca deportiva en su mejor momento</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-emerald-700 mb-2">
                ☀️ Verano (Dic-Feb)
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Playas y balnearios del Paraná</li>
                <li>• Festivales de verano</li>
                <li>• ⚠️ Temporada de lluvias y calor</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            💡 <strong>Tip:</strong> Para El Impenetrable y Parque Nacional
            Chaco, consultar estado de caminos en época de lluvias (Dic-Mar)
          </p>
        </div>
      </div>
    </section>
  );
}
