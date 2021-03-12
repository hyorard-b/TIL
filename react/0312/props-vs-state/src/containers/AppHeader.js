/* eslint-disable react/jsx-no-target-blank */
import {ReactComponent as Logo} from 'assets/logo.svg'

const AppHeader = ({logo, renderMessage, link}) => {
  return (
    <header className="App-header">
      <Logo title={logo.label} className="App-logo" alt="logo" />
      <p>
        {renderMessage()}
      </p>
      <a
        className="App-link"
        href={link.path}
        rel={link.external ? "noopener noreferrer" : null}
        target={link.external ? '_blank' : '_self'}
      >
        React를 배워보세요
      </a>
    </header>
  )
}

export default AppHeader;