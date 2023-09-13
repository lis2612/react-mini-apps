import PropTypes from "prop-types"
import styles from "./TicTacToe.module.scss";

const Square = ({value}) => {
  return (
    <div className={styles.square}>{value}</div>
  )

}

Square.propTypes = {
  value:PropTypes.string,
}

const Board = () => {
  return (
    <div className="container">
      <h1>Now step is X</h1>
      <div className={styles.board}>
        {/* First row */}
        <Square value="X"/>
        <Square value="X"/>
        <Square value="X"/>
        {/* Second row */}
        <Square value="X"/>
        <Square value="X"/>
        <Square value="X"/>
        {/* Third row */}
        <Square value="X"/>
        <Square value="X"/>
        <Square value="X"/>
      </div>
    </div>
  );
};

const TicTacToe = () => {
  return <Board />;
};

export default TicTacToe;
