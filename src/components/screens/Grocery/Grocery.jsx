import { useState } from "react";

const ListItem = ({ item, deleteItem, toggleChecked }) => {
  return (
    <div>
      <span>{item.text}</span>
      <button onClick={toggleChecked}>check</button>
      <button onClick={deleteItem}>delete</button>
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
    if (!newItem) return;
    const newItemData = {
      id: Date.now(),
      text: newItem,
      checked: false,
    };
    setList((prev) => [...prev, newItemData]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id != id);
    setList(newList);
  };

  const toggleChecked = (id) => {
    const index = list.findIndex((item) => item.id === id);
    const newList = [...list];
    newList[index].checked = !list[index].checked;
    setList(newList);
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
          deleteItem={() => deleteItem(item.id)}
          toggleChecked={() => toggleChecked(item.id)}
        />
      ))}
      <div>
        <div></div>
      </div>
    </>
  );
};

export default Grocery;