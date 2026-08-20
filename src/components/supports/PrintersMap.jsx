// src/components/supports/PrintersMap.jsx
import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { printers } from '../../data/data'

// Lives inside MapContainer, listens for the selected printer and flies to it
function FlyToPrinter({ printerId, markerRefs }) {
  const map = useMap()

  useEffect(() => {
    if (!printerId) return
    const printer = printers.find((p) => p.id === printerId)
    if (!printer) return

    map.flyTo([printer.lat, printer.lng], 15)
    markerRefs.current[printerId]?.openPopup()
  }, [printerId, map])

  return null
}

function PrintersMap() {
  const [selectedPrinterId, setSelectedPrinterId] = useState(null)
  const markerRefs = useRef({})

  return (
    <div className="mt-10 flex flex-col sm:flex-row gap-6 items-stretch">
      {/* LEFT COLUMN — text bubbles + arrow */}
      <div className="flex-1 flex flex-col items-center h-[400px]">
        <div className="w-fit border-l-4 border-b-4 border-kirscha-green-700 rounded-bl-2xl px-5 py-3">
          <p className="font-display text-lg text-kirscha-green-900">
            Trouve les imprimeurs partenaires autour de chez toi...
          </p>
        </div>

        <div className="w-fit border-l-4 border-b-4 border-kirscha-green-700 rounded-bl-2xl px-5 py-3 mt-6 mb-6">
          <p className="font-display text-lg text-kirscha-green-900">
            Et découvre les services qu'ils proposent !
          </p>
        </div>

        <svg viewBox="0 0 140 50" className="w-32 ml-8">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="7"
              markerHeight="7"
              refX="6"
              refY="3.5"
              orient="auto"
            >
              <path
                d="M0.5,0.5 L6.5,3.5 L0.5,6.5"
                fill="none"
                stroke="var(--color-kirscha-green-700)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>
          <path
            d="M8 22 C 50 40, 100 22, 128 22"
            fill="none"
            stroke="var(--color-kirscha-green-700)"
            strokeWidth="4"
            strokeLinecap="round"
            markerEnd="url(#arrowhead)"
          />
        </svg>
      </div>

      {/* RIGHT COLUMN — map + printer list */}
      <div className="flex-1 flex min-w-0">
        <div className="flex-1 min-w-0">
          <MapContainer
            center={[44.8378, -0.576]}
            zoom={13}
            style={{ height: '400px', width: '100%' }}
            className="rounded-l-md border border-kirscha-green-700"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <FlyToPrinter printerId={selectedPrinterId} markerRefs={markerRefs} />

            {printers.map((printer) => (
              <Marker
                key={printer.id}
                position={[printer.lat, printer.lng]}
                ref={(el) => {
                  markerRefs.current[printer.id] = el
                }}
              >
                <Popup>
                  <strong>{printer.name}</strong>
                  <br />
                  {printer.address}
                  <br />
                  {printer.services.join(', ')}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="w-24 sm:w-36 shrink-0 bg-kirscha-green-700 rounded-r-md border border-l-0 border-kirscha-green-700 flex flex-col justify-center gap-3 px-2 sm:px-4 py-2">
          {printers.map((printer) => (
            <button
              key={printer.id}
              onClick={() => setSelectedPrinterId(printer.id)}
              className="font-body text-left text-sm sm:text-base text-kirscha-green-100 hover:text-kirscha-green-100/70 transition"
            >
              {printer.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PrintersMap