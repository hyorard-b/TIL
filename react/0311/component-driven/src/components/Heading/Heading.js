import { number } from "prop-types";
import React from "react";
import { headline } from './Heading.module.scss';

const Heading = ({ level, children, className, ...restProps }) => {
  return React.createElement(`h${level}`, {
      className: `${headline} ${className}`,
      children,
      ...restProps
    })
};

Heading.propTypes = {
  level: number.isRequired,
};

export default Heading;