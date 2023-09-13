import PropTypes from "prop-types";
import styles from "./TicTacToe.module.scss";
import Square from "./Square";

const Board = ({ squares, writeSign }) => {
  return (
    <div className="container">
      <div className={styles.board}>
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            click={() => writeSign(index)}
          />
        ))}
      </div>
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string),
  writeSign: PropTypes.func,
};

export default Board;
