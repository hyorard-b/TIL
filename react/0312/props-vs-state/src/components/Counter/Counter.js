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
    groupCollapsed('constructor', '생성');
  }

  render() {
    groupCollapsed('render', '렌더');

    return (
      <div className={counter}>
        <CountControl mode="decrement" label="카운트 감소">
          {' '}
          -{' '}
        </CountControl>
        <CountDisplay count={this.state.count} />
        <CountControl mode="increment" label="카운트 증가">
          {' '}
          +{' '}
        </CountControl>
      </div>
    )
  }

  componentDidMount() {
    groupCollapsed('did mount', '마운트 이후 시점(1회 실행)');
    
  }

  componentDidUpdate(prevProps, prevState) {
    groupCollapsed('did update', '업데이트 이후 시점(연속적으로 업데이트 될 때 마다 실행');
  }
  
  
}
