import { string, bool } from "prop-types";
import { link } from './LinkA.module.scss';


const LinkA = ({
  href,
  isExternal,
  className,
  fgColor,
  bgColor,
  style,
  children,
  ...restProps
}) => {
  const target = isExternal ? '_blank' : null;
  const rel = isExternal ? 'noopener noreferrer' : null;
  const combineClassName = `${link} ${className}`;
  const combineStyle = {
    ...style,
    color: fgColor,
    backgroundColor: bgColor
  };

  return (
    <a href={href} target={target} rel={rel} className={combineClassName} style={combineStyle} {...restProps}>
      {children}
    </a>
  )
}
LinkA.defaultProps = {
  isExternal: false,
};

LinkA.propTypes = {
  href: string.isRequired,
  isExternal: bool,
}

export default LinkA;