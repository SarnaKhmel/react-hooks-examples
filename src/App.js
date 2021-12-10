import React from "react";
import Main from "./Main.js";
import Alert from "./alert/Alert.js";
import "./App.css";
import { AlertProvider } from "./alert/AlertContext.js";

function App() {
  return (
    <AlertProvider>
      <div className="App">
        <div className="container pt-3">
          <Alert />
          <Main toogle={() => {}} />
        </div>
      </div>
    </AlertProvider>
  );
}

export default App;
