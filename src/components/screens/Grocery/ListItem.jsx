import { faSquare, faSquareCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Counter from "./Counter";
import styles from "./Grocery.module.scss";

const ListItem = ({ item, deleteItem, toggleChecked, setCount }) => {
  return (
    <div className={styles.listItem}>
      <button
        className={styles.listItem__button}
        onClick={toggleChecked}>
        {item.checked && <FontAwesomeIcon icon={faSquareCheck} />}
        {!item.checked && <FontAwesomeIcon icon={faSquare} />}
      </button>
      <p className={item.checked ? styles.listItem__text_checked : styles.listItem__text}>{item.text}</p>
      <Counter
        item={item}
        increment={() => setCount(item.id, 1)}
        decrement={() => setCount(item.id, -1)}
      />
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
  setCount: PropTypes.func,
};

export default ListItem;
