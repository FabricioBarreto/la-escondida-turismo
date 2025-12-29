import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La Escondida Turismo | Chaco, Argentina",
  description:
    "Descubre el paraíso natural del Chaco argentino. Río Paraná, pesca deportiva, naturaleza y más.",
  keywords:
    "turismo chaco, la escondida, río paraná, pesca deportiva, argentina",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <nav className="bg-emerald-700 text-white sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">La Escondida</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#inicio" className="hover:text-emerald-200">
                Inicio
              </a>
              <a href="#imperdibles" className="hover:text-emerald-200">
                Qué Hacer
              </a>
              <a href="#planifica" className="hover:text-emerald-200">
                Planificá
              </a>
              <a href="#eventos" className="hover:text-emerald-200">
                Eventos
              </a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-emerald-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 La Escondida Turismo. Chaco, Argentina.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
