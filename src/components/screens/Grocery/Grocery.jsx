import { useEffect, useState } from "react";

const ListItem = ({ item }) => {
  return (
    <div>
      <span>{item.text}</span>
      <button>check</button>
      <button>delete</button>
    </div>
  );
};

const Grocery = () => {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([
    {
      id: 1,
      text: "Milk",
      checked: false,
    },
    {
      id: 2,
      text: "Orange",
      checked: false,
    },
    {
      id: 3,
      text: "Meat",
      checked: false,
    },
    {
      id: 4,
      text: "Water",
      checked: true,
    },
  ]);


  const addItem = () => {
    if (!newItem) return
    const newItemData = {
      id: Date.now(),
      text: newItem,
      checked: false,
    };
    setList((prev) => [...prev, newItemData])
    setNewItem("")
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
        <button onClick={addItem}>Add</button>
      </div>
      {list.map((item) => (
        <ListItem
          key={item.id}
          item={item}
        />
      ))}
      <div>
        <div></div>
      </div>
    </>
  );
};

export default Grocery;
