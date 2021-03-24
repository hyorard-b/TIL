import { headline, link, dot } from './HomeLink.module.scss'
import { Link } from 'react-router-dom'


export default function HomeLink() {
  return (
    <h1 lang="en" className={headline}>
      <Link to="/" className={link}>
        <span style={{ alignItems: 'flex-end' }}>_</span>MY
        <span className={dot}>.</span>MOVIES
      </Link>
    </h1>
  )
}
