import { Link } from 'react-router-dom'
import { getWorksByArtist } from '../../utils/artistWorks'

function ArtistCard({ artist }) {
  const works = getWorksByArtist(artist.id).slice(0, 4) // only 4 for the 2x2 preview

  return (
    <Link to={`/artistes/${encodeURIComponent(artist.name)}`} className="block pb-6 group">
      <div className="relative">
        <div className="grid grid-cols-2 grid-rows-2 gap-1 aspect-4/3 overflow-hidden rounded-md">
          {works.map((work) => (
            <img
              key={work.id}
              src={work.image}
              alt=""
              className="w-full h-full object-cover border border-kirscha-green-700 group-hover:brightness-75 transition"
            />
          ))}
        </div>
        <span className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-kirscha-green-700 group-hover:bg-kirscha-green-900 transition text-kirscha-green-100 font-body text-sm px-4 py-2 rounded-full whitespace-nowrap">
          {artist.name}
        </span>
      </div>
    </Link>
  )
}

export default ArtistCard