import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [type, setType] = useState("users");

  return (
    <div className="App">
      <h1>Resources: {type}</h1>
      <button>Users</button>
      <button>Todo</button>
      <button>Posts</button>
    </div>
  );
}

export default App;
