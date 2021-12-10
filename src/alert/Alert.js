import React from "react";
import { useAlert } from "./AlertContext.js";

export default function Alert() {
  const alert = useAlert();
  if (!alert.visible) return null;
  return (
    <>
      <div className={"alert alert-danger"} onClick={alert.toggle}>
        Wooooo, very fucking news
      </div>
    </>
  );
}
