// app/layout.tsx
'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { useState } from 'react';
import { Menu, X, MapPin, Facebook, Instagram, Mail, Phone } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#imperdibles', label: 'Qué Hacer' },
    { href: '#planifica', label: 'Planificá' },
    { href: '#alojamiento', label: 'Alojamiento' },
    { href: '#gastronomia', label: 'Gastronomía' },
    { href: '#eventos', label: 'Eventos' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <html lang="es">
      <head>
        <title>La Escondida Turismo | Chaco, Argentina</title>
        <meta name="description" content="Descubre el paraíso natural del Chaco argentino. Río Paraná, pesca deportiva, naturaleza y más en La Escondida." />
        <meta name="keywords" content="turismo chaco, la escondida, río paraná, pesca deportiva, argentina, resistencia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {/* Header */}
        <nav className="bg-emerald-700 text-white sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-8 h-8" />
                <div>
                  <h1 className="text-2xl font-bold">La Escondida</h1>
                  <p className="text-xs text-emerald-100">Turismo • Chaco, Argentina</p>
                </div>
              </div>

              {/* Mobile menu button */}
              <button 
                className="md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Desktop menu */}
              <div className="hidden md:flex space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-emerald-200 transition cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
              <div className="md:hidden pb-4 space-y-2 animate-fadeIn">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block hover:text-emerald-200 transition py-2 cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="bg-emerald-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  La Escondida Turismo
                </h3>
                <p className="text-emerald-100 mb-4">
                  Descubre el paraíso natural del Chaco argentino. Fundada en 1927, patrimonio de industria y cultura.
                </p>
                <p className="text-emerald-100 text-sm">
                  Departamento General Donovan<br/>
                  Provincia del Chaco, Argentina
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Contacto</h3>
                <div className="space-y-3 text-emerald-100">
                  <a 
                    href="https://wa.me/5493624000000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-white transition"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +54 9 362 4000000
                  </a>
                  <a 
                    href="mailto:turismo@laescondida.gob.ar"
                    className="flex items-center hover:text-white transition"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    turismo@laescondida.gob.ar
                  </a>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>La Escondida, Chaco</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Seguinos</h3>
                <div className="flex space-x-4 mb-6">
                  <a 
                    href="#" 
                    className="bg-emerald-700 p-3 rounded-full hover:bg-emerald-600 transition"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-emerald-700 p-3 rounded-full hover:bg-emerald-600 transition"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
                
                <div className="space-y-2 text-emerald-100 text-sm">
                  <p className="font-semibold">Enlaces rápidos:</p>
                  <div className="space-y-1">
                    <a href="#imperdibles" className="block hover:text-white transition">• Qué Hacer</a>
                    <a href="#alojamiento" className="block hover:text-white transition">• Alojamiento</a>
                    <a href="#gastronomia" className="block hover:text-white transition">• Gastronomía</a>
                    <a href="#eventos" className="block hover:text-white transition">• Eventos</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-100">
              <p className="mb-2">
                &copy; {new Date().getFullYear()} La Escondida Turismo. Todos los derechos reservados.
              </p>
              <p className="text-sm">
                Sitio web oficial de turismo • Chaco, Argentina 🇦🇷
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}