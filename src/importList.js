import React, { useState, useEffect } from "react";

export default function ItemsList({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const newItems = getItems();
    console.log("render");
    setItems(newItems);
  }, [getItems]);
  return (
    <ul className="list">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
