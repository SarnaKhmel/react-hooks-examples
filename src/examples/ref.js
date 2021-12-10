import React, { useState, useEffect, useRef } from "react";
import "./App.css";

// let renderCount = 1;

function App() {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1); // object with current
  const inputRef = useRef(null); // object with
  // const prevValue

  useEffect(() => {
    // setRenderCount((prev) => prev + 1);
    // renderCount++;
    renderCount.current++;
    console.log(inputRef.current.value);
  });

  const focus = () => inputRef.current.focus();
  return (
    <div className="App">
      <h1> Count of renders: {renderCount.current}</h1>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={focus} className="btn btn-success">
        Focus
      </button>
    </div>
  );
}

export default App;
