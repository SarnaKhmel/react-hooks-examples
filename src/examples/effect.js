import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    return () => {
      console.log("clean type");
    };
    console.log("Type changed", type);
  }, [type]);

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    console.log("Component did mount");
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div className="App">
      <h1>Resources: {type}</h1>
      <button onClick={() => setType("users")}>Users</button>
      <button onClick={() => setType("todos")}>Todo</button>
      <button onClick={() => setType("posts")}>Posts</button>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
      {/* <pre>{JSON.stringify(info, null, 2)}</pre> */}
    </div>
  );
}

export default App;
