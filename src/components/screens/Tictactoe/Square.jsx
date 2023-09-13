import PropTypes from "prop-types";
import styles from "./TicTacToe.module.scss";

const Square = ({ value, click }) => {
  return (
    <div
      className={styles.square}
      onClick={click}>
      {value}
    </div>
  );
};

Square.propTypes = {
  value: PropTypes.string,
  click: PropTypes.func,
};

export default Square;
