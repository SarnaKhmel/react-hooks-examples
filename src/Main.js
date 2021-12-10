import React from "react";

export default function Main({ toogle }) {
  return (
    <>
      <h1>Hi from context</h1>
      <button onClick={toogle} className="btn btn-success">
        Show results
      </button>
    </>
  );
}
