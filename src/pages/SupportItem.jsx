import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { supportCategories, designs } from '../data/data'
import SupportPicker from '../components/preview/SupportPicker'

function SupportItem() {
  const { categoryId, itemId } = useParams()
  const category = supportCategories.find((c) => c.id === categoryId)
  const item = category?.items.find((i) => i.id === itemId)
  const [selectedDesign, setSelectedDesign] = useState(null)

  if (!item) {
    return <p className="p-8">Produit introuvable.</p>
  }

  if (selectedDesign) {
    return (
      <div className="p-8">
        <SupportPicker
          artworkImage={selectedDesign.image}
          initialCategoryId={categoryId}
          initialItemId={itemId}
          onBack={() => setSelectedDesign(null)}
        />
      </div>
    )
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-display text-kirscha-green-700 text-center mb-10">
        {item.label}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {item.examples.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${item.label} exemple ${i + 1}`}
            className="w-full aspect-square object-cover rounded-md border border-kirscha-green-700"
          />
        ))}
      </div>

      <h2 className="font-display text-2xl text-kirscha-green-700 text-center mb-6">
        Choisis une œuvre à imprimer dessus
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {designs.map((d) => (
          <img
            key={d.id}
            src={d.image}
            alt={d.title}
            onClick={() => setSelectedDesign(d)}
            className="w-full aspect-3/4 object-cover rounded-md border border-kirscha-green-700 cursor-pointer hover:opacity-80 transition"
          />
        ))}
      </div>
    </div>
  )
}

export default SupportItem