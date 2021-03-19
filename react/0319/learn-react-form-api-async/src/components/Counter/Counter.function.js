import React, { useState } from 'react';

function Counter({className, children, ...restProps}) {

  return (
    <div className={`counterApp ${className}`.trim()} {...restProps}>
      {/* <Counter.Control label="decrement count" onUpdate={updateCount}>-</Counter.Control>
      <Counter.Display>{count}</Counter.Display>
      <Counter.Control label="increment count" onUpdate={updateCount} step={1}>+</Counter.Control> */}
      {children}
    </div>
  )
}

Counter.Display = function CounterDisplay({ children }) {
  return <output>{children}</output>;
}

Counter.Control = function CounterControl({ onUpdate, step = 1, label, children, ...restProps }) {
  const updateCount = () => {
    if (children.includes('-')) step *= -1;
    onUpdate(step);
  }
  return (
    <button type="button" onClick={updateCount} aria-label={label} {...restProps}>
      {children}
    </button>
  )
}

export default Counter;