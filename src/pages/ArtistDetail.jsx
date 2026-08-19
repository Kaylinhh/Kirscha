import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { artists, supportCategories } from '../data/data'
import SupportPicker from '../components/preview/SupportPicker'

function ArtistDetail() {
  const { name } = useParams()
  const artist = artists.find((a) => a.name === decodeURIComponent(name))
  const [selectedWork, setSelectedWork] = useState(null)

  if (!artist) {
    return <p className="p-8">Artiste introuvable.</p>
  }

  return (
    <div className="p-8 mx-30">
      <h1 className="text-4xl font-display text-kirscha-green-700 text-center">
        {artist.name}
      </h1>

    <div className="flex justify-center mt-4">
    <a href={artist.instagramUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-kirscha-green-700 text-kirscha-green-100 font-body px-6 py-2 rounded-full hover:bg-kirscha-green-900 transition">
      {artist.social}
    </a>
    </div>

      {selectedWork ? (
        <SupportPicker
          artworkImage={selectedWork}
          onBack={() => setSelectedWork(null)}
        />
      ) : (
        <>
          <p className="font-body text-kirscha-green-900 text-center max-w-xl mx-auto mt-4">
            {artist.bio}
          </p>

          <div className="columns-2 sm:columns-3 gap-3 mt-10">
            {artist.works.map((work, i) => (
              <img
                key={i}
                src={work}
                alt=""
                onClick={() => setSelectedWork(work)}
                className="w-full mb-3 rounded-md break-inside-avoid cursor-pointer hover:opacity-80 transition"
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ArtistDetail