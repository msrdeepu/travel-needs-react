import React from "react";

const Addform = () => {
  return (
    <form className="add-form">
      <h3>What do you need for your trip?</h3>
      <select name="" id="">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
};

export default Addform;
