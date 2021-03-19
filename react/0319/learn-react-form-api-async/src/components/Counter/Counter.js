// class component -> function component -> React Hooks

import React from 'react';
import CountControl from './CountControl';
import CountDisplay from './CountDisplay';

export default class Counter extends React.Component {
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
        <CountControl label="decrement count" onUpdate={this.setCount.bind(this)}>-</CountControl>
        <CountDisplay>{this.state.count}</CountDisplay>
        <CountControl label="increment count" onUpdate={this.setCount.bind(this)} step={1}>+</CountControl>
      </div>
    )
  }
}