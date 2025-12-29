"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5493624000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
      >
        <Phone className="w-6 h-6" />
      </Button>
    </a>
  );
}
