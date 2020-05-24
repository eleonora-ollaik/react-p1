import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Comp from './Comp';

let index = 20; // is considered to be state - part of JS itself
// React is just a library on top of JS

function App() {
  //  React wants to maintain STATE for you and when you let React do it, it will help you by rerendering the state if the value changes
  const [count, setCount] = useState(10); //Also considered to be state. souseState is function in React, it gives a value(count) and a method to change that value. Asynchronous: goes to execute before the function setCount runs. UseState hook prompts the re-render like setState()
  // let count = 10;
  function myOnClickCount(e){
    // count++
    setCount(count + 1);
    console.log('We just clicked count', count); 
  }

  function myOnClickIndex(e){
    index++;
    // setCount(count + 1);
    console.log('We just clicked index', index); 
  }

  return (
    <div className="App">
      <div>
        <h1 onClick = {myOnClickCount}> Hello World: count {count} </h1>
        <h1 onClick = {myOnClickIndex}> Hello World: index {index} </h1>
        <Comp count = {count} countFunc = {myOnClickCount}/>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
