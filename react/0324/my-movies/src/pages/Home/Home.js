import 'styles/pages/page.scss'
import { Effects } from 'components'
import image from 'assets/vision.png'
import { vision, effect } from './Home.module.scss'

/* -------------------------------------------------------------------------- */

export default function HomePage() {
  return (
    <div className="home-page">
      <Effects message="ENTER" className={effect} />
      <img className={vision} src={image} alt="" />
    </div>
  )
}
