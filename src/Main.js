import React from "react";
// import { useAlertToggle } from "./alert/AlertContext";
import { useAlert } from "./alert/AlertContext";

export default function Main() {
  const { toggle } = useAlert();
  return (
    <>
      <h1>Hi from context</h1>
      <button onClick={toggle} className="btn btn-success">
        Show results
      </button>
    </>
  );
}
