"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const noticias = [
  {
    titulo:
      "Parque Nacional El Impenetrable cumple 10 años como pilar del turismo sostenible",
    fecha: "22 de Octubre, 2024",
    imagen:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=300&fit=crop",
    extracto:
      "El parque creado en 2014 protege 128,000 hectáreas del Chaco Seco y se consolida como referente del turismo de naturaleza. Más de 9,000 visitantes anuales dinamizan economías locales.",
    categoria: "Naturaleza",
    fuente: "chaco.gov.ar",
  },
  {
    titulo: "XXI Torneo de Pesca del Dorado espera récord de 450 embarcaciones",
    fecha: "1 de Agosto, 2025",
    imagen:
      "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=400&h=300&fit=crop",
    extracto:
      "Isla del Cerrito se prepara para el torneo internacional más importante del Chaco, del 5 al 7 de septiembre. Incluye actividades culturales, gastronómicas y torneo infantil de costa.",
    categoria: "Deportes",
    fuente: "diariolavozdelchaco.com",
  },
  {
    titulo: "City Tour Resistencia amplía recorrido e incorpora Museo Qom",
    fecha: "29 de Mayo, 2025",
    imagen:
      "https://images.unsplash.com/photo-1576020799627-aeac74d58064?w=400&h=300&fit=crop",
    extracto:
      "El circuito turístico gratuito por la Ciudad de las Esculturas suma nuevos puntos. Resistencia cuenta con más de 650 obras al aire libre y es Capital Nacional de las Esculturas.",
    categoria: "Cultura",
    fuente: "guiaturista.com.ar",
  },
  {
    titulo: "Bienal del Chaco 2024 atrajo más de 650,000 visitantes",
    fecha: "16 de Julio, 2024",
    imagen:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=400&h=300&fit=crop",
    extracto:
      "La XII Bienal Internacional de Esculturas consolidó a Resistencia en circuitos artísticos mundiales. Artistas de 10 países crearon obras que ahora embellecen la ciudad.",
    categoria: "Arte",
    fuente: "bienaldelchaco.org",
  },
  {
    titulo: "Asociación de Guías de Pesca potencia turismo en Isla del Cerrito",
    fecha: "27 de Julio, 2021",
    imagen:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    extracto:
      "Nueva asociación ofrece paquetes completos: alojamiento, gastronomía local y excursiones de pesca en la confluencia de los ríos Paraná y Paraguay.",
    categoria: "Turismo",
    fuente: "diario22.ar",
  },
  {
    titulo: "Chaco pionero en pesca deportiva con devolución",
    fecha: "16 de Julio, 2020",
    imagen:
      "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?w=400&h=300&fit=crop",
    extracto:
      "La provincia lidera prácticas de conservación. Mesa de Monitoreo de Pesca trabaja en protección de surubí, dorado, pacú y manguruyú con enfoque sostenible.",
    categoria: "Conservación",
    fuente: "tn24.com.ar",
  },
];

const categoriaColores: Record<string, string> = {
  Naturaleza: "bg-green-100 text-green-700",
  Deportes: "bg-blue-100 text-blue-700",
  Cultura: "bg-purple-100 text-purple-700",
  Arte: "bg-pink-100 text-pink-700",
  Turismo: "bg-amber-100 text-amber-700",
  Conservación: "bg-teal-100 text-teal-700",
};

export default function Noticias() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">
            Novedades del Chaco
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mantente informado sobre turismo, cultura y naturaleza en La
            Escondida y la provincia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    categoriaColores[noticia.categoria]
                  }`}
                >
                  {noticia.categoria}
                </div>
              </div>

              <CardHeader>
                <div className="text-sm text-emerald-600 font-semibold mb-2">
                  {noticia.fecha}
                </div>
                <CardTitle className="text-lg line-clamp-2 group-hover:text-emerald-700 transition">
                  {noticia.titulo}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">
                  {noticia.extracto}
                </CardDescription>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Fuente: {noticia.fuente}
                  </span>
                  <ExternalLink className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-emerald-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-emerald-700 mb-6 text-center">
            🌟 Reconocimientos Internacionales del Chaco
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold text-emerald-700 mb-2">
                🏆 Bienal de Esculturas
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Declarada Marca País Argentina</li>
                <li>✓ Interés cultural por la OEA</li>
                <li>✓ Premio Konex Artes Visuales</li>
                <li>✓ Capital MERCOSUR de Esculturas</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold text-emerald-700 mb-2">
                🌳 Parque El Impenetrable
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Turismo sostenible certificado</li>
                <li>✓ Conservación de biodiversidad única</li>
                <li>✓ Protección del yaguareté</li>
                <li>✓ Desarrollo comunitario local</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold text-emerald-700 mb-2">
                🎣 Pesca Deportiva
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Dorado declarado Pez de Interés Nacional</li>
                <li>✓ Pioneros en pesca con devolución</li>
                <li>✓ 3er torneo más convocante de Argentina</li>
                <li>✓ Gestión sostenible de recursos ictícolas</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold text-emerald-700 mb-2">
                🎨 Patrimonio Cultural
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ + 650 esculturas urbanas</li>
                <li>✓ Museo a cielo abierto único en América</li>
                <li>✓ El Fogón de los Arrieros (80 años)</li>
                <li>✓ Cultura QOM preservada</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            ¿Querés recibir novedades turísticas del Chaco?
          </p>
          <a
            href="https://wa.me/5493624000000?text=Quiero%20recibir%20novedades%20turísticas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition font-semibold"
          >
            📱 Suscribite por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
