"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Users,
  DollarSign,
  Navigation,
  Clock,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Planifica() {
  const handleComoLlegar = () => {
    // Coordenadas aproximadas de La Escondida, Chaco
    const lat = -27.1167;
    const lng = -59.3833;
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      "_blank"
    );
  };

  return (
    <section
      id="planifica"
      className="py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-emerald-700 mb-4">
          Planificá tu Visita
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Todo lo que necesitás saber para disfrutar al máximo tu estadía en La
          Escondida
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Cómo Llegar */}
          <Card className="text-center bg-white hover:shadow-xl transition group">
            <CardHeader>
              <div className="mx-auto mb-4 bg-emerald-100 rounded-full p-4 w-20 h-20 flex items-center justify-center group-hover:bg-emerald-600 transition">
                <MapPin className="w-10 h-10 text-emerald-600 group-hover:text-white transition" />
              </div>
              <CardTitle className="text-emerald-700 text-2xl">
                Cómo Llegar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-left space-y-3">
                <div className="flex items-start space-x-3">
                  <Navigation className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Desde Resistencia
                    </p>
                    <p className="text-gray-600 text-sm">
                      70 km por Ruta Provincial 11
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Tiempo estimado
                    </p>
                    <p className="text-gray-600 text-sm">1 hora en auto</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Acceso</p>
                    <p className="text-gray-600 text-sm">
                      Ruta asfaltada y señalizada
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleComoLlegar}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-4"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Ver en Google Maps
              </Button>

              <div className="text-xs text-gray-500 mt-2">
                📍 Departamento General Donovan, Chaco
              </div>
            </CardContent>
          </Card>

          {/* Alojamiento */}
          <Card className="text-center bg-white hover:shadow-xl transition group cursor-pointer">
            <a href="#alojamiento">
              <CardHeader>
                <div className="mx-auto mb-4 bg-blue-100 rounded-full p-4 w-20 h-20 flex items-center justify-center group-hover:bg-blue-600 transition">
                  <Users className="w-10 h-10 text-blue-600 group-hover:text-white transition" />
                </div>
                <CardTitle className="text-blue-700 text-2xl">
                  Alojamiento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Opciones de hospedaje para todos los gustos y presupuestos
                </p>

                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-600">Hosterías y posadas</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-600">Cabañas equipadas</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-600">Camping y glamping</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-600">
                      Hoteles en Resistencia
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("alojamiento")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Ver Opciones
                </Button>
              </CardContent>
            </a>
          </Card>

          {/* Gastronomía */}
          <Card className="text-center bg-white hover:shadow-xl transition group cursor-pointer">
            <a href="#gastronomia">
              <CardHeader>
                <div className="mx-auto mb-4 bg-amber-100 rounded-full p-4 w-20 h-20 flex items-center justify-center group-hover:bg-amber-600 transition">
                  <DollarSign className="w-10 h-10 text-amber-600 group-hover:text-white transition" />
                </div>
                <CardTitle className="text-amber-700 text-2xl">
                  Gastronomía
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Sabores auténticos del Chaco y el Litoral argentino
                </p>

                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-600">
                      Pescados de río frescos
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-600">Parrilla chaqueña</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-600">
                      Chipá y comidas típicas
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-600">Cocina regional</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-4"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("gastronomia")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Descubrir Sabores
                </Button>
              </CardContent>
            </a>
          </Card>
        </div>

        {/* Información adicional */}
        <div className="bg-emerald-50 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-emerald-700 mb-6 text-center">
            Información Útil para tu Viaje
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-emerald-700 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Mejor época para visitar
              </h4>
              <p className="text-gray-700 text-sm">
                <strong>Abril - Noviembre:</strong> Clima ideal (15-28°C) para
                actividades al aire libre
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Diciembre - Marzo:</strong> Verano caluroso (30-40°C),
                ideal para actividades acuáticas
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-emerald-700 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Servicios disponibles
              </h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Estaciones de servicio en la ruta</li>
                <li>• Cajeros automáticos en localidades cercanas</li>
                <li>• Cobertura de telefonía móvil</li>
                <li>• WiFi en alojamientos</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-emerald-700">
                🚗 Transporte público
              </h4>
              <p className="text-gray-700 text-sm">
                Líneas de colectivo desde Terminal de Resistencia. Consultar
                horarios actualizados.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-emerald-700">
                ✈️ Aeropuerto más cercano
              </h4>
              <p className="text-gray-700 text-sm">
                Aeropuerto Internacional de Resistencia (90 km). Vuelos directos
                desde Buenos Aires y Córdoba.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/5493624000000?text=Hola!%20Necesito%20información%20sobre%20La%20Escondida",
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
      </div>
    </section>
  );
}
