import React, { Component } from 'react'
import App from 'app/App'

const groupMessage = id => {
  console.groupCollapsed(id);
  const targetNode = document.querySelector('.App-header g');
  console.log(targetNode);
  console.groupEnd(id);

  return targetNode;
};

export default class Home extends Component {
  constructor(props) {
    super(props)
    console.log('나(Home)는 지금 태어났습니다.');

    groupMessage('contructor')
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
    groupMessage('render')
    return (
      <App logo={logo} renderMessage={message} link={link} />
    )
  }

  // 라이프 사이클 (삶의 주기)
  // 그려진 이후 나(component)의 모습
  componentDidMount() {
    const targetNode = groupMessage('componentDidMount');
    targetNode.style.transition = 'all 5s';
    setTimeout(() => {
      targetNode.setAttribute('fill', 'tomato');
    }, 1000);
  }
  
  
}
