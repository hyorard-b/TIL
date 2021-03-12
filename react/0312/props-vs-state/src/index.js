import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.scss'

import App from './app/App'
// import App from './app/App'

const data = {
  logo: {
    label: 'React',
  },
  renderMessage: () => <code>src/App.js</code>,
  link: {
    path: 'https://ko.reactjs.org',
    external: true,
  }
}

render(
  <StrictMode>
    <App {...data}/>
  </StrictMode>,
  document.getElementById('root')
)
