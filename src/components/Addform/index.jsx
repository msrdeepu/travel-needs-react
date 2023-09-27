import React, { useState } from "react";

const submitHandler = (e) => {
  e.preventDefault();
  console.log(e.target.value);
};

const Addform = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState();

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <h3>What do you need for your trip?</h3>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Item..."
      />
      <button>Add</button>
    </form>
  );
};

export default Addform;
