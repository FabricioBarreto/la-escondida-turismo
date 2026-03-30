"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition z-10"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Contador */}
      {images.length > 1 && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Flecha anterior */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Imagen */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full mx-16"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`Foto ${currentIndex + 1}`}
          className="w-full h-full max-h-[85vh] object-contain rounded-lg"
        />
      </div>

      {/* Flecha siguiente */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Miniaturas */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition ${
                i === currentIndex
                  ? "border-white"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
