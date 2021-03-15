import {tooltip} from './Tooltip.module.scss';
import classNames from 'classnames';

const ToolTip = ({content, orientation, ...restProps}) => {
  const classCompose = classNames(
    tooltip
  );

  return (
    <div className={classCompose}>
      {content}
    </div>
  )
};

ToolTip.defaultProps = {
  content: "개인 정보 보호를 위해 본인 기기에서만 이용해주세요"
}

export default ToolTip;