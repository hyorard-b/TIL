import React, { Fragment, Component } from 'react';
import { string } from 'prop-types';

export default class Checkbox extends Component {
  state = {
    isChecked: this.props.checked,
    isDisabled: false,
  }

  static propTypes = {
    id: string.isRequired,
    label: string.isRequired
  }

  componentDidMount() {
    console.log('초기 체크 상태 값: ', this.state.isChecked);
  }

 /*  static getDerivedStateFromProps(props, state) {
    console.log(props);
    console.log('state: ', state);

    return {
      isChecked: false,
      handleChange: props.onChange,
    }
  } */
  

  handleChange = e => {
    this.setState({
      isChecked: e.target.checked
    }, () => {
    console.log(this.state);
    })
  }

  render() {
    const { id, label, onChange, isDisabled, ...restProps } = this.props;
    let { isChecked } = this.state;
    return (
      <Fragment>
        <input type="checkbox" name={id} id={id} checked={isChecked} disabled={isDisabled}
          onChange={e => {
            onChange();
            this.handleChange(e);
          }
          }
        />
        <label htmlFor={id}>{label}</label>
      </Fragment>
    )
  }
}
