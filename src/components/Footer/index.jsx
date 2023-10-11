import React from "react";
import "../../index.css";

const Footer = ({ itemsCount }) => {
  return (
    <footer className="stats">
      <em>
        You Have {itemsCount} items on your list, and you already packed X (X%)
      </em>
    </footer>
  );
};

export default Footer;
