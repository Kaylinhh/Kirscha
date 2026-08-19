// scripts/generate-placeholders.js
// One-off script: downloads a placeholder image for every path referenced
// in data.js, using picsum.photos. Run once, then replace files manually
// in public/images/ as real visuals become available.

import fs from 'fs'
import path from 'path'

const files = [
  // --- previewWorks (used in ArtistCard 2x2 grid, needs consistent 4:3-ish ratio) ---
  { file: 'designs/s4ssybug-1.jpg', w: 500, h: 600, seed: 's4ssybug1' },
  { file: 'designs/s4ssybug-2.jpg', w: 500, h: 600, seed: 's4ssybug2' },
  { file: 'designs/s4ssybug-3.jpg', w: 500, h: 600, seed: 's4ssybug3' },
  { file: 'designs/s4ssybug-4.jpg', w: 500, h: 600, seed: 's4ssybug4' },
  { file: 'designs/minamala-1.jpg', w: 500, h: 600, seed: 'minamala1' },
  { file: 'designs/minamala-2.jpg', w: 500, h: 600, seed: 'minamala2' },
  { file: 'designs/minamala-3.jpg', w: 500, h: 600, seed: 'minamala3' },
  { file: 'designs/minamala-4.jpg', w: 500, h: 600, seed: 'minamala4' },
  { file: 'designs/vanilla-1.jpg', w: 500, h: 600, seed: 'vanilla1' },
  { file: 'designs/vanilla-2.jpg', w: 500, h: 600, seed: 'vanilla2' },
  { file: 'designs/vanilla-3.jpg', w: 500, h: 600, seed: 'vanilla3' },
  { file: 'designs/vanilla-4.jpg', w: 500, h: 600, seed: 'vanilla4' },
  { file: 'designs/juusdrawings-1.jpg', w: 500, h: 600, seed: 'juusdrawings1' },
  { file: 'designs/juusdrawings-2.jpg', w: 500, h: 600, seed: 'juusdrawings2' },
  { file: 'designs/juusdrawings-3.jpg', w: 500, h: 600, seed: 'juusdrawings3' },
  { file: 'designs/juusdrawings-4.jpg', w: 500, h: 600, seed: 'juusdrawings4' },

  // --- works (used in ArtistDetail masonry grid — deliberately varied ratios) ---
  // portrait (tall)
  { file: 'designs/s4ssybug-5.jpg', w: 500, h: 800, seed: 's4ssybug5' },
  // landscape (wide/short)
  { file: 'designs/s4ssybug-6.jpg', w: 600, h: 380, seed: 's4ssybug6' },
  { file: 'designs/minamala-5.jpg', w: 500, h: 750, seed: 'minamala5' },
  { file: 'designs/minamala-6.jpg', w: 600, h: 400, seed: 'minamala6' },
  { file: 'designs/vanilla-5.jpg', w: 500, h: 500, seed: 'vanilla5' },
  { file: 'designs/vanilla-6.jpg', w: 600, h: 850, seed: 'vanilla6' },
  { file: 'designs/juusdrawings-5.jpg', w: 600, h: 420, seed: 'juusdrawings5' },
  { file: 'designs/juusdrawings-6.jpg', w: 500, h: 700, seed: 'juusdrawings6' },

  // --- supports (category grid on Supports page) ---
  { file: 'supports/textiles.jpg', w: 600, h: 400, seed: 'textiles' },
  { file: 'supports/papier.jpg', w: 600, h: 400, seed: 'papier' },
  { file: 'supports/accessoires.jpg', w: 600, h: 400, seed: 'accessoires' },
  { file: 'supports/vaisselle.jpg', w: 600, h: 400, seed: 'vaisselle' },

  // --- previews (blank product mockups, swapped when picking a support) ---
  { file: 'previews/tshirt-blank.jpg', w: 600, h: 600, seed: 'tshirt' },
  { file: 'previews/sweatshirt-blank.jpg', w: 600, h: 600, seed: 'sweatshirt' },
  { file: 'previews/casquette-blank.jpg', w: 600, h: 600, seed: 'casquette' },
  { file: 'previews/totebag-blank.jpg', w: 600, h: 600, seed: 'totebag' },
  { file: 'previews/linge-blank.jpg', w: 600, h: 600, seed: 'linge' },
  { file: 'previews/poster-blank.jpg', w: 600, h: 600, seed: 'poster' },
  { file: 'previews/carte-blank.jpg', w: 600, h: 600, seed: 'carte' },
  { file: 'previews/coque-blank.jpg', w: 600, h: 600, seed: 'coque' },
  { file: 'previews/mug-blank.jpg', w: 600, h: 600, seed: 'mug' },

  // --- rooms (base + per-element color variants) ---
  { file: 'rooms/chambre-base.jpg', w: 1000, h: 600, seed: 'chambre-base' },
  { file: 'rooms/chambre-mur1-blanc.jpg', w: 1000, h: 600, seed: 'chambre-blanc' },
  { file: 'rooms/chambre-mur1-jaune.jpg', w: 1000, h: 600, seed: 'chambre-jaune' },
  { file: 'rooms/chambre-mur1-rouge.jpg', w: 1000, h: 600, seed: 'chambre-rouge' },
  { file: 'rooms/chambre-mur1-violet.jpg', w: 1000, h: 600, seed: 'chambre-violet' },
  { file: 'rooms/chambre-lit-violet.jpg', w: 1000, h: 600, seed: 'lit-violet' },
  { file: 'rooms/chambre-lit-bleu.jpg', w: 1000, h: 600, seed: 'lit-bleu' },
  { file: 'rooms/salon-base.jpg', w: 1000, h: 600, seed: 'salon-base' },
  { file: 'rooms/salon-canape-gris.jpg', w: 1000, h: 600, seed: 'canape-gris' },
  { file: 'rooms/salon-canape-terracotta.jpg', w: 1000, h: 600, seed: 'canape-terracotta' },
]

const baseDir = path.join(process.cwd(), 'public', 'images')

async function downloadOne({ file, w, h, seed }) {
  const url = `https://picsum.photos/seed/${seed}/${w}/${h}`
  const dest = path.join(baseDir, file)
  fs.mkdirSync(path.dirname(dest), { recursive: true })

  const res = await fetch(url)
  if (!res.ok) {
    console.error(`✗ Failed: ${file} (status ${res.status})`)
    return
  }
  const buffer = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(dest, buffer)
  console.log(`✓ ${file}`)
}

async function run() {
  console.log(`Downloading ${files.length} placeholder images...\n`)
  for (const entry of files) {
    await downloadOne(entry)
  }
  console.log('\nDone. Replace files in public/images/ with real visuals as they become available.')
}

run()