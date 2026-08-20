import { Link } from 'react-router-dom'
import { supportCategories } from '../data/data'
import PrintersMap from '../components/supports/PrintersMap'

function Supports() {
  return (
    <div className="p-12">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
        {supportCategories.map((cat) => (
          <Link key={cat.id} to={`/supports/${cat.id}`} className="block pb-6 group">
            <div className="relative">
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full aspect-4/3 object-cover rounded-md border border-kirscha-green-700 group-hover:brightness-75 transition"
              />
              <span className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-kirscha-green-700 group-hover:bg-kirscha-green-900 transition text-kirscha-green-100 font-body text-sm px-4 py-2 rounded-full whitespace-nowrap">
                {cat.label}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <PrintersMap />
    </div>
  )
}

export default Supports