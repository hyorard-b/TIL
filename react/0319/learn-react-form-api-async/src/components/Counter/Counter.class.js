// class component -> function component -> React Hooks

import React from 'react';
// import CountControl from './CountControl';
// import CountDisplay from './CountDisplay';
  
export default class Counter extends React.Component {
  static Display = ({ children }) => <output>{children}</output>;

  static Control = ({ onUpdate, step = 1, label, children }) => {
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

  state = {
    count: 0
  }

  setCount(newCount) {
    this.setState({
      count: this.state.count + newCount,
    })
  }

  render() {
    return (
      <div className="counterApp">
        <Counter.Control label="decrement count" onUpdate={this.setCount.bind(this)}>-</Counter.Control>
        <Counter.Display>{this.state.count}</Counter.Display>
        <Counter.Control label="increment count" onUpdate={this.setCount.bind(this)} step={1}>+</Counter.Control>
      </div>
    )
  }
}

Counter.Control.displayName = 'CounterControl';
Counter.Display.displayName = 'CounterDisplay';