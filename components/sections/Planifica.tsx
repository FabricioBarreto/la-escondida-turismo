import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, DollarSign } from "lucide-react";

export default function Planifica() {
  return (
    <section id="planifica" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-emerald-700 mb-12">
          Planificá tu Visita
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center bg-emerald-50">
            <CardHeader>
              <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <CardTitle className="text-emerald-700">Cómo Llegar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                A 45 km de Resistencia por Ruta Provincial 11. Acceso asfaltado.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-emerald-50">
            <CardHeader>
              <Users className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <CardTitle className="text-emerald-700">Alojamiento</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Cabañas, camping y posadas con todas las comodidades.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-emerald-50">
            <CardHeader>
              <DollarSign className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <CardTitle className="text-emerald-700">Gastronomía</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Sabores regionales, pescados de río y platos típicos del Chaco.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
