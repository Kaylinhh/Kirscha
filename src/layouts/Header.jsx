import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/designs', label: 'Designs' },
  { to: '/artistes', label: 'Artistes' },
  { to: '/supports', label: 'Supports' },
  { to: '/profil', label: 'Mon Profil' },
]

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-kirscha-green-400">
      <span className="font-display text-2xl text-kirscha-green-700">Kirscha</span>
      <nav className="flex gap-6 font-body">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              isActive
                ? 'text-kirscha-purple-700 font-semibold'
                : 'text-kirscha-green-900 hover:text-kirscha-purple-700'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header