import { Link } from 'react-router-dom'
import { artists, designs, filterOptions, supportCategories } from '../data/data'
import Carousel from '../components/common/Carousel'
import ArtistCard from '../components/artists/ArtistCard'

// 3 vertical strips inside one aspect-4/3 box, single badge overlapping the bottom
function StyleCard({ styleId, label }) {
  const matches = designs.filter((d) => d.style === styleId)
  const images = [0, 1, 2].map((i) => matches[i % matches.length]?.image).filter(Boolean)

  return (
    <Link to={`/designs?style=${styleId}`} className="block pb-6 group">
      <div className="relative">
        <div className="grid grid-cols-3 gap-1 aspect-4/3 overflow-hidden rounded-md">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={label}
              className="w-full h-full object-cover border border-kirscha-green-700 group-hover:brightness-75 transition"
            />
          ))}
        </div>
        <span className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-kirscha-green-700 group-hover:bg-kirscha-green-900 transition text-kirscha-green-100 font-body text-sm px-4 py-2 rounded-full whitespace-nowrap capitalize">
          {label}
        </span>
      </div>
    </Link>
  )
}

// Single full image inside the box, badge overlapping the bottom
function SupportPreviewCard({ image, label, to }) {
  return (
    <Link to={to} className="block pb-6 group">
      <div className="relative">
        <img
          src={image}
          alt={label}
          className="w-full aspect-4/3 object-cover rounded-md border border-kirscha-green-700 group-hover:brightness-75 transition"
        />
        <span className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-kirscha-green-700 group-hover:bg-kirscha-green-900 transition text-kirscha-green-100 font-body text-sm px-4 py-2 rounded-full whitespace-nowrap">
          {label}
        </span>
      </div>
    </Link>
  )
}

function Home() {
  return (
    <div className="p-8">
      <Link
        to="/artistes"
        className="font-display text-2xl text-kirscha-green-700 bg-kirscha-green-100 border border-kirscha-green-700 hover:bg-kirscha-green-400 transition rounded-full w-fit px-6 py-2 mb-6 block"
      >
        Découvre ton nouvel artiste préféré
      </Link>
      <Carousel>
        {artists.map((artist) => (
          <div key={artist.id} className="w-64 shrink-0">
            <ArtistCard artist={artist} />
          </div>
        ))}
      </Carousel>

      <Link
        to="/designs"
        className="font-display text-2xl text-kirscha-green-700 bg-kirscha-green-100 border border-kirscha-green-700 hover:bg-kirscha-green-400 transition rounded-full w-fit px-6 py-2 mt-16 mb-6 block"
      >
        Trouve le style fait pour toi
      </Link>
      <Carousel>
        {filterOptions.styles.map((style) => (
          <div key={style.id} className="w-64 shrink-0">
            <StyleCard styleId={style.id} label={style.label} />
          </div>
        ))}
      </Carousel>

      <Link
        to="/supports"
        className="font-display text-2xl text-kirscha-green-700 bg-kirscha-green-100 border border-kirscha-green-700 hover:bg-kirscha-green-400 transition rounded-full w-fit px-6 py-2 mt-16 mb-6 block"
      >
        Choisis le support parfait pour ton œuvre
      </Link>
      <Carousel>
        {supportCategories.map((cat) => (
          <div key={cat.id} className="w-64 shrink-0">
            <SupportPreviewCard image={cat.image} label={cat.label} to={`/supports/${cat.id}`} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Home