import React, { useState, useCallback } from "react";
import "./App.css";
import ItemsList from "./importList.js";

function App() {
  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? "white" : "black",
  };

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill(" ").map((_, i) => `Element ${i + 1}`);
  }, [count]);

  return (
    <div className="App">
      <h1 style={styles}>count of elements {count}</h1>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="btn btn-danger">
        add
      </button>

      <button
        onClick={() => setColored((prev) => !prev)}
        className="btn btn-warning">
        Change
      </button>
      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}

export default App;
