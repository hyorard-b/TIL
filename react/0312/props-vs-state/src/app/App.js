import './App.scss'
import React from 'react'
import {ReactComponent as Logo} from 'assets/logo.svg'

class App extends React.Component {
  render() {
    const {logo, renderMessage, link} = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <Logo title={logo.label} className="App-logo" alt="logo" />
          <p>
            {renderMessage()}
          </p>
          <a
            className="App-link"
            href={link.path}
            rel="noopener noreferrer"
            target={link.external ? '_blank' : '_self'}
          >
            React를 배워보세요
          </a>
        </header>
      </div>
    )
  }
  
}

export default App
