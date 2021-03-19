import React, {useState} from 'react'

import Copyright from 'components/UI/Copyright/Copyright';
import Checkbox from 'components/Checkbox/Checkbox.class';

export default class Parent extends React.Component {
  state = {
    isVisible: false
  }

  changeVisibleState() {
    this.setState({isVisible: !this.state.isVisible})
  }

  render() {
    const { isVisible } = this.state;
    return (
      <>
        <Checkbox id="check-sdfdd" label="라이센스 표시/감춤" checked={isVisible} onChange={this.changeVisibleState.bind(this)} />
        <hr />
        {isVisible && <Copyright />}
      </>
    )
  }
}

/* const Parent = () => {
  let [isVisible, setIsVisible] = useState(false);

  const handleVisible = e => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Checkbox id="check-asdqw" label="라이센스 표시/감춤" checked={isVisible} onChange={handleVisible}/>
      <hr />
      { isVisible && <Copyright />}
    </>
  )
} */

// export default Parent;