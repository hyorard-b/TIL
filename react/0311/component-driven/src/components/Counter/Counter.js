import React, { useState } from 'react';
import Button from './Button';
import Window from './Window';

const Counter = () => {
  const [counter, updateCounter] = useState(0);

  return (
    <div className="container">
      <Button counter={counter} updateCounter={updateCounter}>-</Button>
      <Window counter={counter}></Window>
      <Button counter={counter} updateCounter={updateCounter}>+</Button>
    </div>
  )
};

export default Counter;