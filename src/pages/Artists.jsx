import { artists } from '../data/data'
import ArtistCard from '../components/artists/ArtistCard'

function Artists() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-display text-kirscha-green-700 mb-8">
        Artistes
      </h1>
      <div className="grid grid-cols-3 gap-x-8 gap-y-10">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  )
}

export default Artists