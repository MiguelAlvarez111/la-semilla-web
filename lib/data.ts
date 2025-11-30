export interface Group {
  id: string
  slug: string
  name: string
  description: string
  shortDescription: string
  tagline: string // Lema específico del grupo
  day: string
  time: string
  location: string
  whatsappLink: string
  theme: 'dreamers' | 'champions' | 'mujeres' | 'kids'
  image?: string
  color: string
  // Nuevas secciones ricas
  whatToExpect: {
    title: string
    items: Array<{
      icon: string // Nombre del ícono de Lucide
      title: string
      description: string
    }>
  }
  pillars: {
    title: string
    items: Array<{
      title: string
      description: string
    }>
  }
  faqs: Array<{
    question: string
    answer: string
  }>
}

export interface Ministry {
  id: string
  name: string
  description: string
  slug: string
  icon: string
  iconName: string // Nombre del ícono de lucide-react
  schedule: string
  color: string
  gradient: string
  image: string // URL de la imagen del ministerio
}

export interface User {
  id: string
  name: string
  email: string
  gender?: 'male' | 'female'
  nextEvent?: {
    title: string
    date: string
    time: string
    location: string
  }
  route?: {
    current: string
    next: string
    progress: number
    steps: string[]
  }
}

export interface PaymentMethod {
  id: string
  name: string
  icon: string
  description: string
  details: {
    bank?: string
    account?: string
    accountType?: string
    accountName?: string
    phone?: string
    platform?: string
  }
}

export interface WhyWeGive {
  title: string
  items: Array<{
    icon: string
    title: string
    description: string
  }>
}

export const groups: Group[] = [
  {
    id: '1',
    slug: 'dreamers',
    name: 'Dreamers',
    description: 'Un espacio donde los jóvenes encuentran su propósito, desarrollan su liderazgo y construyen amistades que duran para siempre. Ven y sé parte de la próxima generación de líderes.',
    shortDescription: 'Jóvenes con propósito y visión',
    tagline: 'Jóvenes descubriendo propósito',
    day: 'Viernes',
    time: '7:00 PM',
    location: 'Sede Principal - Salón Juvenil',
    whatsappLink: 'https://wa.me/573001234567?text=Hola,%20quiero%20unirme%20a%20Dreamers',
    theme: 'dreamers',
    color: '#8B5CF6', // Cyberpunk/Neon Purple
    whatToExpect: {
      title: '¿Qué esperar?',
      items: [
        {
          icon: 'Sparkles',
          title: 'Propósito',
          description: 'Descubre tu llamado único y cómo Dios quiere usarte para impactar tu generación.'
        },
        {
          icon: 'Users',
          title: 'Amistad Real',
          description: 'Conecta con jóvenes auténticos que caminan contigo en esta etapa de la vida.'
        },
        {
          icon: 'Zap',
          title: 'Energía Contagiosa',
          description: 'Adoración vibrante, mensajes relevantes y un ambiente donde puedes ser tú mismo.'
        },
        {
          icon: 'Rocket',
          title: 'Liderazgo',
          description: 'Desarrolla habilidades de liderazgo mientras sirves y creces en tu fe.'
        }
      ]
    },
    pillars: {
      title: 'Nuestros Pilares',
      items: [
        {
          title: 'Propósito',
          description: 'Creemos que cada joven tiene un propósito único diseñado por Dios. Te ayudamos a descubrirlo y vivirlo.'
        },
        {
          title: 'Comunidad',
          description: 'La vida se vive mejor en comunidad. Construimos relaciones auténticas que duran para siempre.'
        },
        {
          title: 'Liderazgo',
          description: 'Desarrollamos líderes que impactan su generación con el amor y la verdad de Jesús.'
        },
        {
          title: 'Adoración',
          description: 'Adoramos a Dios con pasión y autenticidad, celebrando quién es Él y lo que hace en nuestras vidas.'
        }
      ]
    },
    faqs: [
      {
        question: '¿Qué edad debo tener para unirme?',
        answer: 'Dreamers está diseñado para jóvenes de 15 a 25 años. Si estás en este rango, ¡eres bienvenido!'
      },
      {
        question: '¿Necesito ser cristiano para asistir?',
        answer: '¡No! Todos son bienvenidos, sin importar dónde estés en tu fe. Ven tal como eres.'
      },
      {
        question: '¿Qué hago en mi primera reunión?',
        answer: 'Solo ven, relájate y disfruta. Te recibiremos con los brazos abiertos y te ayudaremos a sentirte en casa.'
      }
    ]
  },
  {
    id: '2',
    slug: 'champions',
    name: 'Champions',
    description: 'Hombres que se fortalecen juntos, se desafían mutuamente y se apoyan para ser mejores líderes en sus hogares, trabajos y comunidad. Un lugar donde la autenticidad y el crecimiento son el estándar.',
    shortDescription: 'Hombres que se fortalecen juntos',
    tagline: 'Hombres fortaleciendo carácter',
    day: 'Sábado',
    time: '7:00 AM',
    location: 'Sede Principal - Salón de Hombres',
    whatsappLink: 'https://wa.me/573001234567?text=Hola,%20quiero%20unirme%20a%20Champions',
    theme: 'champions',
    color: '#1F2937', // Industrial/Dark Gray
    whatToExpect: {
      title: '¿Qué esperar?',
      items: [
        {
          icon: 'Shield',
          title: 'Carácter',
          description: 'Desarrolla integridad y fortaleza moral que transforma cada área de tu vida.'
        },
        {
          icon: 'Trophy',
          title: 'Liderazgo',
          description: 'Aprende a liderar con sabiduría en tu hogar, trabajo y comunidad.'
        },
        {
          icon: 'Target',
          title: 'Reto',
          description: 'Sé desafiado a crecer, a ser mejor esposo, padre, amigo y hombre de Dios.'
        },
        {
          icon: 'Users',
          title: 'Hermandad',
          description: 'Conecta con hombres auténticos que te apoyan y caminan contigo.'
        }
      ]
    },
    pillars: {
      title: 'Nuestros Valores',
      items: [
        {
          title: 'Carácter',
          description: 'Construimos hombres de integridad que viven sus valores en cada situación.'
        },
        {
          title: 'Liderazgo',
          description: 'Desarrollamos líderes que sirven, influyen positivamente y dejan un legado.'
        },
        {
          title: 'Responsabilidad',
          description: 'Asumimos nuestra responsabilidad como líderes en el hogar, trabajo y comunidad.'
        },
        {
          title: 'Hermandad',
          description: 'Creamos un espacio seguro donde los hombres pueden ser auténticos y apoyarse mutuamente.'
        }
      ]
    },
    faqs: [
      {
        question: '¿Necesito ser miembro de la iglesia?',
        answer: 'No, todos los hombres son bienvenidos. Ven y experimenta la comunidad de Champions.'
      },
      {
        question: '¿Qué pasa en una reunión típica?',
        answer: 'Nos reunimos para estudiar la Biblia, compartir desafíos, orar juntos y construir relaciones auténticas.'
      },
      {
        question: '¿Es solo para hombres casados?',
        answer: '¡No! Champions es para todos los hombres, solteros, casados, jóvenes y mayores.'
      }
    ]
  },
  {
    id: '3',
    slug: 'mujeres',
    name: 'Mujeres',
    description: 'Un espacio seguro donde las mujeres se conectan, crecen en su fe y se empoderan mutuamente. Celebramos juntas la belleza de la autenticidad y el propósito único que cada una tiene.',
    shortDescription: 'Mujeres conectadas y empoderadas',
    tagline: 'Un espacio seguro para el corazón',
    day: 'Sábado',
    time: '9:00 AM',
    location: 'Sede Principal - Salón de Mujeres',
    whatsappLink: 'https://wa.me/573001234567?text=Hola,%20quiero%20unirme%20al%20grupo%20de%20Mujeres',
    theme: 'mujeres',
    color: '#E8B4B8', // Soft/Editorial Rose
    whatToExpect: {
      title: '¿Qué esperar?',
      items: [
        {
          icon: 'Heart',
          title: 'Crecer',
          description: 'Encuentra herramientas prácticas para crecer en tu fe y en cada área de tu vida.'
        },
        {
          icon: 'Sparkles',
          title: 'Sanar',
          description: 'Un espacio seguro donde puedes compartir, sanar y encontrar esperanza.'
        },
        {
          icon: 'Flower',
          title: 'Florecer',
          description: 'Descubre tu propósito único y vive la vida plena que Dios tiene para ti.'
        },
        {
          icon: 'Users',
          title: 'Conectar',
          description: 'Construye amistades profundas con mujeres que te entienden y te apoyan.'
        }
      ]
    },
    pillars: {
      title: 'Nuestros Valores',
      items: [
        {
          title: 'Autenticidad',
          description: 'Creamos un espacio donde puedes ser tú misma, sin máscaras ni pretensiones.'
        },
        {
          title: 'Crecimiento',
          description: 'Nos comprometemos a crecer juntas en sabiduría, fe y propósito.'
        },
        {
          title: 'Comunidad',
          description: 'Valoramos las relaciones profundas y el apoyo mutuo en cada etapa de la vida.'
        },
        {
          title: 'Propósito',
          description: 'Creemos que cada mujer tiene un propósito único y la ayudamos a descubrirlo.'
        }
      ]
    },
    faqs: [
      {
        question: '¿Puedo venir si no soy cristiana?',
        answer: '¡Absolutamente! Todas las mujeres son bienvenidas, sin importar dónde estés en tu fe.'
      },
      {
        question: '¿Qué pasa si no conozco a nadie?',
        answer: 'No te preocupes, muchas vienen solas. Te ayudaremos a conectarte y sentirte en casa desde el primer día.'
      },
      {
        question: '¿Hay grupos para diferentes edades?',
        answer: 'Sí, tenemos grupos para diferentes etapas de la vida. Te ayudaremos a encontrar el grupo perfecto para ti.'
      }
    ]
  },
  {
    id: '4',
    slug: 'kids',
    name: 'La Semilla Kids',
    description: 'Diversión y aprendizaje para los más pequeños. Un ambiente seguro donde los niños descubren el amor de Dios a través de juegos, música y enseñanzas creativas.',
    shortDescription: 'Diversión y aprendizaje para niños',
    tagline: 'Diversión segura, fe auténtica',
    day: 'Domingo',
    time: '10:00 AM',
    location: 'Sede Principal - Salón Infantil',
    whatsappLink: 'https://wa.me/573001234567?text=Hola,%20quiero%20más%20información%20sobre%20La%20Semilla%20Kids',
    theme: 'kids',
    color: '#FBBF24', // Vibrant/Pastel Yellow
    whatToExpect: {
      title: '¿Qué esperar?',
      items: [
        {
          icon: 'Shield',
          title: 'Protocolos de Seguridad',
          description: 'Ambiente completamente seguro con personal capacitado y protocolos estrictos de protección.'
        },
        {
          icon: 'Smile',
          title: 'Diversión Segura',
          description: 'Juegos, música y actividades diseñadas para que los niños aprendan mientras se divierten.'
        },
        {
          icon: 'Heart',
          title: 'Amor de Dios',
          description: 'Enseñanzas creativas que ayudan a los niños a conocer el amor de Dios de manera apropiada para su edad.'
        },
        {
          icon: 'Users',
          title: 'Amistades',
          description: 'Los niños hacen amigos mientras aprenden valores importantes para la vida.'
        }
      ]
    },
    pillars: {
      title: 'Nuestros Valores',
      items: [
        {
          title: 'Seguridad',
          description: 'La seguridad de tus hijos es nuestra prioridad. Contamos con protocolos estrictos y personal capacitado.'
        },
        {
          title: 'Diversión',
          description: 'Creemos que los niños aprenden mejor cuando se divierten. Cada actividad está diseñada para ser educativa y entretenida.'
        },
        {
          title: 'Valores',
          description: 'Enseñamos valores bíblicos de manera creativa y apropiada para cada edad.'
        },
        {
          title: 'Inclusión',
          description: 'Todos los niños son bienvenidos, sin importar su trasfondo o experiencia previa.'
        }
      ]
    },
    faqs: [
      {
        question: '¿Qué edades atienden?',
        answer: 'Atendemos niños desde 2 años hasta 12 años, divididos en grupos por edad para mejor atención.'
      },
      {
        question: '¿Cómo garantizan la seguridad?',
        answer: 'Tenemos protocolos estrictos: personal capacitado, registro de entrada/salida, y áreas seguras designadas.'
      },
      {
        question: '¿Puedo quedarme con mi hijo?',
        answer: 'Los padres pueden quedarse si lo desean, especialmente en las primeras visitas. Nuestro personal está capacitado para ayudar a los niños a sentirse cómodos.'
      },
      {
        question: '¿Qué necesito traer?',
        answer: 'Solo trae a tu hijo con una sonrisa. Proporcionamos todos los materiales y actividades.'
      }
    ]
  },
]

export const ministries: Ministry[] = [
  {
    id: '1',
    name: 'Dreamers',
    description: 'Jóvenes con propósito y visión',
    slug: 'dreamers',
    icon: 'Sparkles',
    iconName: 'Sparkles',
    schedule: 'Viernes 7:00 PM',
    color: '#8B5CF6',
    gradient: 'from-purple-600 to-pink-600',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200',
  },
  {
    id: '2',
    name: 'Champions',
    description: 'Hombres que se fortalecen juntos',
    slug: 'champions',
    icon: 'Users',
    iconName: 'Shield',
    schedule: 'Sábado 7:00 AM',
    color: '#374151',
    gradient: 'from-gray-700 to-gray-900',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800',
  },
  {
    id: '3',
    name: 'Mujeres',
    description: 'Mujeres conectadas y empoderadas',
    slug: 'mujeres',
    icon: 'Heart',
    iconName: 'Heart',
    schedule: 'Sábado 9:00 AM',
    color: '#E8B4B8',
    gradient: 'from-rose-400 to-pink-500',
    image: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?auto=format&fit=crop&w=800',
  },
  {
    id: '4',
    name: 'La Semilla Kids',
    description: 'Diversión y aprendizaje para niños',
    slug: 'kids',
    icon: 'Smile',
    iconName: 'Smile',
    schedule: 'Domingo 10:00 AM',
    color: '#FBBF24',
    gradient: 'from-yellow-400 to-orange-500',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200',
  },
]

export const mockUser: User = {
  id: '1',
  name: 'Miguel',
  email: 'miguel@example.com',
  gender: 'male',
  nextEvent: {
    title: 'Reunión de Champions',
    date: 'Sábado 15 de Junio',
    time: '7:00 AM',
    location: 'Sede Principal',
  },
  route: {
    current: 'Nuevo',
    next: 'Bautismo',
    progress: 33,
    steps: ['Nuevo', 'Bautismo', 'Voluntario', 'Líder'],
  },
}

export const serviceSchedule = {
  main: {
    day: 'Domingo',
    time: '10:00 AM',
    location: 'Sede Principal - Av. Principal #123, Cúcuta',
    address: 'Av. Principal #123, Cúcuta, Norte de Santander',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.83543450904!2d-72.5079!3d7.8939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTMnMzguMCJOIDcywrAzMCcyOC40Ilc!5e0!3m2!1ses!2sco!4v1234567890',
  },
  description: 'Cada domingo nos reunimos para adorar, aprender y conectarnos como comunidad.',
}

export const spotifyPlaylist = {
  id: '37i9dQZF1DX4sWSpwq3LiO', // Ejemplo - reemplazar con playlist real
  embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?utm_source=generator',
}

// Datos para la página de Dar
export const paymentMethods: PaymentMethod[] = [
  {
    id: '1',
    name: 'Transferencia Bancaria',
    icon: 'CreditCard',
    description: 'Realiza una transferencia directa a nuestra cuenta bancaria.',
    details: {
      bank: 'Bancolombia',
      account: '123456789',
      accountType: 'Ahorros',
      accountName: 'La Iglesia La Semilla',
    }
  },
  {
    id: '2',
    name: 'Nequi',
    icon: 'Smartphone',
    description: 'Envía tu ofrenda de forma rápida y segura usando Nequi.',
    details: {
      phone: '300 123 4567',
      platform: 'Nequi',
    }
  },
  {
    id: '3',
    name: 'Daviplata',
    icon: 'Smartphone',
    description: 'Realiza tu donación a través de Daviplata de manera instantánea.',
    details: {
      phone: '300 123 4567',
      platform: 'Daviplata',
    }
  },
]

export const whyWeGive: WhyWeGive = {
  title: '¿Por qué damos?',
  items: [
    {
      icon: 'Heart',
      title: 'Ayuda Social',
      description: 'Tu generosidad nos permite servir a familias necesitadas, proveer alimentos y apoyar a nuestra comunidad en tiempos difíciles.'
    },
    {
      icon: 'Smile',
      title: 'Niños',
      description: 'Invertimos en la próxima generación, proporcionando recursos, materiales y programas que impactan la vida de los niños.'
    },
    {
      icon: 'Rocket',
      title: 'Expansión',
      description: 'Cada ofrenda nos ayuda a alcanzar más vidas, abrir nuevas sedes y extender el mensaje de esperanza a más comunidades.'
    }
  ]
}

// Datos para la página Soy Nuevo
export interface SoyNuevoData {
  hero: {
    title: string
    subtitle: string
    image: string
  }
  serviceInfo: Array<{
    title: string
    subtitle: string
    icon: string
  }>
  expectations: Array<{
    title: string
    icon: string
  }>
  kids: {
    title: string
    description: string
  }
  clothes: {
    title: string
    description: string
  }
  location: {
    title: string
    address: string
    helperText: string
    mapUrl: string
    mapsLink: string
    directionsLink: string
  }
}

export const soyNuevoData: SoyNuevoData = {
  hero: {
    title: 'Nos encantaría conocerte',
    subtitle: 'Crea una primera experiencia memorable. Queremos recibirte como parte de nuestra familia.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200'
  },
  serviceInfo: [
    {
      title: 'Domingo',
      subtitle: '10:00 AM',
      icon: 'Clock'
    },
    {
      title: 'Sede Principal',
      subtitle: 'Calle 15 N° 2-16, La Floresta',
      icon: 'MapPin'
    },
    {
      title: 'Contacto',
      subtitle: 'Escríbenos',
      icon: 'MessageCircle'
    }
  ],
  expectations: [
    {
      title: 'Música contemporánea',
      icon: 'Music'
    },
    {
      title: 'Ambiente amigable y cercano',
      icon: 'Heart'
    },
    {
      title: 'Duración aprox. 90 min',
      icon: 'Clock'
    },
    {
      title: 'Gente amable y servicial',
      icon: 'Heart'
    },
    {
      title: 'Mensaje práctico',
      icon: 'BookOpen'
    },
    {
      title: 'Parqueadero disponible',
      icon: 'Car'
    }
  ],
  kids: {
    title: '¿Vienes con niños?',
    description: 'Un espacio seguro, lleno de creatividad y diseñado para que tus hijos amen venir a la iglesia. Tenemos un programa seguro, creativo y divertido diseñado especialmente para ellos.'
  },
  clothes: {
    title: '¿Qué vestir?',
    description: 'Ven como eres. No hay código de vestimenta — queremos que te sientas como en casa.'
  },
  location: {
    title: 'Cómo llegar',
    address: 'Cl. 15 #N°2-16, la playa, Cúcuta, Norte de Santander',
    helperText: 'Nuestro equipo estará feliz de ayudarte',
    // Google Maps embed - REAL iframe from Google Maps "Insertar mapa"
    // This is the exact iframe src that shows the red marker pin at the correct location
    // Location: Iglesia Cristiana La Semilla, Cl. 15 #N°2-16, la playa, Cúcuta
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3952.1205754511684!2d-72.5027373!3d7.8824514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e665b2513404e3f%3A0xdec15b6610dee304!2sIglesia%20Cristiana%20La%20Semilla!5e0!3m2!1sen!2sco!4v1764476454928!5m2!1sen!2sco',
    mapsLink: 'https://maps.app.goo.gl/cG5N5BDSBhQc2zWU8',
    // Using the same Google Maps link for directions to ensure correct location
    directionsLink: 'https://maps.app.goo.gl/cG5N5BDSBhQc2zWU8'
  }
}
