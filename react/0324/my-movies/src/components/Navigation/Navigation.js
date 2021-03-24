import { container, active } from './Navigation.module.scss'

/* -------------------------------------------------------------------------- */

export default function Navigation({ children }) {
  return (
    <nav className={container} aria-label="글로벌 내비게이션">
      <ul>
        <li>
          <a href="/movies" className={active}>
            Movies
          </a>
        </li>
        <li>
          <a href="/bookmark">Bookmark</a>
        </li>
      </ul>
      {children}
    </nav>
  )
}
