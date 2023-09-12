import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <p>This is a set of mini-applications based on the React.js. I made them to study this framework.</p>
      <Link
        to="/counter"
        className="button">
        Counter
      </Link>

      <Link
        to="/modal"
        className="button">
        Modal
      </Link>

      <Link
        to="/quiz"
        className="button">
        Quiz
      </Link>

      <Link
        to="/tic-tac-toe"
        className="button">
        Tic Tac Toe
      </Link>
    </>
  );
}

export default Home;
