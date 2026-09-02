import { Link } from 'react-router-dom'

const navCards = [
  { label: 'Mes Infos', to: '/profil/infos' },
  { label: 'Programme Fidélité', to: '/profil/fidelite' },
  { label: 'Mes Achats', to: '/profil/achats' },
  { label: 'Mes Favoris', to: '/profil/favoris' },
]

function Profile() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
        {navCards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="block bg-kirscha-green-100 border border-kirscha-green-700 hover:bg-kirscha-green-400 transition rounded-full text-center py-4 font-body font-semibold text-kirscha-green-700"
          >
            {card.label}
          </Link>
        ))}
      </div>

      <div className="bg-kirscha-green-400 rounded-md p-8 flex flex-col sm:flex-row items-center gap-8">
        <div>
          <h2 className="font-display text-2xl text-kirscha-green-100">
            Mes cookies faits maison
          </h2>
          <p className="font-body text-kirscha-green-100 mt-4">
            Crées ta sélection de cookies toi-même ! Personnalise ton expérience
            sur Kirscha autant que tu le souhaites et désactive tes cookies
            quand tu veux !
          </p>
          <Link
            to="/profil/chez-moi"
            className="inline-block mt-6 bg-kirscha-green-700 hover:bg-kirscha-green-900 transition text-kirscha-green-100 font-body font-semibold px-6 py-3 rounded-full"
          >
            Voir mon chez moi
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile