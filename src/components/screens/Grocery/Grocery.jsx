import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./Grocery.module.scss";
import ListItem from "./ListItem";

const Grocery = () => {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([
    {
      id: 1,
      text: "Milk",
      checked: false,
      count: 1,
    },
    {
      id: 2,
      text: "Orange",
      checked: false,
      count: 5,
    },
    {
      id: 3,
      text: "Meat",
      checked: false,
      count: 2,
    },
    {
      id: 4,
      text: "Water",
      checked: true,
      count: 3,
    },
  ]);

  const addItem = () => {
    if (!newItem) return;
    const newItemData = {
      id: Date.now(),
      text: newItem[0].toUpperCase() + newItem.slice(1),
      checked: false,
      count: 1,
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

  const setCount = (id, num) => {
    const index = list.findIndex((item) => item.id === id);
    if (list[index].checked) return;
    const newList = [...list];
    newList[index].count = list[index].count + num;
    if (newList[index].count < 0) newList[index].count = 0;
    setList(newList);
  };

  return (
    <>
      <h2>Grocery list</h2>
      <div>
        <div className={styles.newGrocery}>
          <input
            className={styles.newGrocery__input}
            type="text"
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => {
              if (e.code === "Enter" || e.code === "NumpadEnter") addItem();
            }}
            value={newItem}
          />
          <button
            className={styles.newGrocery__button}
            onClick={addItem}>
            <FontAwesomeIcon
              icon={faSquarePlus}
              beat
            />
          </button>
        </div>
        <div className={styles.grocery}>
          {list
            .filter((item) => !item.checked)
            .map((item) => (
              <ListItem
                key={item.id}
                item={item}
                deleteItem={() => deleteItem(item.id)}
                toggleChecked={() => toggleChecked(item.id)}
                setCount={setCount}
              />
            ))}
          {list
            .filter((item) => item.checked)
            .map((item) => (
              <ListItem
                key={item.id}
                item={item}
                deleteItem={() => deleteItem(item.id)}
                toggleChecked={() => toggleChecked(item.id)}
                setCount={setCount}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Grocery;
