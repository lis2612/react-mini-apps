import { useEffect, useState } from "react";
import Board from "./Board";

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
        setWinner(squares[a]);
      }
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
  };

  return (
    <>
      {winner ? <h1>{winner} win</h1> : <h1>Next step is {isNowX ? "X" : "O"}</h1>}
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
