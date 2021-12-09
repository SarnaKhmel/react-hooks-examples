import React, {useState} from 'react';
import './App.css';


function App() {
const [counter, setCounter] = useState(0);

function increment() {
  setCounter(counter + 1);
}
function decrement() {
  setCounter(counter - 1);
}
  return (
    <div className="App">
        <h1>Counter: {counter}</h1>
        <button onClick={increment} className="btn btn-success" >increment</button>
        <button onClick={decrement} className="btn btn-danger" >decrement</button>
    </div>
  );
}

export default App;
