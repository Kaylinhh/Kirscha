// scripts/generate-placeholders.js
// One-off script: downloads a placeholder image for every path referenced
// in data.js, using picsum.photos. Run once, then replace files manually
// in public/images/ as real visuals become available.

import fs from 'fs'
import path from 'path'

const artistPrefixes = ['s4ssybug', 'minamala', 'vanilla', 'minimals']

// 6 designs per artist, varied ratios for a nice masonry effect
const designSizes = [
  { w: 500, h: 600 }, // 1 - portrait-ish
  { w: 500, h: 600 }, // 2 - portrait-ish
  { w: 500, h: 600 }, // 3 - portrait-ish
  { w: 500, h: 600 }, // 4 - portrait-ish
  { w: 500, h: 800 }, // 5 - tall
  { w: 600, h: 380 }, // 6 - wide/short
]

const designFiles = artistPrefixes.flatMap((prefix) =>
  designSizes.map((size, i) => ({
    file: `designs/${prefix}-${i + 1}.jpg`,
    w: size.w,
    h: size.h,
    seed: `${prefix}${i + 1}`,
  }))
)

const otherFiles = [
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

const files = [...designFiles, ...otherFiles]

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