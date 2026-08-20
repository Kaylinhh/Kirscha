// src/pages/SupportCategory.jsx
import { useParams, Link } from 'react-router-dom'
import { supportCategories } from '../data/data'

function SupportCategory() {
  const { categoryId } = useParams()
  const category = supportCategories.find((c) => c.id === categoryId)

  if (!category) {
    return <p className="p-8">Catégorie introuvable.</p>
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-display text-kirscha-green-700 text-center mb-10">
        {category.label}
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {category.items.map((item) => (
          <div key={item.id}>
            <img
              src={item.mockup}
              alt={item.label}
              className="w-full aspect-square object-cover rounded-md border border-kirscha-green-700"
            />
            <p className="text-center font-body text-kirscha-green-900 mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SupportCategory