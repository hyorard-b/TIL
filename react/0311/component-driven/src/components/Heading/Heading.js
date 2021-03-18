import { number, string } from "prop-types";
import React from "react";
import { headline } from './Heading.module.scss';

const Heading = ({ level, children, className, ...restProps }) => {
  return React.createElement(`h${level}`, {
      className: `${headline} ${className}`.trim(),
      children,
      ...restProps
    })
};

Heading.defaultProps = {
  level: 3,
  className: '',
  // children: '쿠팡! 취직시켜 줘요~'
};

Heading.propTypes = {
  level: number.isRequired,
  className: string
};

export default Heading;