import React, { useState, useEffect, useRef } from "react";
import "./App.css";

let renderCount = 1;

function App() {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState("initial");

  useEffect(() => {
    // setRenderCount((prev) => prev + 1);
    renderCount++;
  });
  return (
    <div className="App">
      <h1> Count of renders: {renderCount}</h1>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
}

export default App;
