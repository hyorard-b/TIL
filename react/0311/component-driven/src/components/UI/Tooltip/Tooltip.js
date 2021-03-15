import {tooltip} from './Tooltip.module.scss';
import classNames from 'classnames';

const Tooltip = ({content, orientation, ...restProps}) => {
  const classCompose = classNames(
    tooltip
  );

  return (
    <div className={classCompose}>
      {content}
    </div>
  )
};

export default Tooltip;