"use client";

import { useTranslations } from "next-intl";
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
  const t = useTranslations("planifica");

  const handleComoLlegar = () => {
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
          {t("title")}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Cómo Llegar */}
          <Card className="text-center bg-white hover:shadow-xl transition group">
            <CardHeader>
              <div className="mx-auto mb-4 bg-emerald-100 rounded-full p-4 w-20 h-20 flex items-center justify-center group-hover:bg-emerald-600 transition">
                <MapPin className="w-10 h-10 text-emerald-600 group-hover:text-white transition" />
              </div>
              <CardTitle className="text-emerald-700 text-2xl">
                {t("comoLlegar.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-left space-y-3">
                <div className="flex items-start space-x-3">
                  <Navigation className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {t("comoLlegar.fromResistencia")}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {t("comoLlegar.distance")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {t("comoLlegar.time")}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {t("comoLlegar.duration")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {t("comoLlegar.access")}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {t("comoLlegar.accessType")}
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleComoLlegar}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-4"
              >
                <Navigation className="w-4 h-4 mr-2" />
                {t("comoLlegar.button")}
              </Button>

              <div className="text-xs text-gray-500 mt-2">
                📍 {t("comoLlegar.location")}
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
                  {t("alojamiento.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{t("alojamiento.description")}</p>

                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-600">
                      {t("alojamiento.options.hosterias")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-600">
                      {t("alojamiento.options.cabanas")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-600">
                      {t("alojamiento.options.camping")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-600">
                      {t("alojamiento.options.hoteles")}
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
                  {t("alojamiento.button")}
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
                  {t("gastronomia.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{t("gastronomia.description")}</p>

                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-600">
                      {t("gastronomia.options.pescados")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-600">
                      {t("gastronomia.options.parrilla")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-600">
                      {t("gastronomia.options.chipa")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-600">
                      {t("gastronomia.options.regional")}
                    </span>
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
                  {t("gastronomia.button")}
                </Button>
              </CardContent>
            </a>
          </Card>
        </div>

        {/* Botón WhatsApp */}
        <div className="mt-8 text-center">
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
            {t("infoUtil.whatsappButton")}
          </Button>
        </div>
      </div>
    </section>
  );
}
