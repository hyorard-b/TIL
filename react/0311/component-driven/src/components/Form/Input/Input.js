import classNames from 'classnames';
import { container, input, icon } from './Input.module.scss';

import Icon from 'components/UI/Icon/Icon'

const Input = ({type, visible, placeHolder, iconType, ...restProps}) => {
  const containerClassCompose = classNames(container);
  const inputClassCompose = classNames(input);
  const iconClassCompose = classNames(icon);

  if (type === 'password') {
    iconType = visible ? 'show' : 'hide';
    placeHolder = '비밀번호';
  } else {
    visible = true;
  }
  
  type = visible ? 'text' : 'password';

  return (
    <div className={containerClassCompose}>
      <input
        type={type}
        placeholder={placeHolder} 
        className={inputClassCompose}
        {...restProps}
      />
      <div className={iconClassCompose}>
        {iconType && <Icon type={iconType}></Icon>}
      </div>
    </div>
  )
};

Input.defaultProps = {
  visible: false,
  type: 'email',
  inputType: 'text',
  placeHolder: '아이디(이메일)',
}

export default Input;