import React, { useState } from "react";
import Main from "./Main.js";
import Alert from "./alert/Alert.js";
import "./App.css";

export const AlertContext = React.createContext();

function App() {
  const [alert, setAlert] = useState(false);
  const toggleAlert = () => setAlert((prev) => !prev);

  return (
    <AlertContext.Provider value={alert}>
      <div className="App">
        <div className="container pt-3">
          <Alert />
          <Main toogle={toggleAlert} />
        </div>
      </div>
    </AlertContext.Provider>
  );
}

export default App;
