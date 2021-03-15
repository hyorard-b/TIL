import {signInputContainer, signInput, error, errorMsg} from './SignInput.module.scss';
import classNames from 'classnames';

import Icon from 'components/UI/Icon/Icon'
import Input from 'components/Form/Input/Input';

const ErrorMsg = ({type, state, visible, hasError, ...restProps}) => {
  const classCompose = classNames(
    errorMsg
  );

  let msg = null;

  if (type === 'email')
    msg = state === 'normal' ? '아이디(이메일)를 입력해주세요.' : '아이디(이메일)는 이메일 형식으로 입력해주세요.';
  else if (type === 'password')
    msg = state === 'normal' ? '비밀번호를 입력해주세요.' : null;

  return hasError ? (
    <div className={classCompose}>
      {msg}
    </div>
  ) : null;
};

const SignInput = ({hasError, type, ...restProps}) => {
  const inputContainerCompose = classNames(
    signInputContainer,
  )
  
  const inputClassCompose = classNames(
    signInput,
    (hasError !== 'default' && hasError) && error
  )

  return (
    <div className={inputContainerCompose}>
      <div
        className={inputClassCompose}>
        <Icon type={type} />
        <Input type={type} {...restProps}/>
      </div>
      <ErrorMsg type={type} hasError={hasError} {...restProps}/>
    </div>
  )
};

export default SignInput;