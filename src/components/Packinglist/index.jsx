import React from "react";
import "../../index.css";

const Item = ({ item, onDeleteItem, onToggleItems }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

const Packinglist = ({ items, onDeleteItem, onToggleItems }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <Item
          item={item}
          onDeleteItem={onDeleteItem}
          key={item.id}
          onToggleItems={onToggleItems}
        />
      ))}
    </ul>
  );
};

export default Packinglist;
