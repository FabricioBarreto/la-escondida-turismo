// lib/data.ts - Información turística REAL de La Escondida y Chaco

export const CONTACT_INFO = {
  whatsapp: '5493624000000', // CAMBIAR POR TU NÚMERO REAL
  email: 'turismo@laescondida.gob.ar',
  phone: '+54 362 4000000',
  address: 'La Escondida, Departamento General Donovan, Chaco',
  coordinates: { lat: -27.1167, lng: -59.3833 }
};

export const HERO_SLIDES = [
  {
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    titulo: 'Bienvenidos a La Escondida',
    subtitulo: 'Descubre el auténtico Chaco en el corazón del Paraná'
  },
  {
    imagen: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19',
    titulo: 'Naturaleza y Tradición',
    subtitulo: 'Fundada en 1927, patrimonio de industria y cultura'
  },
  {
    imagen: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    titulo: 'Explora el Chaco Auténtico',
    subtitulo: 'Parques nacionales, pesca deportiva y arte a cielo abierto'
  }
];

export const IMPERDIBLES = [
  {
    titulo: 'Resistencia - Ciudad de las Esculturas',
    descripcion: 'A pocos kilómetros, visita la capital con más de 650 esculturas al aire libre. Museo a cielo abierto reconocido mundialmente.',
    imagen: 'https://images.unsplash.com/photo-1576020799627-aeac74d58064',
    duracion: 'Medio día - Día completo',
    distancia: '70 km',
    destacados: ['Bienal Internacional', 'El Fogón de los Arrieros', 'Museo Fabriciano Gómez']
  },
  {
    titulo: 'Isla del Cerrito - Pesca Deportiva',
    descripcion: 'Uno de los mejores pesqueros de Argentina. Captura dorados, surubíes y pacúes en los ríos Paraná y Paraguay.',
    imagen: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd',
    duracion: 'Día completo',
    distancia: '90 km',
    destacados: ['Torneo Internacional del Dorado', 'Gastronomía del río', 'Paseos náuticos']
  },
  {
    titulo: 'Parque Nacional Chaco',
    descripcion: 'Bosques, lagunas y 350 especies de aves. Senderos, miradores y avistaje de fauna autóctona.',
    imagen: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    duracion: 'Medio día - Día completo',
    distancia: '130 km',
    destacados: ['Laguna Yacaré', 'Avistaje de aves', 'Senderos naturales']
  },
  {
    titulo: 'Parque Nacional El Impenetrable',
    descripcion: '128,000 hectáreas del mítico Impenetrable Chaqueño. Yaguaretés, tapires y más de 300 especies de aves.',
    imagen: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23',
    duracion: '2-3 días',
    distancia: '400 km',
    destacados: ['Río Bermejo', 'Safari fotográfico', 'Glamping y camping']
  },
  {
    titulo: 'Patrimonio Industrial - Fábrica de Tanino',
    descripcion: 'Descubre la historia de La Escondida, fundada en 1927 junto a la fábrica de tanino Indunor, patrimonio industrial chaqueño.',
    imagen: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
    duracion: '2-3 horas',
    distancia: 'En La Escondida',
    destacados: ['Historia local', 'Arquitectura industrial', 'Tradición tanino']
  },
  {
    titulo: 'Cabalgata de San Carlos Borromeo',
    descripcion: 'Celebración tradicional el último domingo de octubre con festival folclórico y jineteada desde El Cacique Llorón.',
    imagen: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a',
    duracion: 'Día completo',
    distancia: 'En La Escondida',
    destacados: ['Tradición chaqueña', 'Festival folclórico', 'Fiesta patronal']
  }
];

export const COMO_LLEGAR = {
  desde_resistencia: {
    distancia: '70 km',
    ruta: 'Ruta Provincial 11',
    tiempo: '1 hora',
    descripcion: 'Acceso asfaltado y señalizado desde la capital provincial.'
  },
  transporte_publico: 'Líneas de colectivo desde Terminal de Resistencia',
  aeropuerto: 'Aeropuerto Internacional de Resistencia (90 km)'
};

export const ALOJAMIENTOS = [
  'Hosterías en La Escondida',
  'Cabañas y camping en localidades cercanas',
  'Hoteles en Resistencia (70 km)',
  'Glamping en Parque Nacional El Impenetrable'
];

export const GASTRONOMIA = {
  platos_tipicos: [
    'Pescados de río: surubí, dorado, pacú',
    'Asado chaqueño',
    'Chipá y tortas fritas',
    'Locro norteño',
    'Dulces regionales'
  ],
  bebidas: ['Tereré', 'Mate cocido', 'Vinos argentinos']
};

export const EVENTOS_2025 = [
  {
    fecha: '26 Oct 2025',
    titulo: 'Cabalgata de Bendiciones',
    lugar: 'La Escondida',
    descripcion: 'Homenaje a San Carlos Borromeo con jinetes desde El Cacique Llorón'
  },
  {
    fecha: '4 Nov 2025',
    titulo: 'Fiesta Patronal San Carlos Borromeo',
    lugar: 'La Escondida',
    descripcion: 'Aniversario de la fundación del pueblo con festival y actividades'
  },
  {
    fecha: '5-7 Sep 2025',
    titulo: 'Torneo Internacional Pesca del Dorado',
    lugar: 'Isla del Cerrito',
    descripcion: 'Pesca con devolución. Más de 400 embarcaciones participantes'
  },
  {
    fecha: 'Julio 2026',
    titulo: 'Bienal Internacional de Esculturas',
    lugar: 'Resistencia',
    descripcion: 'Artistas de todo el mundo crean obras en vivo a cielo abierto'
  }
];

export const NOTICIAS = [
  {
    titulo: 'Parque Nacional El Impenetrable cumple 10 años',
    fecha: '22 de Octubre, 2024',
    imagen: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    extracto: 'El parque creado en 2014 se consolida como pilar del turismo sostenible en Chaco, protegiendo 128,000 hectáreas de biodiversidad.',
    fuente: 'chaco.gov.ar'
  },
  {
    titulo: 'Torneo de Pesca del Dorado 2025 convoca récord de participantes',
    fecha: '1 de Agosto, 2025',
    imagen: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd',
    extracto: 'Se esperan entre 400 y 450 embarcaciones para el XXI Torneo Internacional en Isla del Cerrito del 5 al 7 de septiembre.',
    fuente: 'diariolavozdelchaco.com'
  },
  {
    titulo: 'Resistencia amplía circuito turístico de esculturas',
    fecha: '29 de Mayo, 2025',
    imagen: 'https://images.unsplash.com/photo-1576020799627-aeac74d58064',
    extracto: 'El City Tour incorpora el Museo Qom Chelaalapí y nuevas esculturas urbanas en el circuito gratuito.',
    fuente: 'guiaturista.com.ar'
  }
];

export const ACTIVIDADES_DISPONIBLES = [
  {
    categoria: 'Naturaleza',
    items: ['Avistaje de aves', 'Senderismo', 'Safari fotográfico', 'Cabalgatas']
  },
  {
    categoria: 'Deportes',
    items: ['Pesca deportiva', 'Kayak', 'Navegación fluvial', 'Ciclismo']
  },
  {
    categoria: 'Cultura',
    items: ['Museos', 'Bienal de Esculturas', 'Patrimonio industrial', 'Artesanías']
  },
  {
    categoria: 'Tradiciones',
    items: ['Festivales folclóricos', 'Gastronomía regional', 'Fiestas patronales']
  }
];

export const FAUNA_CHACO = [
  'Yaguareté', 'Tapir', 'Oso hormiguero', 'Tatú carreta', 
  'Chuña de patas negras', 'Charata', 'Loro hablador',
  'Dorado', 'Surubí', 'Pacú', 'Yacaré'
];

export const TEMPORADAS = {
  mejor_epoca: {
    meses: 'Abril - Noviembre',
    razon: 'Clima agradable (15-28°C), ideal para naturaleza y pesca'
  },
  verano: {
    meses: 'Diciembre - Marzo',
    razon: 'Caluroso (30-40°C), temporada de playas y ríos'
  },
  eventos_principales: {
    invierno: 'Bienal de Esculturas (julio)',
    primavera: 'Torneo de Pesca (septiembre), Cabalgata (octubre)'
  }
};