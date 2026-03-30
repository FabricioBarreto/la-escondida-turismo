// lib/data.ts

export type LocaleText = {
  es: string;
  en: string;
};

export type AmenityIcon =
  | "Wifi"
  | "Wind"
  | "Coffee"
  | "Waves"
  | "Users"
  | "Star"
  | "Phone"
  | "MapPin"
  | "Tv"
  | "Car"
  | "UtensilsCrossed"
  | "Bed"
  | "ShowerHead";

export type TipoEstablecimiento =
  | "Hotel"
  | "Hostería"
  | "Cabaña"
  | "Camping"
  | "Restaurante"
  | "Comedor";

export type Establecimiento = {
  id: string;
  slug: string;
  tipo: TipoEstablecimiento;
  destacado: boolean;
  nombre: LocaleText;
  descripcionCorta: LocaleText;
  descripcionLarga: LocaleText;
  amenities: {
    icono: AmenityIcon;
    label: LocaleText;
  }[];
  fotos: {
    src: string;
    alt: LocaleText;
  }[];
  contacto: {
    telefono: string;
    whatsapp: string;
    ubicacion: string;
    coordenadas: {
      lat: number;
      lng: number;
    };
    mapsUrl: string;
  };
  precio: "$" | "$$" | "$$$";
  capacidad: LocaleText;
};

export const CONTACT_INFO = {
  whatsapp: "5493624000000", // CAMBIAR POR EL NÚMERO REAL DEL SITIO
  email: "turismo@laescondida.gob.ar",
  phone: "+54 362 4000000",
  address: "La Escondida, Departamento General Donovan, Chaco, Argentina",
  coordinates: { lat: -27.1167, lng: -59.3833 },
};

export const HERO_SLIDES = [
  {
    imagen: "/images/hero/hero-1.jpg",
    titulo: {
      es: "Bienvenidos a La Escondida",
      en: "Welcome to La Escondida",
    },
    subtitulo: {
      es: "Ciudad Jardín del Chaco: naturaleza, calma y escapadas para descansar.",
      en: "Garden City of Chaco: nature, calm, and relaxing getaways.",
    },
  },
  {
    imagen: "/images/hero/hero-2.jpg",
    titulo: {
      es: "Naturaleza y descanso",
      en: "Nature and rest",
    },
    subtitulo: {
      es: "Un destino local para bajar un cambio y disfrutar del entorno chaqueño.",
      en: "A local destination to slow down and enjoy the Chaco landscape.",
    },
  },
  {
    imagen: "/images/hero/hero-3.jpg",
    titulo: {
      es: "Escapadas con identidad",
      en: "Getaways with identity",
    },
    subtitulo: {
      es: "Alojamiento, gastronomía y experiencias simples en un pueblo con alma propia.",
      en: "Accommodation, local food, and simple experiences in a town with its own soul.",
    },
  },
];

export const IMPERDIBLES = [
  {
    titulo: {
      es: "Patrimonio local y vida de pueblo",
      en: "Local heritage and small-town life",
    },
    descripcion: {
      es: "Recorré La Escondida y descubrí su identidad, sus espacios cotidianos, su tranquilidad y su perfil de destino emergente del interior chaqueño.",
      en: "Explore La Escondida and discover its identity, everyday spaces, peaceful atmosphere, and profile as an emerging destination in inland Chaco.",
    },
    imagen: "/images/imperdibles/la-escondida-centro.jpg",
    duracion: {
      es: "1 a 2 horas",
      en: "1 to 2 hours",
    },
    distancia: {
      es: "En La Escondida",
      en: "In La Escondida",
    },
    destacados: {
      es: ["Vida local", "Ambiente tranquilo", "Identidad del pueblo"],
      en: ["Local life", "Peaceful atmosphere", "Town identity"],
    },
  },
  {
    titulo: {
      es: "Naturaleza y descanso",
      en: "Nature and relaxation",
    },
    descripcion: {
      es: "La Escondida invita a disfrutar del aire libre, los espacios verdes y el ritmo sereno de un destino ideal para desconectar.",
      en: "La Escondida invites visitors to enjoy the outdoors, green spaces, and the calm pace of a destination made for unwinding.",
    },
    imagen: "/images/imperdibles/naturaleza.jpg",
    duracion: {
      es: "Medio día",
      en: "Half day",
    },
    distancia: {
      es: "En La Escondida",
      en: "In La Escondida",
    },
    destacados: {
      es: ["Ambiente natural", "Descanso", "Escapadas cortas"],
      en: ["Natural setting", "Relaxation", "Short getaways"],
    },
  },
];

export const COMO_LLEGAR = {
  desde_resistencia: {
    distancia: {
      es: "Aproximadamente 70 km",
      en: "Approximately 70 km",
    },
    ruta: {
      es: "Acceso por rutas provinciales y caminos de conexión regional",
      en: "Access via provincial roads and regional connecting routes",
    },
    tiempo: {
      es: "Alrededor de 1 hora",
      en: "Around 1 hour",
    },
    descripcion: {
      es: "La Escondida se encuentra en una ubicación accesible para escapadas desde Resistencia y otras localidades cercanas.",
      en: "La Escondida is easily reachable for getaways from Resistencia and nearby towns.",
    },
  },
};

export const alojamientos: Establecimiento[] = [
  {
    id: "1",
    slug: "hotel-falcon-oscar",
    tipo: "Hotel",
    destacado: true,
    nombre: {
      es: "Hotel Falcon Oscar",
      en: "Hotel Falcon Oscar",
    },
    descripcionCorta: {
      es: "Hotel con pileta, WiFi y habitaciones privadas en La Escondida, ideal para descansar en un entorno tranquilo.",
      en: "Hotel with a pool, WiFi, and private rooms in La Escondida, ideal for relaxing in a quiet setting.",
    },
    descripcionLarga: {
      es: "Hotel Falcon Oscar es una opción de alojamiento en La Escondida pensada para quienes buscan descanso, tranquilidad y una estadía simple con servicios esenciales. El lugar cuenta con habitaciones privadas, aire acondicionado, TV, baño privado, WiFi y un amplio espacio exterior con pileta, ideal para disfrutar los días de calor. Su estilo es sencillo y funcional, con una ambientación rústica y un entorno barrial sereno, perfecto para viajeros que quieren desconectarse y disfrutar del ritmo calmo de la Ciudad Jardín.",
      en: "Hotel Falcon Oscar is an accommodation option in La Escondida for travelers seeking rest, peace, and a simple stay with essential services. The property offers private rooms, air conditioning, TV, private bathrooms, WiFi, and a spacious outdoor area with a swimming pool, perfect for warm days. Its style is simple and functional, with a rustic atmosphere and a quiet residential setting, ideal for visitors looking to unwind and enjoy the calm pace of Ciudad Jardín.",
    },
    amenities: [
      {
        icono: "Wifi",
        label: { es: "WiFi", en: "WiFi" },
      },
      {
        icono: "Wind",
        label: { es: "Aire acondicionado", en: "Air conditioning" },
      },
      {
        icono: "Tv",
        label: { es: "TV", en: "TV" },
      },
      {
        icono: "ShowerHead",
        label: { es: "Baño privado", en: "Private bathroom" },
      },
      {
        icono: "Waves",
        label: { es: "Pileta", en: "Swimming pool" },
      },
    ],
    fotos: [
      {
        src: "/images/hotel-falcon-oscar/hotel-falcon-oscar-1.jpg",
        alt: {
          es: "Habitación vacía con piso cerámico y paredes de ladrillo visto en Hotel Falcon Oscar.",
          en: "Empty room with ceramic floor and exposed brick walls at Hotel Falcon Oscar.",
        },
      },
      {
        src: "/images/hotel-falcon-oscar/hotel-falcon-oscar-2.jpg",
        alt: {
          es: "Habitación con ventana de madera, puerta de ingreso y luz natural en Hotel Falcon Oscar.",
          en: "Room with a wooden window, entrance door, and natural light at Hotel Falcon Oscar.",
        },
      },
      {
        src: "/images/hotel-falcon-oscar/hotel-falcon-oscar-3.jpg",
        alt: {
          es: "Pasillo interior con paredes de ladrillo y ventana lateral en Hotel Falcon Oscar.",
          en: "Interior hallway with brick walls and a side window at Hotel Falcon Oscar.",
        },
      },
      {
        src: "/images/hotel-falcon-oscar/hotel-falcon-oscar-4.jpg",
        alt: {
          es: "Espacio con mesada y bacha dentro de una unidad de Hotel Falcon Oscar.",
          en: "Space with a countertop and sink inside one of the units at Hotel Falcon Oscar.",
        },
      },
      {
        src: "/images/hotel-falcon-oscar/hotel-falcon-oscar-5.jpg",
        alt: {
          es: "Pileta exterior del Hotel Falcon Oscar con patio amplio y entorno verde.",
          en: "Outdoor pool at Hotel Falcon Oscar with a spacious yard and green surroundings.",
        },
      },
      {
        src: "/images/hotel-falcon-oscar/hotel-falcon-oscar-6.jpg",
        alt: {
          es: "Vista lateral de la pileta del Hotel Falcon Oscar en un día soleado.",
          en: "Side view of the pool at Hotel Falcon Oscar on a sunny day.",
        },
      },
      {
        src: "/images/hotel-falcon-oscar/hotel-falcon-oscar-7.jpg",
        alt: {
          es: "Personas disfrutando de la pileta al aire libre en Hotel Falcon Oscar.",
          en: "Guests enjoying the outdoor pool at Hotel Falcon Oscar.",
        },
      },
      {
        src: "/images/hotel-falcon-oscar/hotel-falcon-oscar-8.jpg",
        alt: {
          es: "Pileta del Hotel Falcon Oscar con vista al frente de las habitaciones.",
          en: "Pool at Hotel Falcon Oscar with a view of the front of the rooms.",
        },
      },
      {
        src: "/images/hotel-falcon-oscar/hotel-falcon-oscar-9.jpg",
        alt: {
          es: "Vista exterior de las habitaciones del Hotel Falcon Oscar rodeadas de vegetación.",
          en: "Exterior view of the rooms at Hotel Falcon Oscar surrounded by greenery.",
        },
      },
    ],
    contacto: {
      telefono: "+54 9 362 487-4523",
      whatsapp: "5493624874523",
      ubicacion: "La Escondida, Chaco, Argentina",
      coordenadas: {
        lat: -27.101869,
        lng: -59.4446446,
      },
      mapsUrl: "https://maps.app.goo.gl/hZm82Ar5VaxUxrpMA",
    },
    precio: "$$",
    capacidad: {
      es: "Habitaciones privadas, ideal para parejas, familias o escapadas de descanso.",
      en: "Private rooms, ideal for couples, families, or relaxing getaways.",
    },
  },
  {
    id: "2",
    slug: "hotel-edgar-arce",
    tipo: "Hotel",
    destacado: false,
    nombre: {
      es: "Hotel Edgar Arce",
      en: "Hotel Edgar Arce",
    },
    descripcionCorta: {
      es: "Alojamiento en La Escondida. Próximamente se sumarán más detalles, fotos y ubicación precisa.",
      en: "Accommodation in La Escondida. More details, photos, and exact location will be added soon.",
    },
    descripcionLarga: {
      es: "Hotel Edgar Arce forma parte de la oferta local de alojamiento de La Escondida. Por el momento, el sitio muestra su información de contacto mientras se completa la carga de imágenes, descripción ampliada y datos de ubicación.",
      en: "Hotel Edgar Arce is part of La Escondida’s local accommodation offer. At the moment, the website displays its contact information while images, a fuller description, and location details are being added.",
    },
    amenities: [],
    fotos: [],
    contacto: {
      telefono: "+54 9 362 490-3201",
      whatsapp: "5493624903201",
      ubicacion: "La Escondida, Chaco, Argentina",
      coordenadas: {
        lat: 0,
        lng: 0,
      },
      mapsUrl: "",
    },
    precio: "$$",
    capacidad: {
      es: "Información de capacidad próximamente.",
      en: "Capacity information coming soon.",
    },
  },
];

export const gastronomia: Establecimiento[] = [
  {
    id: "3",
    slug: "casa-de-comidas-isabella",
    tipo: "Restaurante",
    destacado: true,
    nombre: {
      es: "Casa de Comidas Isabella",
      en: "Isabella Home Kitchen",
    },
    descripcionCorta: {
      es: "Comida casera abundante en el Barrio San José. Milanesas, pastas, pollo asado y más, con porciones generosas.",
      en: "Hearty homemade food in Barrio San José. Schnitzels, pasta, roast chicken and more, with generous portions.",
    },
    descripcionLarga: {
      es: "Casa de Comidas Isabella, de América Arce, es el lugar de referencia para comer casero en La Escondida. Sus platos combinan la cocina criolla del norte con recetas de siempre: milanesas a la napolitana, fideos con tuco, arroz con carne, pollo asado con ensalada rusa, tartas y hamburguesas. Todo se prepara el día, con ingredientes frescos y porciones que no dejan con hambre. Ideal para almorzar o pedir para llevar.",
      en: "Casa de Comidas Isabella, run by América Arce, is the go-to spot for home cooking in La Escondida. Dishes combine northern creole cuisine with timeless recipes: napolitana schnitzels, pasta with tomato sauce, rice with meat, roast chicken with potato salad, pies and burgers. Everything is made fresh daily with generous portions. Perfect for lunch or takeaway.",
    },
    amenities: [
      {
        icono: "UtensilsCrossed",
        label: { es: "Comidas caseras", en: "Homemade food" },
      },
      { icono: "Coffee", label: { es: "Para llevar", en: "Takeaway" } },
    ],
    fotos: [
      {
        src: "/images/casa-de-comidas-isabella/casa-de-comidas-isabella-1.jpg",
        alt: {
          es: "Milanesa a la napolitana con puré en Casa de Comidas Isabella.",
          en: "Napolitana schnitzel with mashed potatoes at Casa de Comidas Isabella.",
        },
      },
      {
        src: "/images/casa-de-comidas-isabella/casa-de-comidas-isabella-2.jpg",
        alt: {
          es: "Pollo asado con chorizo y ensalada rusa.",
          en: "Roast chicken with sausage and potato salad.",
        },
      },
      {
        src: "/images/casa-de-comidas-isabella/casa-de-comidas-isabella-3.jpg",
        alt: {
          es: "Bandejas de pollo con chorizo listas para servir.",
          en: "Trays of chicken with sausage ready to serve.",
        },
      },
      {
        src: "/images/casa-de-comidas-isabella/casa-de-comidas-isabella-4.jpg",
        alt: { es: "Arroz con carne casero.", en: "Homemade rice with meat." },
      },
      {
        src: "/images/casa-de-comidas-isabella/casa-de-comidas-isabella-5.jpg",
        alt: {
          es: "Fideos con albóndigas y papas.",
          en: "Pasta with meatballs and potatoes.",
        },
      },
      {
        src: "/images/casa-de-comidas-isabella/casa-de-comidas-isabella-6.jpg",
        alt: {
          es: "Hamburguesa con papas fritas.",
          en: "Burger with french fries.",
        },
      },
      {
        src: "/images/casa-de-comidas-isabella/casa-de-comidas-isabella-7.jpg",
        alt: {
          es: "Fideos con salsa y papas.",
          en: "Pasta with sauce and potatoes.",
        },
      },
      {
        src: "/images/casa-de-comidas-isabella/casa-de-comidas-isabella-8.jpg",
        alt: {
          es: "Pescado al horno con arroz blanco.",
          en: "Baked fish with white rice.",
        },
      },
      {
        src: "/images/casa-de-comidas-isabella/casa-de-comidas-isabella-9.jpg",
        alt: {
          es: "Tarta de espinaca y queso.",
          en: "Spinach and cheese pie.",
        },
      },
    ],
    contacto: {
      telefono: "+54 9 362 461-5457",
      whatsapp: "5493624615457",
      ubicacion: "Barrio San José S/N, La Escondida, Chaco",
      coordenadas: { lat: 0, lng: 0 },
      mapsUrl: "https://maps.app.goo.gl/b4ZNdNV3y3MkjnoMA",
    },
    precio: "$",
    capacidad: {
      es: "Ideal para almuerzo y pedidos para llevar.",
      en: "Ideal for lunch and takeaway orders.",
    },
  },
  {
    id: "4",
    slug: "comedor-delicias",
    tipo: "Comedor",
    destacado: true,
    nombre: {
      es: "Comedor Delicias",
      en: "Delicias Diner",
    },
    descripcionCorta: {
      es: "Parador gastronómico sobre Ruta 9. Abierto todos los días desde las 5 hs, con salón, deck exterior y variedad de platos.",
      en: "Roadside diner on Route 9. Open every day from 5am, with indoor seating, outdoor deck and a varied menu.",
    },
    descripcionLarga: {
      es: "Comedor Delicias — 'Sabores que atrapan' — es el parador de referencia en el acceso a La Escondida por Ruta 9. Abre de lunes a sábado desde las 5:00 hs hasta la medianoche, y los domingos desde las 8:00 hs. Cuenta con un salón interior climatizado, un deck exterior con guirnaldas para las noches, y una barra con heladeras. En el menú: milanesas, papas fritas, platos del día y más. Ideal tanto para una parada rápida como para quedarse a cenar.",
      en: "Comedor Delicias — 'Flavors that captivate' — is the reference stop at La Escondida's Route 9 entrance. Open Monday to Saturday from 5:00am to midnight, and Sundays from 8:00am. It features an air-conditioned indoor dining room, an outdoor deck with string lights for evenings, and a bar with refrigerators. Menu includes schnitzels, fries, daily specials and more. Great for a quick stop or a sit-down dinner.",
    },
    amenities: [
      { icono: "UtensilsCrossed", label: { es: "Comedor", en: "Diner" } },
      {
        icono: "Coffee",
        label: { es: "Abierto desde las 5 hs", en: "Open from 5am" },
      },
      { icono: "Car", label: { es: "Sobre Ruta 9", en: "On Route 9" } },
    ],
    fotos: [
      {
        src: "/images/comedor-delicias/comedor-delicias-1.jpg",
        alt: {
          es: "Salón interior de Comedor Delicias con logo en pared.",
          en: "Indoor dining room at Comedor Delicias with logo on wall.",
        },
      },
      {
        src: "/images/comedor-delicias/comedor-delicias-2.jpg",
        alt: {
          es: "Deck exterior de noche con guirnaldas en Comedor Delicias.",
          en: "Outdoor deck at night with string lights at Comedor Delicias.",
        },
      },
      {
        src: "/images/comedor-delicias/comedor-delicias-3.jpg",
        alt: {
          es: "Frente exterior de Comedor Delicias sobre Ruta 9.",
          en: "Exterior front of Comedor Delicias on Route 9.",
        },
      },
      {
        src: "/images/comedor-delicias/comedor-delicias-4.jpg",
        alt: {
          es: "Papas fritas en balde con logo de Delicias.",
          en: "French fries in a bucket with Delicias logo.",
        },
      },
      {
        src: "/images/comedor-delicias/comedor-delicias-5.jpg",
        alt: {
          es: "Milanesa con papas fritas en Comedor Delicias.",
          en: "Schnitzel with french fries at Comedor Delicias.",
        },
      },
    ],
    contacto: {
      telefono: "+54 9 362 425-5501",
      whatsapp: "5493624255501",
      ubicacion: "Ruta 9, acceso a La Escondida, Chaco",
      coordenadas: { lat: 0, lng: 0 },
      mapsUrl: "https://maps.app.goo.gl/L9sepDCRzH3fFiqt9",
    },
    precio: "$",
    capacidad: {
      es: "Atención diaria para viajeros y público local.",
      en: "Daily service for travelers and locals.",
    },
  },
  {
    id: "5",
    slug: "bufet-la-gloriosa",
    tipo: "Comedor",
    destacado: false,
    nombre: {
      es: "Bufet La Gloriosa",
      en: "La Gloriosa Buffet",
    },
    descripcionCorta: {
      es: "Propuesta gastronómica local de Rosa Núñez en La Escondida. Comida casera para el público local.",
      en: "Local food spot by Rosa Núñez in La Escondida. Homestyle cooking for the local community.",
    },
    descripcionLarga: {
      es: "Bufet La Gloriosa, de Rosa Núñez, es una opción de comida local en La Escondida. Próximamente se incorporarán más detalles, fotos y descripción ampliada.",
      en: "Bufet La Gloriosa, run by Rosa Núñez, is a local food option in La Escondida. More details, photos and an expanded description will be added soon.",
    },
    amenities: [
      {
        icono: "UtensilsCrossed",
        label: { es: "Gastronomía local", en: "Local food" },
      },
    ],
    fotos: [],
    contacto: {
      telefono: "3625524952",
      whatsapp: "5493625524952",
      ubicacion: "La Escondida, Chaco",
      coordenadas: { lat: 0, lng: 0 },
      mapsUrl: "",
    },
    precio: "$",
    capacidad: { es: "Consultar disponibilidad.", en: "Check availability." },
  },
];

export const EVENTOS_2025 = [
  {
    fecha: {
      es: "Próximamente",
      en: "Coming soon",
    },
    titulo: {
      es: "Agenda local de eventos",
      en: "Local events agenda",
    },
    lugar: {
      es: "La Escondida",
      en: "La Escondida",
    },
    descripcion: {
      es: "La agenda turística y cultural del destino se irá actualizando con celebraciones, encuentros y actividades locales.",
      en: "The destination’s tourism and cultural agenda will be updated with celebrations, gatherings, and local activities.",
    },
  },
];

export const NOTICIAS = [
  {
    titulo: {
      es: "La Escondida sigue fortaleciendo su propuesta turística local",
      en: "La Escondida continues to strengthen its local tourism offer",
    },
    fecha: {
      es: "Actualización reciente",
      en: "Recent update",
    },
    imagen: "/images/noticias/noticia-1.jpg",
    extracto: {
      es: "El destino avanza en la organización de su oferta de alojamiento, gastronomía y experiencias para visitantes.",
      en: "The destination is moving forward in organizing its accommodation, food, and visitor experience offerings.",
    },
    fuente: "Sitio oficial",
  },
];

export const ACTIVIDADES_DISPONIBLES = [
  {
    categoria: {
      es: "Descanso",
      en: "Relaxation",
    },
    items: {
      es: [
        "Escapadas tranquilas",
        "Pileta",
        "Vida de pueblo",
        "Tiempo al aire libre",
      ],
      en: ["Peaceful getaways", "Pool", "Small-town life", "Outdoor time"],
    },
  },
  {
    categoria: {
      es: "Naturaleza",
      en: "Nature",
    },
    items: {
      es: ["Caminatas suaves", "Observación del entorno", "Paisaje local"],
      en: ["Gentle walks", "Scenery observation", "Local landscape"],
    },
  },
  {
    categoria: {
      es: "Gastronomía",
      en: "Food",
    },
    items: {
      es: ["Comidas caseras", "Paradas sobre ruta", "Sabores locales"],
      en: ["Homemade meals", "Roadside stops", "Local flavors"],
    },
  },
];

export const TEMPORADAS = {
  mejor_epoca: {
    meses: {
      es: "Otoño, invierno y primavera",
      en: "Autumn, winter, and spring",
    },
    razon: {
      es: "Clima más amable para recorrer, descansar y disfrutar del aire libre.",
      en: "Milder weather for exploring, relaxing, and enjoying the outdoors.",
    },
  },
  verano: {
    meses: {
      es: "Diciembre a marzo",
      en: "December to March",
    },
    razon: {
      es: "Ideal para disfrutar espacios con pileta y escapadas de temporada.",
      en: "Ideal for enjoying pool areas and seasonal getaways.",
    },
  },
};

export const ALOJAMIENTOS_DATA = [
  {
    nombre: { es: "Hotel Falcon Oscar", en: "Hotel Falcon Oscar" },
    tipo: { es: "Hotel", en: "Hotel" },
    descripcion: {
      es: "Hotel con pileta, WiFi y habitaciones privadas en La Escondida. Ambiente tranquilo con amplio espacio exterior, ideal para descansar en los días de calor.",
      en: "Hotel with pool, WiFi and private rooms in La Escondida. Quiet setting with a large outdoor area, perfect for relaxing on hot days.",
    },
    imagen: "/images/hotel-falcon-oscar/hotel-falcon-oscar-1.jpg",
    servicios: {
      es: ["WiFi", "Pileta", "Aire acondicionado", "TV"],
      en: ["WiFi", "Pool", "Air conditioning", "TV"],
    },
    capacidad: {
      es: "Habitaciones privadas para parejas, familias o grupos",
      en: "Private rooms for couples, families or groups",
    },
    precio: "$$",
    distancia: { es: "En La Escondida", en: "In La Escondida" },
    destacado: true,
    esLocal: true,
    whatsapp: "5493624874523",
  },
  {
    nombre: { es: "Hotel Edgar Arce", en: "Hotel Edgar Arce" },
    tipo: { es: "Hotel", en: "Hotel" },
    descripcion: {
      es: "Alojamiento en La Escondida. Próximamente se sumarán fotos, descripción completa y datos de ubicación.",
      en: "Accommodation in La Escondida. Photos, full description and location details coming soon.",
    },
    imagen:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    servicios: {
      es: ["Habitaciones privadas"],
      en: ["Private rooms"],
    },
    capacidad: {
      es: "Consultar disponibilidad",
      en: "Check availability",
    },
    precio: "$$",
    distancia: { es: "En La Escondida", en: "In La Escondida" },
    destacado: false,
    esLocal: true,
    whatsapp: "5493624903201",
  },
  {
    nombre: {
      es: "Howard Johnson Plaza La Ribera",
      en: "Howard Johnson Plaza La Ribera",
    },
    tipo: { es: "Hotel 4★", en: "4★ Hotel" },
    descripcion: {
      es: "Hotel premium en Resistencia con spa, restaurante y vista al río. Base ideal para explorar la región chaqueña.",
      en: "Premium hotel in Resistencia with spa, restaurant and river views. Ideal base for exploring the Chaco region.",
    },
    imagen:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
    servicios: {
      es: ["Spa", "Restaurante", "Pileta", "WiFi"],
      en: ["Spa", "Restaurant", "Pool", "WiFi"],
    },
    capacidad: {
      es: "Habitaciones y suites",
      en: "Rooms and suites",
    },
    precio: "$$$",
    distancia: { es: "Resistencia (70 km)", en: "Resistencia (70 km)" },
    destacado: false,
    esLocal: false,
    whatsapp: "5493624000000",
  },
  {
    nombre: { es: "Apart Hotel Don Daniel", en: "Apart Hotel Don Daniel" },
    tipo: { es: "Apart Hotel", en: "Apart Hotel" },
    descripcion: {
      es: "Apartamentos con cocina en Resistencia. Ubicación céntrica cerca de esculturas y museos. Ideal para estadías prolongadas.",
      en: "Apartments with kitchen in Resistencia. Central location near sculptures and museums. Ideal for longer stays.",
    },
    imagen:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    servicios: {
      es: ["Cocina", "WiFi", "Aire acondicionado", "TV"],
      en: ["Kitchen", "WiFi", "Air conditioning", "TV"],
    },
    capacidad: {
      es: "2-4 personas",
      en: "2-4 people",
    },
    precio: "$$",
    distancia: { es: "Resistencia (70 km)", en: "Resistencia (70 km)" },
    destacado: false,
    esLocal: false,
    whatsapp: "5493624000000",
  },
];
