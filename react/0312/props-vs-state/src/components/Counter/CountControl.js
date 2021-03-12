import React from 'react'
import { control } from './Counter.module.scss'

/* -------------------------------------------------------------------------- */

const CountControl = ({ mode, label, children, ...restProps }) => {
  const method = mode === 'increment' ? restProps.onIncrease : restProps.onDecrease;

  return (
    <button
      aria-label={label}
      className={`${control} ${mode}`.trim()}
      type="button"
      onClick={method}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default CountControl
