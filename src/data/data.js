// ===== ARTISTS =====
export const artists = [
  {
    id: 'a1',
    name: '_s4ssybug_',
    bio: "Hello! Je suis étudiante en art et fashion victim avérée. Mon style s'inspire énormément des mangas dans la forme et de mes passions dans le fond :)",
    social: '@_s455ybug_',
    instagramUrl: 'https://instagram.com/_s455ybug_',
    previewWorks: [
      '/images/designs/s4ssybug-1.jpg',
      '/images/designs/s4ssybug-2.jpg',
      '/images/designs/s4ssybug-3.jpg',
      '/images/designs/s4ssybug-4.jpg',
    ],
    works: [
      '/images/designs/s4ssybug-1.jpg',
      '/images/designs/s4ssybug-2.jpg',
      '/images/designs/s4ssybug-3.jpg',
      '/images/designs/s4ssybug-4.jpg',
      '/images/designs/s4ssybug-5.jpg',
      '/images/designs/s4ssybug-6.jpg',
    ]
  },
  {
    id: 'a2',
    name: 'minamala_',
    bio: "Illustratrice freelance, fan de contrastes forts et de noir & blanc. J'aime raconter des histoires en une seule image.",
    social: '@minamala__',
    instagramUrl: 'https://instagram.com/minamala__',
    previewWorks: [
      '/images/designs/minamala-1.jpg',
      '/images/designs/minamala-2.jpg',
      '/images/designs/minamala-3.jpg',
      '/images/designs/minamala-4.jpg',
    ],
    works: [
      '/images/designs/minamala-1.jpg',
      '/images/designs/minamala-2.jpg',
      '/images/designs/minamala-3.jpg',
      '/images/designs/minamala-4.jpg',
      '/images/designs/minamala-5.jpg',
      '/images/designs/minamala-6.jpg',
    ]
  },
  {
    id: 'a3',
    name: 'vanillaandcrimes',
    bio: "Pop art, humour noir et couleurs criardes. Je dessine ce qui me fait rire (ou pas).",
    social: '@vanillaandcrimes',
    instagramUrl: 'https://instagram.com/vanillaandcrimes',
    previewWorks: [
      '/images/designs/vanilla-1.jpg',
      '/images/designs/vanilla-2.jpg',
      '/images/designs/vanilla-3.jpg',
      '/images/designs/vanilla-4.jpg',
    ],
    works: [
      '/images/designs/vanilla-1.jpg',
      '/images/designs/vanilla-2.jpg',
      '/images/designs/vanilla-3.jpg',
      '/images/designs/vanilla-4.jpg',
      '/images/designs/vanilla-5.jpg',
      '/images/designs/vanilla-6.jpg'
    ]
  },
  {
    id: 'a4',
    name: 'juusdrawings',
    bio: "Juust drawing cute stuff ⭐",
    social: '@juusdrawings',
    instagramUrl: 'https://instagram.com/juusdrawings',
    previewWorks: [
      '/images/designs/juusdrawings-1.jpg',
      '/images/designs/juusdrawings-2.jpg',
      '/images/designs/juusdrawings-3.jpg',
      '/images/designs/juusdrawings-4.jpg',
    ],
    works: [
      '/images/designs/juusdrawings-1.jpg',
      '/images/designs/juusdrawings-2.jpg',
      '/images/designs/juusdrawings-3.jpg',
      '/images/designs/juusdrawings-4.jpg',
      '/images/designs/juusdrawings-5.jpg',
      '/images/designs/juusdrawings-6.jpg'
    ]
  },
]

// ===== DESIGNS (artworks) =====
// subject: 'anime' | 'voyage' | 'portrait' | 'animaux' | 'nourriture' | 'nature'
// style: 'minimaliste' | 'enfantin' | 'cartoon' | 'realiste' | 'caricatural' | 'oneline' | 'geometrique' | 'abstrait' | 'manga' | 'traditionnel-japonais' | 'gravure'
// colorPalette: 'chaudes' | 'froides' | 'pastels' | 'neutres'
export const designs = [
  {
    id: 'd1',
    title: 'Forêt violette',
    image: '/images/designs/s4ssybug-2.jpg',
    artistId: 'a1',
    subject: 'nature',
    style: 'realiste',
    colorPalette: 'froides',
  },
  {
    id: 'd2',
    title: 'Sugar Rone',
    image: '/images/designs/s4ssybug-1.jpg',
    artistId: 'a1',
    subject: 'portrait',
    style: 'manga',
    colorPalette: 'pastels',
  },
  {
    id: 'd3',
    title: 'Sale rêve',
    image: '/images/designs/minamala-1.jpg',
    artistId: 'a2',
    subject: 'portrait',
    style: 'gravure',
    colorPalette: 'neutres',
  },
  {
    id: 'd4',
    title: 'We spent last summer',
    image: '/images/designs/minamala-2.jpg',
    artistId: 'a2',
    subject: 'portrait',
    style: 'caricatural',
    colorPalette: 'neutres',
  },
  {
    id: 'd5',
    title: 'Girls only',
    image: '/images/designs/vanilla-1.jpg',
    artistId: 'a3',
    subject: 'animaux',
    style: 'cartoon',
    colorPalette: 'chaudes',
  },
  {
    id: 'd6',
    title: 'Chien tennis',
    image: '/images/designs/vanilla-2.jpg',
    artistId: 'a3',
    subject: 'animaux',
    style: 'cartoon',
    colorPalette: 'chaudes',
  },
  {
    id: 'd7',
    title: 'Chat one line',
    image: '/images/designs/minimals-1.jpg',
    artistId: 'a4',
    subject: 'animaux',
    style: 'oneline',
    colorPalette: 'neutres',
  },
  {
    id: 'd8',
    title: 'Corps one line',
    image: '/images/designs/minimals-2.jpg',
    artistId: 'a4',
    subject: 'portrait',
    style: 'oneline',
    colorPalette: 'neutres',
  },
  {
    id: 'd9',
    title: 'Œuf au plat',
    image: '/images/designs/vanilla-3.jpg',
    artistId: 'a3',
    subject: 'nourriture',
    style: 'realiste',
    colorPalette: 'chaudes',
  },
  {
    id: 'd10',
    title: 'Biche',
    image: '/images/designs/minamala-3.jpg',
    artistId: 'a2',
    subject: 'animaux',
    style: 'realiste',
    colorPalette: 'chaudes',
  },
]

// ===== FILTER OPTIONS (for the dropdown menus) =====
export const filterOptions = {
  subjects: [
    { id: 'anime', label: 'Anime' },
    { id: 'voyage', label: 'Voyage' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'animaux', label: 'Animaux' },
    { id: 'nourriture', label: 'Nourriture' },
    { id: 'nature', label: 'Nature' },
  ],
  styles: [
    { id: 'minimaliste', label: 'Minimaliste' },
    { id: 'enfantin', label: 'Enfantin' },
    { id: 'cartoon', label: 'Cartoon & BD' },
    { id: 'realiste', label: 'Réaliste' },
    { id: 'caricatural', label: 'Caricatural' },
    { id: 'oneline', label: 'One Line' },
    { id: 'geometrique', label: 'Géométrique' },
    { id: 'abstrait', label: 'Abstrait' },
    { id: 'manga', label: 'Manga' },
    { id: 'traditionnel-japonais', label: 'Traditionnel Japonais' },
    { id: 'gravure', label: 'Gravure' },
  ],
  colors: [
    { id: 'chaudes', label: 'Chaudes' },
    { id: 'froides', label: 'Froides' },
    { id: 'pastels', label: 'Pastels' },
    { id: 'neutres', label: 'Neutres' },
  ],
}

// ===== SUPPORTS (print-on-demand product categories) =====
export const supportCategories = [
  {
    id: 'textiles',
    label: 'Textiles',
    image: '/images/supports/textiles.jpg',
    items: [
      { id: 'tshirt', label: 'T-shirt', mockup: '/images/previews/tshirt-blank.jpg' },
      { id: 'sweatshirt', label: 'Sweatshirt', mockup: '/images/previews/sweatshirt-blank.jpg' },
      { id: 'casquette', label: 'Casquette', mockup: '/images/previews/casquette-blank.jpg' },
      { id: 'totebag', label: 'Tote Bag', mockup: '/images/previews/totebag-blank.jpg' },
      { id: 'linge', label: 'Coussins et linge de lit', mockup: '/images/previews/linge-blank.jpg' },
    ],
  },
  {
    id: 'papier',
    label: 'Papier',
    image: '/images/supports/papier.jpg',
    items: [
      { id: 'poster', label: 'Poster', mockup: '/images/previews/poster-blank.jpg' },
      { id: 'carte', label: 'Carte postale', mockup: '/images/previews/carte-blank.jpg' },
    ],
  },
  {
    id: 'accessoires',
    label: 'Accessoires',
    image: '/images/supports/accessoires.jpg',
    items: [
      { id: 'coque', label: 'Coque de téléphone', mockup: '/images/previews/coque-blank.jpg' },
    ],
  },
  {
    id: 'vaisselle',
    label: 'Vaisselle',
    image: '/images/supports/vaisselle.jpg',
    items: [
      { id: 'mug', label: 'Mug', mockup: '/images/previews/mug-blank.jpg' },
    ],
  },
]

// ===== PRINTERS (fake partners, Bordeaux coordinates) =====
export const printers = [
  {
    id: 'p1',
    name: 'Popelup',
    lat: 44.8404,
    lng: -0.5805,
    address: '12 rue Sainte-Catherine, Bordeaux',
    services: ['Textiles', 'Papier'],
  },
  {
    id: 'p2',
    name: 'Imprimeur B',
    lat: 44.8378,
    lng: -0.5792,
    address: "5 cours de l'Intendance, Bordeaux",
    services: ['Vaisselle', 'Accessoires'],
  },
  {
    id: 'p3',
    name: 'Imprimeur C',
    lat: 44.8512,
    lng: -0.5638,
    address: '20 quai de Brazza, Bordeaux',
    services: ['Textiles'],
  },
  {
    id: 'p4',
    name: 'Imprimerie D',
    lat: 44.8291,
    lng: -0.5723,
    address: '8 rue du Palais Gallien, Bordeaux',
    services: ['Papier', 'Accessoires'],
  },
  {
    id: 'p5',
    name: 'Ça imprime ici',
    lat: 44.8456,
    lng: -0.5901,
    address: '3 place Gambetta, Bordeaux',
    services: ['Vaisselle', 'Textiles'],
  },
  {
    id: 'p6',
    name: 'Print & Fun',
    lat: 44.8203,
    lng: -0.5654,
    address: '17 avenue Thiers, Bordeaux',
    services: ['Accessoires', 'Papier'],
  },
]

// ===== ROOM COOKIES ("Mon chez moi" — homemade cookies preference system) =====
// Each room has customizable elements; picking a color swaps to a pre-made image.
export const rooms = [
  {
    id: 'chambre',
    name: 'Ma chambre',
    baseImage: '/images/rooms/chambre-base.jpg',
    elements: [
      {
        id: 'mur1',
        label: 'Mur 1',
        options: [
          { color: '#ffffff', image: '/images/rooms/chambre-mur1-blanc.jpg' },
          { color: '#f4d03f', image: '/images/rooms/chambre-mur1-jaune.jpg' },
          { color: '#e74c3c', image: '/images/rooms/chambre-mur1-rouge.jpg' },
          { color: '#8e44ad', image: '/images/rooms/chambre-mur1-violet.jpg' },
        ],
      },
      {
        id: 'lit',
        label: 'Lit',
        options: [
          { color: '#6c3483', image: '/images/rooms/chambre-lit-violet.jpg' },
          { color: '#2874a6', image: '/images/rooms/chambre-lit-bleu.jpg' },
        ],
      },
    ],
  },
  {
    id: 'salon',
    name: 'Mon salon',
    baseImage: '/images/rooms/salon-base.jpg',
    elements: [
      {
        id: 'canape',
        label: 'Canapé',
        options: [
          { color: '#d5dbdb', image: '/images/rooms/salon-canape-gris.jpg' },
          { color: '#e59866', image: '/images/rooms/salon-canape-terracotta.jpg' },
        ],
      },
    ],
  },
]