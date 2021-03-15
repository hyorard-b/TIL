import {checkboxContainer, checkbox, checkboxLabel, labelDisabled} from './Checkbox.module.scss';
import {ReactComponent as CheckedSVG} from 'assets/Checked/Checked.svg';
import {ReactComponent as DisabledCheckedSVG} from 'assets/Checked/DisabledChecked.svg';
import classNames from 'classnames';
import React, {Component} from 'react';
import uuid from 'react-uuid';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  render() {
    const {content, disabled, checked} = this.props;

    const containerClass = classNames(checkboxContainer); 
    const checkboxClass = classNames(checkbox);
    const checkboxLabelClass = classNames(checkboxLabel, 
      disabled && labelDisabled);

    const checkboxStyleObj = {
      width: 16,
      height: 12,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate3d(-50%,-50%, 0)'
    };
  
    const checkboxId = uuid();
  
    return (
      <div className={containerClass}>
        <span className={checkboxClass} id={checkboxId}>
          {checked ? disabled ? <DisabledCheckedSVG style={checkboxStyleObj} /> : <CheckedSVG style={checkboxStyleObj}/> : null}
        </span>
        <label className={checkboxLabelClass} htmlFor={checkboxId}>{content}</label>
      </div>
  
    )
  }

};

Checkbox.defaultProps = {
  content: "자동 로그인"
}