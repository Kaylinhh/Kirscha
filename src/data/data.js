// ===== ARTISTS =====
export const artists = [
  {
    id: 'a1',
    name: '_s4ssybug_',
    bio: "Hello! Je suis étudiante en art et fashion victim avérée. Mon style s'inspire énormément des mangas dans la forme et de mes passions dans le fond :)",
    social: '@_s455ybug_',
    instagramUrl: 'https://instagram.com/_s455ybug_',
  },
  {
    id: 'a2',
    name: 'minamala_',
    bio: "Illustratrice freelance, fan de contrastes forts et de noir & blanc. J'aime raconter des histoires en une seule image.",
    social: '@minamala__',
    instagramUrl: 'https://instagram.com/minamala__',
  },
  {
    id: 'a3',
    name: 'vanillaandcrimes',
    bio: "Pop art, humour noir et couleurs criardes. Je dessine ce qui me fait rire (ou pas).",
    social: '@vanillaandcrimes',
    instagramUrl: 'https://instagram.com/vanillaandcrimes',
  },
  {
    id: 'a4',
    name: 'juusdrawings',
    bio: "Juust drawing cute stuff ⭐",
    social: '@juusdrawings',
    instagramUrl: 'https://instagram.com/juusdrawings',
  },
]

// ===== DESIGNS (artworks — single source of truth, linked to artists via artistId) =====
export const designs = [
  // --- _s4ssybug_ (a1) ---
  { id: 'd1', title: 'Sugar Rone', image: '/images/designs/s4ssybug-1.jpg', artistId: 'a1', subject: 'portrait', style: 'manga', colorPalette: 'pastels' },
  { id: 'd2', title: 'Forêt violette', image: '/images/designs/s4ssybug-2.jpg', artistId: 'a1', subject: 'nature', style: 'realiste', colorPalette: 'froides' },
  { id: 'd3', title: 'Sèche-cheveux', image: '/images/designs/s4ssybug-3.jpg', artistId: 'a1', subject: 'portrait', style: 'manga', colorPalette: 'pastels' },
  { id: 'd4', title: 'My Little Pony girls', image: '/images/designs/s4ssybug-4.jpg', artistId: 'a1', subject: 'portrait', style: 'cartoon', colorPalette: 'pastels' },
  { id: 'd5', title: 'Téléphone rouge', image: '/images/designs/s4ssybug-5.jpg', artistId: 'a1', subject: 'portrait', style: 'manga', colorPalette: 'chaudes' },
  { id: 'd6', title: 'Croquis forêt', image: '/images/designs/s4ssybug-6.jpg', artistId: 'a1', subject: 'nature', style: 'oneline', colorPalette: 'neutres' },

  // --- minamala_ (a2) ---
  { id: 'd7', title: 'Sale rêve', image: '/images/designs/minamala-1.jpg', artistId: 'a2', subject: 'portrait', style: 'gravure', colorPalette: 'neutres' },
  { id: 'd8', title: 'We spent last summer', image: '/images/designs/minamala-2.jpg', artistId: 'a2', subject: 'portrait', style: 'caricatural', colorPalette: 'neutres' },
  { id: 'd9', title: 'Biche', image: '/images/designs/minamala-3.jpg', artistId: 'a2', subject: 'animaux', style: 'enfantin', colorPalette: 'chaudes' },
  { id: 'd10', title: 'Attack on Titan', image: '/images/designs/minamala-4.jpg', artistId: 'a2', subject: 'anime', style: 'manga', colorPalette: 'froides' },
  { id: 'd11', title: 'Geisha', image: '/images/designs/minamala-5.jpg', artistId: 'a2', subject: 'portrait', style: 'traditionnel-japonais', colorPalette: 'neutres' },
  { id: 'd12', title: 'Toits de ville', image: '/images/designs/minamala-6.jpg', artistId: 'a2', subject: 'voyage', style: 'gravure', colorPalette: 'neutres' },

  // --- vanillaandcrimes (a3) ---
  { id: 'd13', title: 'Girls only', image: '/images/designs/vanilla-1.jpg', artistId: 'a3', subject: 'animaux', style: 'cartoon', colorPalette: 'chaudes' },
  { id: 'd14', title: 'Chien tennis', image: '/images/designs/vanilla-2.jpg', artistId: 'a3', subject: 'animaux', style: 'cartoon', colorPalette: 'chaudes' },
  { id: 'd15', title: 'Œuf au plat', image: '/images/designs/vanilla-3.jpg', artistId: 'a3', subject: 'nourriture', style: 'realiste', colorPalette: 'chaudes' },
  { id: 'd16', title: 'We spent last summer', image: '/images/designs/vanilla-4.jpg', artistId: 'a3', subject: 'portrait', style: 'caricatural', colorPalette: 'neutres' },
  { id: 'd17', title: 'Rats girls only', image: '/images/designs/vanilla-5.jpg', artistId: 'a3', subject: 'animaux', style: 'cartoon', colorPalette: 'chaudes' },
  { id: 'd18', title: 'So differently', image: '/images/designs/vanilla-6.jpg', artistId: 'a3', subject: 'portrait', style: 'geometrique', colorPalette: 'neutres' },

  // --- minimals_ (a4) ---
  { id: 'd19', title: 'Chat one line', image: '/images/designs/minimals-1.jpg', artistId: 'a4', subject: 'animaux', style: 'oneline', colorPalette: 'neutres' },
  { id: 'd20', title: 'Corps one line', image: '/images/designs/minimals-2.jpg', artistId: 'a4', subject: 'portrait', style: 'oneline', colorPalette: 'neutres' },
  { id: 'd21', title: 'Fleur one line', image: '/images/designs/minimals-3.jpg', artistId: 'a4', subject: 'nature', style: 'enfantin', colorPalette: 'neutres' },
  { id: 'd22', title: 'Minimaliste géo', image: '/images/designs/minimals-4.jpg', artistId: 'a4', subject: 'voyage', style: 'geometrique', colorPalette: 'neutres' },
  { id: 'd23', title: 'Portrait abstrait', image: '/images/designs/minimals-5.jpg', artistId: 'a4', subject: 'portrait', style: 'abstrait', colorPalette: 'froides' },
  { id: 'd24', title: 'Paysage minimal', image: '/images/designs/minimals-6.jpg', artistId: 'a4', subject: 'nature', style: 'minimaliste', colorPalette: 'pastels' },
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
      {
        id: 'tshirt',
        label: 'T-shirt',
        mockup: '/images/previews/tshirt-blank.jpg',
        examples: [
          '/images/previews/tshirt-1.jpg',
          '/images/previews/tshirt-2.jpg',
          '/images/previews/tshirt-3.jpg',
        ],
      },
      {
        id: 'sweatshirt',
        label: 'Sweatshirt',
        mockup: '/images/previews/sweatshirt-blank.jpg',
        examples: [
          '/images/previews/sweatshirt-1.jpg',
          '/images/previews/sweatshirt-2.jpg',
          '/images/previews/sweatshirt-3.jpg',
        ],
      },
      {
        id: 'casquette',
        label: 'Casquette',
        mockup: '/images/previews/casquette-blank.jpg',
        examples: [
          '/images/previews/casquette-1.jpg',
          '/images/previews/casquette-2.jpg',
          '/images/previews/casquette-3.jpg',
        ],
      },
      {
        id: 'totebag',
        label: 'Tote Bag',
        mockup: '/images/previews/totebag-blank.jpg',
        examples: [
          '/images/previews/totebag-1.jpg',
          '/images/previews/totebag-2.jpg',
          '/images/previews/totebag-3.jpg',
        ],
      },
      {
        id: 'linge',
        label: 'Coussins et linge de lit',
        mockup: '/images/previews/linge-blank.jpg',
        examples: [
          '/images/previews/linge-1.jpg',
          '/images/previews/linge-2.jpg',
          '/images/previews/linge-3.jpg',
        ],
      },
    ],
  },
  {
    id: 'papier',
    label: 'Papier',
    image: '/images/supports/papier.jpg',
    items: [
      {
        id: 'poster',
        label: 'Poster',
        mockup: '/images/previews/poster-blank.jpg',
        examples: [
          '/images/previews/poster-1.jpg',
          '/images/previews/poster-2.jpg',
          '/images/previews/poster-3.jpg',
        ],
      },
      {
        id: 'carte',
        label: 'Carte postale',
        mockup: '/images/previews/carte-blank.jpg',
        examples: [
          '/images/previews/carte-1.jpg',
          '/images/previews/carte-2.jpg',
          '/images/previews/carte-3.jpg',
        ],
      },
    ],
  },
  {
    id: 'accessoires',
    label: 'Accessoires',
    image: '/images/supports/accessoires.jpg',
    items: [
      {
        id: 'coque',
        label: 'Coque de téléphone',
        mockup: '/images/previews/coque-blank.jpg',
        examples: [
          '/images/previews/coque-1.jpg',
          '/images/previews/coque-2.jpg',
          '/images/previews/coque-3.jpg',
        ],
      },
    ],
  },
  {
    id: 'vaisselle',
    label: 'Vaisselle',
    image: '/images/supports/vaisselle.jpg',
    items: [
      {
        id: 'mug',
        label: 'Mug',
        mockup: '/images/previews/mug-blank.jpg',
        examples: [
          '/images/previews/mug-1.jpg',
          '/images/previews/mug-2.jpg',
          '/images/previews/mug-3.jpg',
        ],
      },
    ],
  },
]

// ===== PRINTERS (fake partners, Bordeaux coordinates) =====
export const printers = [
  { id: 'p1', name: 'Popelup', lat: 44.8404, lng: -0.575, address: '12 rue Sainte-Catherine, Bordeaux', services: ['Textiles', 'Papier'] },
  { id: 'p2', name: 'Imprimeur B', lat: 44.842, lng: -0.576, address: "5 cours de l'Intendance, Bordeaux", services: ['Vaisselle', 'Accessoires'] },
  { id: 'p3', name: 'Imprimeur C', lat: 44.846, lng: -0.556, address: '20 quai de Brazza, Bordeaux', services: ['Textiles'] },
  { id: 'p4', name: 'Imprimerie D', lat: 44.843, lng: -0.581, address: '8 rue du Palais Gallien, Bordeaux', services: ['Papier', 'Accessoires'] },
  { id: 'p5', name: 'Ça imprime ici', lat: 44.841, lng: -0.576, address: '3 place Gambetta, Bordeaux', services: ['Vaisselle', 'Textiles'] },
  { id: 'p6', name: 'Print & Fun', lat: 44.831, lng: -0.598, address: '17 avenue Thiers, Bordeaux', services: ['Accessoires', 'Papier'] },
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