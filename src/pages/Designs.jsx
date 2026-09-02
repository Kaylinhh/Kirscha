import { useState } from 'react'
import { designs, filterOptions } from '../data/data'
import FilterDropdown from '../components/designs/FilterDropdown'
import SupportPicker from '../components/preview/SupportPicker'

function Designs() {
  const [subject, setSubject] = useState(null)
  const [style, setStyle] = useState(null)
  const [color, setColor] = useState(null)
  const [selectedWork, setSelectedWork] = useState(null)

  const handleSubjectSelect = (value) => { setSubject(value); setStyle(null); setColor(null) }
  const handleStyleSelect = (value) => { setStyle(value); setSubject(null); setColor(null) }
  const handleColorSelect = (value) => { setColor(value); setSubject(null); setStyle(null) }

  const filteredDesigns = designs.filter((d) => {
    if (subject && d.subject !== subject) return false
    if (style && d.style !== style) return false
    if (color && d.colorPalette !== color) return false
    return true
  })

  if (selectedWork) {
    return (
      <div className="p-8">
        <SupportPicker artworkImage={selectedWork.image} onBack={() => setSelectedWork(null)} />
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-around bg-kirscha-green-400 py-2">
        <FilterDropdown label="Sujet" options={filterOptions.subjects} activeValue={subject} onSelect={handleSubjectSelect} />
        <FilterDropdown label="Style Graphique" options={filterOptions.styles} activeValue={style} onSelect={handleStyleSelect} />
        <FilterDropdown label="Couleurs" options={filterOptions.colors} activeValue={color} onSelect={handleColorSelect} />
      </div>

      <div className="p-8">
        {filteredDesigns.length === 0 ? (
          <p className="text-center font-body text-kirscha-green-900">Aucune œuvre ne correspond à ces filtres.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {filteredDesigns.map((d) => (
              <img
                key={d.id}
                src={d.image}
                alt={d.title}
                onClick={() => setSelectedWork(d)}
                className="w-full aspect-3/4 object-cover rounded-md border border-kirscha-green-700 cursor-pointer hover:opacity-80 transition"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Designs