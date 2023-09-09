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
    </>
  );
}

export default Home;
