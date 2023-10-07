import React from "react";
import "../../index.css";

const Item = ({ item, onDeleteItem }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

const Packinglist = ({ items, onDeleteItem }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
      ))}
    </ul>
  );
};

export default Packinglist;
