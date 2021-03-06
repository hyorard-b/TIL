import {right, icon} from './Icon.module.scss';
import classNames from 'classnames';
import {ReactComponent as Email} from 'assets/Icon/email.svg'
import {ReactComponent as Password} from 'assets/Icon/password.svg'
import {ReactComponent as Show} from 'assets/Icon/show.svg'
import {ReactComponent as Hide} from 'assets/Icon/hide.svg'

const Icon = ({type, ...restProps}) => {
  let Comp = null;
  let pos = null;
  switch (type) {
    case 'email':
      Comp = Email;
      break;
    case 'password':
      Comp = Password;
      break;
    case 'show':
      Comp = Show;
      pos = 'right';
      break;
    case 'hide':
      Comp = Hide;
      pos = 'right';
      break;
    default:
      break;
  }

  const classCompose = classNames(
    icon,
    pos === 'right' && right
  );

  return (
    <div className={classCompose}>
      <Comp {...restProps} style={{width: '100%', height: '100%'}}/>
    </div>
  )
}

export default Icon;