import {autoSignInCheckboxContainer} from './AutoSignInCheckbox.module.scss';

import classNames from 'classnames';
import Checkbox from 'components/Form/Checkbox/Checkbox';
import ToolTip from 'components/UI/Tooltip/Tooltip';

const AutoSignInCheckbox = ({checked, ...restProps}) => {
  const autoSignInClass = classNames(autoSignInCheckboxContainer);

  return (
    <div className={autoSignInClass}>
      <Checkbox checked={checked} {...restProps}/>
      {checked && <ToolTip />}
    </div>
  )
};

export default AutoSignInCheckbox;
