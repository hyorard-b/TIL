import {logo} from './Logo.module.scss';

import classNames from 'classnames';

import PropTypes from 'prop-types'
import {ReactComponent as ColorfulLogo} from 'assets/logo/colorful.svg'
import {ReactComponent as BlackLogo} from 'assets/logo/black.svg'
import {ReactComponent as MonoLogo} from 'assets/logo/mono.svg'


const Logo = ({title = "쿠팡", type, ...restProps}) => {
  const logoClass = classNames(logo);

  let Comp = null;
  switch (type) {
    case 'colorful': 
      Comp = ColorfulLogo
      break;
    case 'black':
      Comp = BlackLogo
      break;
    case 'mono':
      Comp = MonoLogo
      break;
    default:
      console.log(`${type} is not supported😅. check your logo type again!`);
  }

  return (
    <a className={logoClass} href="." title={title}>
      <Comp {...restProps} />
    </a>
  )
}

Logo.defaultProps = {
  title: "쿠팡",
}
Logo.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['colorful', 'black', 'mono'])
}

export default Logo;