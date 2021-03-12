import React, { Component } from 'react'

import App from 'app/App'

export default class Home extends Component {
  constructor(props) {
    super(props)
    console.log('나(Home)는 지금 태어났습니다.');
  }
  state = {
    logo: {
      label: 'React',
    },
    message: () => <code>src/App.js</code>,
    link: {
      path: 'https://ko.reactjs.org',
      external: true,
    }
  }
  render() {
    const {logo, message, link} = this.state
    console.log('나(Home)는 지금 그려집니다.')
    return (
      <App logo={logo} renderMessage={message} link={link} />
    )
  }

  // 라이프 사이클 (삶의 주기)
  // 그려진 이후 나(component)의 모습
  componentDidMount() {
    console.log('나는 실제 DOM에 마운트(장착)된 이후입니다.');
    const newState = {
      logo: {
        label: '리액트!!!! '
      }
    };
    const callBack = () => {
      // 상태가 업데이트 된 이후 실행을 보장받는다..!
      console.log('React!! 상태가 업뎃 되었네~')
    }
    window.setTimeout(() => {
      console.log('나는 2초 뒤에 뭔가 한다.')
      this.setState(newState, callBack)

    }, 2000);
  }
}
