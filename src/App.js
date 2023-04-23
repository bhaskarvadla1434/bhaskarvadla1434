import logo from './logo.svg';
import React from 'react';
import { ReactDOM } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const getData = (date) => {

    return <p>{date}</p>
  }
  const clickedTimes = () => {
    console.log(`count us ${count}`)
    setCount(count + 1)
  }
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <button onClick={clickedTimes} >Click Here</button>
      {getData(new Date().toLocaleTimeString())}
      <p>{count}</p>

    </div>
  );
}

export default App;
