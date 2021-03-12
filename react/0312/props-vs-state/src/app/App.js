import './App.scss'
import React from 'react'
import AppHeader from 'containers/AppHeader';

class App extends React.Component {
  render() {
    const {logo, renderMessage, link} = this.props;

    return (
      <div className="App">
        <AppHeader logo={logo} renderMessage={renderMessage} link={link}/>
      </div>
    )
  }
  
}

export default App
