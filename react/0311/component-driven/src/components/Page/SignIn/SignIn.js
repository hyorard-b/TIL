import {signInContainer, subSignIn, findInfo, line} from './SignIn.module.scss';

import classNames from 'classnames';

import Logo from 'components/UI/Logo/Logo';
import SignInput from 'components/Form/SignInput/SignInput';
import AutoSignInCheckbox from 'components/Form/AutoSignInCheckbox/AutoSignInCheckbox';
import Button from 'components/Form/Button/Button';
import Copyright from 'components/UI/Copyright/Copyright';

const SignIn = ({state, ...restProps}) => {
  const SignInContainerClass = classNames(signInContainer)
  const SubContainerClass = classNames(subSignIn);
  const FindInfoClass = classNames(findInfo);
  const LineClass = classNames(line);

  let isDisabled = null;
  let isIdInputed = null;
  let ispasswordInputed = null;
  let idValue = null;
  let passwordValue = null;
  let isChecked = null;
  let hasError = null;

  switch (state) {
    case 'initialization':
        isDisabled = true;
      break;
    case 'inputed':
        isDisabled = false;
        isIdInputed = 'inputed';
        ispasswordInputed = 'inputed';
        idValue = 'hyorard08@';
        passwordValue = 'stevenHyorard';
        isChecked = true;
      break;
    case 'invalid':
        isDisabled = false;
        isChecked = true;
        isIdInputed = 'inputed';
        ispasswordInputed = 'normal';
        hasError = true;
      break;
    default:
      break;
  }

  return (
    <div className={SignInContainerClass}>
      <Logo type='colorful'/>
      <form action="">
        <SignInput type='email' state={isIdInputed} value={idValue} hasError={hasError}/>
        <SignInput type='password' state={ispasswordInputed} value={passwordValue} hasError={hasError}/>
        <div className={SubContainerClass}>
          <AutoSignInCheckbox checked={isChecked}/>
          <a className={FindInfoClass} href='.'>아이디(이메일)비밀번호 찾기 &gt;</a>
        </div>
        <Button content='로그인' state='primary' disabled={isDisabled}/>
        <div className={LineClass}></div>
        <Button content='회원가입' state='secondary'/>
      </form>
      <Copyright />
    </div>
  )
};

export default SignIn;