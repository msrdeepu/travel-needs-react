import React, { useState } from "react";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Packinglist from "./components/Packinglist";
import Addform from "./components/Addform";

function App() {
  const [items, setItems] = useState([]);
  const handleNewItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  let itemsLength = items.length;
  const deleteHandler = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Topbar />
      <Addform onAddItems={handleNewItem} />
      <Packinglist
        items={items}
        onDeleteItem={deleteHandler}
        onToggleItems={handleToggle}
      />
      <Footer itemsCount={itemsLength} />
    </div>
  );
}

export default App;
