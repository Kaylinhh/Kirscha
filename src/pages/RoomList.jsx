import { Link } from 'react-router-dom'
import { rooms } from '../data/data'

function RoomList() {
  return (
    <div className="p-8">
      <div className="bg-kirscha-green-700 rounded-md p-6 max-w-xs">
        <h1 className="font-display text-2xl text-kirscha-green-100 mb-4">
          Mon chez moi
        </h1>
        <div className="flex flex-col gap-3">
          {rooms.map((room) => (
            <Link
              key={room.id}
              to={`/profil/chez-moi/${room.id}`}
              className="font-body text-kirscha-green-100 hover:text-kirscha-green-100/70 transition"
            >
              {room.name}
            </Link>
          ))}
          <button
            disabled
            className="font-body text-kirscha-green-100/50 text-left mt-2 cursor-not-allowed"
          >
            + Créer une nouvelle pièce
          </button>
        </div>
      </div>
    </div>
  )
}

export default RoomList