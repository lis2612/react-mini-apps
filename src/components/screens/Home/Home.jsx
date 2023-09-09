import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
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
    </div>
  );
}

export default Home;
