import './App.css';
import {createElement as h} from 'react';
import logo from '../../assets/logo.svg';

function App() {
  // React Element, Fragment 반환
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code>를 수정하면 자동으로 새로고침
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React 배우기
        </a>
      </header>
    </div>
  );
  }

export default App;
