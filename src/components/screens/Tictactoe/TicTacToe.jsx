import PropTypes from "prop-types";
import styles from "./TicTacToe.module.scss";
import { useState } from "react";

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

const Board = ({ squares, writeSign }) => {
  return (
    <div className="container">
      <div className={styles.board}>
        {/* First row */}
        <Square
          value={squares[0]}
          click={() => writeSign(0)}
        />
        <Square
          value={squares[1]}
          click={() => writeSign(1)}
        />
        <Square
          value={squares[2]}
          click={() => writeSign(2)}
        />
        {/* Second row */}
        <Square
          value={squares[3]}
          click={() => writeSign(3)}
        />
        <Square
          value={squares[4]}
          click={() => writeSign(4)}
        />
        <Square
          value={squares[5]}
          click={() => writeSign(5)}
        />
        {/* Third row */}
        <Square
          value={squares[6]}
          click={() => writeSign(6)}
        />
        <Square
          value={squares[7]}
          click={() => writeSign(7)}
        />
        <Square
          value={squares[8]}
          click={() => writeSign(8)}
        />
      </div>
    </div>
  );
};
Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string),
  writeSign: PropTypes.func,
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNowX, setIsNowX] = useState(true);
  const writeSign = (isNowX, squareIndex) => {
    if (squares[squareIndex]) return;
    const newSquares = [...squares];
    if (isNowX) {
      newSquares[squareIndex] = "X";
      setIsNowX(!isNowX);
    } else {
      newSquares[squareIndex] = "O";
      setIsNowX(!isNowX);
    }
    setSquares(newSquares);
  };
  return (
    <>
      <h1>Now step is {isNowX?"X":"O"}</h1>

      <Board
        squares={squares}
        writeSign={(i) => writeSign(isNowX, i)}
      />
    </>
  );
};

export default TicTacToe;
