import PropTypes from "prop-types";
import styles from "./TicTacToe.module.scss";
import { useEffect, useState } from "react";

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
  const [winner, setWinner] = useState(null);
  useEffect(() => {
    calculateWinner();
  }, [squares]);

  const writeSign = (isNowX, squareIndex) => {
    if (squares[squareIndex] || winner) return;
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

  const calculateWinner = () => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combinations.length; i++) {
      let [a, b, c] = combinations[i];
      if (squares[a] != null && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log(squares[a]);
        setWinner(squares[a]);
      }
    }
  };

  const header = () => {
    if (winner) {
      return <h1>{winner} win</h1>;
    } else {
      return <h1>Next step is {isNowX ? "X" : "O"}</h1>;
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
  };

  return (
    <>
      {header()}
      <Board
        active
        squares={squares}
        writeSign={(i) => writeSign(isNowX, i)}
      />
      <button
        className="button"
        onClick={resetGame}>
        Reset
      </button>
    </>
  );
};

export default TicTacToe;
