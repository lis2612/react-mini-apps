import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import styles from "./Grocery.module.scss";

const Counter = ({ item, decrement, increment }) => {
  return (
    <>
      <button
        disabled={item.checked}
        className={styles.counter__button}
        onClick={decrement}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <p className={styles.counter__count}>{item.count}</p>
      <button
        disabled={item.checked}
        className={styles.counter__button}
        onClick={increment}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </>
  );
};
Counter.propTypes = {
  item: PropTypes.object.isRequired,
  decrement: PropTypes.func,
  increment: PropTypes.func,
};

export default Counter;
