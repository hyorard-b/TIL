import {signInput, error} from './SignInput.module.scss';
import classNames from 'classnames';

import Icon from 'components/UI/Icon/Icon'
import Input from 'components/Form/Input/Input';

const SignInput = ({hasError, type, ...restProps}) => {
  const classCompose = classNames(
    signInput,
    hasError && error
  )

  return (
    <div
      className={classCompose}>
      <Icon type={type} />
      <Input type={type} {...restProps}/>
    </div>
  )
};

export default SignInput;