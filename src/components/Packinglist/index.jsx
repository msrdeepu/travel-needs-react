import React from "react";
import "../../index.css";

const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

const Packinglist = ({ items }) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default Packinglist;
