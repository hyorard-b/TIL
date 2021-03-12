import React from 'react'
import { control } from './Counter.module.scss'

/* -------------------------------------------------------------------------- */

const CountControl = ({ mode, label, children, ...restProps }) => {
  return (
    <button
      aria-label={label}
      className={`${control} ${mode}`.trim()}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  )
}

export default CountControl
