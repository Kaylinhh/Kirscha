import { useParams } from 'react-router-dom'
import { rooms } from '../data/data'
import { useLocalStorage } from '../hooks/useLocalStorage'

function RoomEditor() {
  const { roomId } = useParams()
  const room = rooms.find((r) => r.id === roomId)

  const [selections, setSelections] = useLocalStorage(`kirscha-room-${roomId}`, {})

  if (!room) {
    return <p className="p-8">Pièce introuvable.</p>
  }

  const handleSelect = (elementId, option) => {
    setSelections({ ...selections, [elementId]: option })
  }

  // The displayed image is the last-selected element's option, or the room's default base image
  const selectedOptions = Object.values(selections)
  const currentImage =
    selectedOptions.length > 0
      ? selectedOptions[selectedOptions.length - 1].image
      : room.baseImage

  return (
    <div className="p-8 flex flex-col sm:flex-row gap-6">
      <div className="w-full sm:w-64 shrink-0 bg-kirscha-green-700 rounded-md p-6">
        <h1 className="font-display text-2xl text-kirscha-green-100 mb-6">
          {room.name}
        </h1>

        <div className="flex flex-col gap-5">
          {room.elements.map((element) => (
            <div key={element.id}>
              <p className="font-body text-kirscha-green-100 mb-2">{element.label}</p>
              <div className="flex flex-wrap gap-2">
                {element.options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(element.id, option)}
                    style={{ backgroundColor: option.color }}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selections[element.id] === option
                        ? 'border-kirscha-green-100'
                        : 'border-transparent'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        src={currentImage}
        alt={room.name}
        className="flex-1 w-full aspect-video sm:aspect-auto object-cover rounded-md border border-kirscha-green-700"
      />
    </div>
  )
}

export default RoomEditor