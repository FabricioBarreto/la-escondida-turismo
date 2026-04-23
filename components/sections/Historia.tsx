"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { Flower, Factory, Building } from "lucide-react";

export default function Historia() {
  const t = useTranslations("historia");

  const cards = [
    {
      icon: Flower,
      title: t("cards.ciudadJardin.title"),
      description: t("cards.ciudadJardin.description"),
    },
    {
      icon: Factory,
      title: t("cards.fabricaTanino.title"),
      description: t("cards.fabricaTanino.description"),
    },
    {
      icon: Building,
      title: t("cards.organizacionPueblo.title"),
      description: t("cards.organizacionPueblo.description"),
    },
  ];

  return (
    <section id="historia" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-emerald-700 mb-4">
          {t("title")}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition bg-white border-emerald-100"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <card.icon className="w-6 h-6 text-emerald-700" />
                  </div>
                  <CardTitle className="text-emerald-700 text-xl">
                    {card.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}