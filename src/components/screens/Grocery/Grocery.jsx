import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Grocery.module.scss";
import "./Grocery.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faTrashCan, faSquareCheck, faSquare } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ item, deleteItem, toggleChecked }) => {
  return (
    <div className={styles.listItem}>
      <button
        className={styles.listItem__button}
        onClick={toggleChecked}>
        {item.checked && <FontAwesomeIcon icon={faSquareCheck} />}
        {!item.checked && <FontAwesomeIcon icon={faSquare} />}
      </button>
      <p className={item.checked ? styles.listItem__text_checked : styles.listItem__text}>{item.text}</p>
      <button
        className={styles.listItem__button}
        onClick={deleteItem}>
        <FontAwesomeIcon
          className={styles.listItem__delete}
          icon={faTrashCan}
        />
      </button>
    </div>
  );
};
ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  deleteItem: PropTypes.func,
  toggleChecked: PropTypes.func,
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
      text: newItem[0].toUpperCase() + newItem.slice(1),
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
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Grocery;
