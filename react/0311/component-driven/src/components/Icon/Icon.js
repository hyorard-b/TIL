import './Icon.scss'
import {ReactComponent as Email} from 'assets/Icon/email.svg'
import {ReactComponent as Password} from 'assets/Icon/password.svg'
import {ReactComponent as Show} from 'assets/Icon/show.svg'
import {ReactComponent as Hide} from 'assets/Icon/hide.svg'

const Icon = ({type, ...restProps}) => {
  let Comp = null;
  switch (type) {
    case 'email':
      Comp = Email;
      break;
    case 'password':
      Comp = Password;
      break;
    case 'show':
      Comp = Show;
      break;
    case 'hide':
      Comp = Hide;
      break;
    default:
      break;
  }

  return <Comp {...restProps} />
}

export default Icon;