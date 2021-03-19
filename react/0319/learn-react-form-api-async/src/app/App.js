import './App.scss'
import logo from 'assets/logo.svg'
import React, { useState } from 'react';

// import Counter from 'components/Counter/Counter.class'
import Counter from 'components/Counter/Counter.function';

console.log(Counter)

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const updateCount = step => {
    setCount(step + count);
  };

  const updateCount2 = step => {
    setCount2(step + count2);
  };

  return (
    <div className="App">
      <Counter className="using-compound-components">
        컴파운드 컴포넌트 활용
        <Counter.Control label="카운트 감소" onUpdate={updateCount} step={0.5} children='-' title="카운트 감소"/>
        <Counter.Display>{count}</Counter.Display>
        <Counter.Control label="카운트 증가" onUpdate={updateCount} step={1.5} children='+' title="카운트 증가"/>
      </Counter>
      <Counter className="using-compound-components2">
        컴파운드 컴포넌트 활용
        <Counter.Control label="카운트 감소2" onUpdate={updateCount2} step={3} children='-' title="카운트 감소2" />
        <Counter.Display>{count2}</Counter.Display>
        <Counter.Control label="카운트 증가2" onUpdate={updateCount2} step={3} children='+' title="카운트 증가2"/>
      </Counter>
    </div>
  )
}

export default App
