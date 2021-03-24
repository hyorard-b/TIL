import effect from 'assets/effect.gif'
import { gate, link } from './Effects.module.scss'

export default function Effects({ message, className, ...restProps }) {
  return (
    <div className={`${gate} ${className}`} {...restProps}>
      <img src={effect} alt="" />
      <a className={link} href="/movies">
        {message}
      </a>
    </div>
  )
}
