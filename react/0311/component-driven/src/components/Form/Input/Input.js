import classNames from 'classnames';
import { input, icon } from './Input.module.scss';

import Icon from 'components/UI/Icon/Icon'

const Input = ({type, state, visible, text, ...restProps}) => {
  const inputClassCompose = classNames(
    input,
  );

  const iconClassCompose = classNames(
    icon,
  )

  let inputType = null;
  let placeHolder = null;
  let iconType = null;

  if (type === 'password') {
    inputType = visible === 'true' ? 'text' : 'password'
    iconType = visible === 'true' ? 'show' : 'hide'
    placeHolder = '비밀번호'
  } else {
    inputType = 'text'
    placeHolder = '아이디(이메일)'
  }

  return (
    <>
      <input 
        type={inputType} 
        placeholder={placeHolder} 
        value={text} {...restProps}
        className={inputClassCompose}
      />
        {iconType && <Icon type={iconType} className={iconClassCompose}></Icon>}
    </>
  )
};

export default Input;