import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.scss'

// import App from './app/App';
// import Home from 'pages/Home';

import Counter from 'components/Counter/Counter'


render(
  <StrictMode>
    <Counter />
  </StrictMode>,
  document.getElementById('root')
)
