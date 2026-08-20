import { useState } from 'react'
import { supportCategories } from '../../data/data'

function SupportPicker({ artworkImage, onBack }) {
  const [activeCategory, setActiveCategory] = useState(null)
  const [previewImage, setPreviewImage] = useState(artworkImage)

  const category = supportCategories.find((c) => c.id === activeCategory)

  return (
    <div className="flex flex-col sm:flex-row gap-0 mt-10 mx-50">
      <img
        src={previewImage}
        alt=""
        className="w-full sm:w-1/2 object-cover"
      />

      <div className="w-full sm:w-1/2 bg-kirscha-green-700 p-10">
        <h2 className="font-display text-3xl text-kirscha-green-100 mb-6">
          Choisis ton support !
        </h2>

        <button
          onClick={onBack}
          className="font-body text-kirscha-green-100 underline mb-6 block"
        >
          ← Retour aux œuvres
        </button>

        <div className="flex flex-col gap-3">
          {!category &&
            supportCategories.map((cat) => (
                <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="bg-kirscha-green-100 hover:bg-kirscha-green-400 transition text-kirscha-green-700 font-body font-semibold px-6 py-3 rounded-full text-left"
                >
                {cat.label}
                </button>
            ))}

            {category &&
            category.items.map((item) => (
                <button
                key={item.id}
                onClick={() => setPreviewImage(item.mockup)}
                className="bg-transparent hover:bg-kirscha-green-900 transition border border-kirscha-green-100 text-kirscha-green-100 font-body font-semibold px-6 py-3 rounded-full text-left"
                >
                {item.label}
                </button>
            ))}
        </div>
      </div>
    </div>
  )
}

export default SupportPicker