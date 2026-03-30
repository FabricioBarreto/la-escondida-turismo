"use client";
import Hero from "@/components/sections/Hero";
import Imperdibles from "@/components/sections/Imperdibles";
import Planifica from "@/components/sections/Planifica";
import Alojamiento from "@/components/sections/Alojamiento";
import Gastronomia from "@/components/sections/Gastronomia";
import Eventos from "@/components/sections/Eventos";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Imperdibles />
        <Planifica />
        <Alojamiento />
        <Gastronomia />
        <Eventos />
        <WhatsAppButton />
      </main>
      <Footer />
    </>
  );
}
