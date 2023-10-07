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

  const deleteHandler = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Topbar />
      <Addform onAddItems={handleNewItem} />
      <Packinglist items={items} onDeleteItem={deleteHandler} />
      <Footer />
    </div>
  );
}

export default App;
