import React, { useState } from "react";
import "./App.css";

function computeInitialCalculation() {
  console.log("Compute initial calculation");
  return Math.trunc(Math.random() * 20);
}

function App() {
  // const [counter, setCounter] = useState(computeInitialCalculation());
  // const [counter, setCounter] = useState(computeInitialCalculation);
  const [counter, setCounter] = useState(() => {
    return computeInitialCalculation();
  });

  const [state, setState] = useState({
    title: "Counter",
    date: Date.now(),
  });

  function increment() {
    // setCounter(counter + 1);
    // setCounter((prevCounter)=>{
    //   return prevCounter + 1;
    // });
    setCounter((prev) => prev + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }

  function updateTitles() {
    setState((prev) => {
      return {
        ...prev,
        title: "new state",
      };
    });
  }

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        increment
      </button>
      <button onClick={decrement} className="btn btn-danger">
        decrement
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={updateTitles} className="btn btn-default">
        {" "}
        increment
      </button>
    </div>
  );
}

export default App;
