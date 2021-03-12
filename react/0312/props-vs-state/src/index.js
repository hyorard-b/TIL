import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.scss'

// import App from './app/App';
// import Home from 'pages/Home';

import Counter from 'components/Counter/Counter'

class Got extends React.Component {
  state = {
    isShow: true
  }

  handleChange = e => {
    this.setState({
      isShow: !this.state.isShow})
  }

  render() {
    return (
      <>
        <input type="checkbox" onChange={this.handleChange} checked={this.state.isShow}/>
        {this.state.isShow ? <Counter step={3}/> : null}
      </>
    )
  }
}

render(
  <StrictMode>
    <Got />
  </StrictMode>,
  document.getElementById('root')
)
