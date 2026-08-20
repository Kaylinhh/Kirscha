import { useState } from 'react'

function FilterDropdown({ label, options, activeValue, onSelect }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-display text-lg text-kirscha-green-900 px-4 py-2"
      >
        {label}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full bg-kirscha-green-400/90 backdrop-blur-sm w-64 py-4 px-6 flex flex-col gap-2 z-10">
          <button
            onClick={() => {
              onSelect(null)
              setIsOpen(false)
            }}
            className="text-left font-body text-kirscha-green-100"
          >
            Tous
          </button>
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                onSelect(opt.id)
                setIsOpen(false)
              }}
              className={`text-left font-body ${
                activeValue === opt.id
                  ? 'text-kirscha-green-900 font-semibold'
                  : 'text-kirscha-green-100'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default FilterDropdown