import { container, active } from './Navigation.module.scss'
import { Link } from 'react-router-dom'


/* -------------------------------------------------------------------------- */

export default function Navigation({ children }) {
  return (
    <nav className={container} aria-label="글로벌 내비게이션">
      <ul>
        <li>
          <Link to="/movies" className={active}>
            Movies
          </Link>
        </li>
        <li>
          <Link to="/bookmark">Bookmark</Link>
        </li>
      </ul>
      {children}
    </nav>
  )
}
