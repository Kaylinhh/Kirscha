import { Link } from 'react-router-dom'

function ArtistCard({ artist }) {
  return (
    <Link to={`/artistes/${artist.id}`} className="block pb-6">
      <div className="relative">
        <div className="grid grid-cols-2 grid-rows-2 gap-1 aspect-4/3 overflow-hidden rounded-md">
          {artist.previewWorks.map((work, i) => (
            <img
              key={i}
              src={work}
              alt=""
              className="w-full h-full object-cover"
            />
          ))}
        </div>

        <span className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-kirscha-green-700 text-kirscha-green-100 font-body text-sm px-4 py-2 rounded-full whitespace-nowrap">
          {artist.name} →
        </span>
      </div>
    </Link>
  )
}

export default ArtistCard