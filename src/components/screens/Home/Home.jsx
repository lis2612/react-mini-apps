import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h2>This is a set of mini-applications based on the React.js. I made them to study this framework.</h2>
      <Link
        to="/react-mini-apps/counter"
        className="button">
        Counter
      </Link>

      <Link
        to="/react-mini-apps/modal"
        className="button">
        Modal
      </Link>

      <Link
        to="/react-mini-apps/quiz"
        className="button">
        Quiz
      </Link>

      <Link
        to="/react-mini-apps/tic-tac-toe"
        className="button">
        Tic Tac Toe
      </Link>
    </>
  );
}

export default Home;
