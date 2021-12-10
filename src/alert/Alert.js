import React, { useContext } from "react";
import { AlertContext } from "../App.js";
export default function Alert() {
  const alert = useContext(AlertContext);
  if (!alert) return null;
  return (
    <>
      <div className={"alert alert-danger"}>Wooooo, very fucking news</div>
    </>
  );
}
