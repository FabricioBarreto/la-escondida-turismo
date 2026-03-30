export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-8 mt-0">
      <div className="container mx-auto px-4 text-center space-y-2">
        <p className="text-emerald-200 text-sm">
          © {new Date().getFullYear()} Municipalidad de La Escondida, Chaco,
          Argentina
        </p>
        <p className="text-emerald-400 text-xs">
          Desarrollado por{" "}
          <a
            href="mailto:fabriciobarreto2610@gmail.com"
            className="underline hover:text-white transition"
          >
            Fabricio Barreto
          </a>
        </p>
      </div>
    </footer>
  );
}
