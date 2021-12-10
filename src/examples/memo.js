import React, { useState, useMemo, useEffect } from "react";
import "./App.css";

function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return (num = num * 2);
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? "red" : "green",
    }),
    [colored]
  );

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log("styles changed");
  }, [styles]);

  return (
    <div className="App">
      <h1 style={styles}>Counting properties {computed}</h1>

      <button
        onClick={() => setNumber((prev) => prev + 1)}
        className="btn btn-success">
        increment
      </button>

      <button
        onClick={() => setNumber((prev) => prev - 1)}
        className="btn btn-danger">
        decrement
      </button>

      <button
        onClick={() => setColored((prev) => !prev)}
        className="btn btn-warning">
        Change
      </button>
    </div>
  );
}

export default App;
