import Hero from "@/components/sections/Hero";
import Imperdibles from "@/components/sections/Imperdibles";
import Planifica from "@/components/sections/Planifica";
import Eventos from "@/components/sections/Eventos";
import Noticias from "@/components/sections/Noticias";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Imperdibles />
      <Planifica />
      <Eventos />
      <Noticias />
      <WhatsAppButton />
    </main>
  );
}
