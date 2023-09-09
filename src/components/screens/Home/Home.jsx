import { Link } from "react-router-dom";

function Home() {
  return (
    <>
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
