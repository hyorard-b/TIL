import React, { Component } from 'react'
import { counter } from './Counter.module.scss'
import CountControl from './CountControl'
import CountDisplay from './CountDisplay'
import {groupCollapsed} from 'utils/groupMessage'

/* -------------------------------------------------------------------------- */

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 9,
    }
    // groupCollapsed('constructor', '생성');
    this.increase('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    // props -> state = new State Item
    console.log('props:', props)
    console.log('state:', state)
    return {
      currentNumber: props.step + state.count
    }
  }

  /* shouldComponentUpdate(nextProps, nextState) {
    return 
  } */

  increase = (id) => {
    this.setState({
      count: this.state.count + 1
    },
    () => {
      console.log('업데이트 됨: ', id);
    })
  }

  decrease = () => {
    this.setState(({count}) => ({count: count - 1}))
  }

  render() {
    // groupCollapsed('render', '렌더');


    return (
      <div className={counter}>
        <CountControl onDecrease={this.decrease} mode="decrement" label="카운트 감소">
          {' '}
          -{' '}
        </CountControl>
        <CountDisplay count={this.state.count} />
        <CountControl onIncrease={this.increase} mode="increment" label="카운트 증가">
          {' '}
          +{' '}
        </CountControl>
      </div>
    )
  }

  componentDidMount() {
    // groupCollapsed('did mount', '마운트 이후 시점(1회 실행)');
    this.increase('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    // groupCollapsed('did update', '업데이트 이후 시점(연속적으로 업데이트 될 때 마다 실행');
  }
  
  componentWillUnmount() {
    
  }
  
}
