import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const updateCount = step => {
    setCount(count + step);
  };

  return (
    <div className="counterApp">
      <Counter.Control label="decrement count" onUpdate={updateCount}>-</Counter.Control>
      <Counter.Display>{count}</Counter.Display>
      <Counter.Control label="increment count" onUpdate={updateCount} step={1}>+</Counter.Control>
    </div>
  )
}

Counter.Display = function CounterDisplay({ children }) {
  return <output>{children}</output>;
}

Counter.Control = function CounterControl({ onUpdate, step = 1, label, children }) {
  const updateCount = () => {
    if (children.includes('-')) step *= -1;
    onUpdate(step);
  }
  return (
    <button type="button" onClick={updateCount} aria-label={label}>
      {children}
    </button>
  )
}

export default Counter;