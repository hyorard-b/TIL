import { headline, link, dot } from './HomeLink.module.scss'

export default function HomeLink() {
  return (
    <h1 lang="en" className={headline}>
      <a href="/" className={link}>
        <span style={{ alignItems: 'flex-end' }}>_</span>MY
        <span className={dot}>.</span>MOVIES
      </a>
    </h1>
  )
}
