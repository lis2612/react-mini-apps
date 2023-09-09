import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import Counter from "./screens/Counter/Counter";
import Modal from "./screens/Modal/Modal";

const GoHome = () => {
  return (
    <Link
      to="/"
      className="button"
      style={{ position: "fixed", top: "0",marginTop:"30px" }}>
      Home page
    </Link>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Home />}
          path="/"
        />

        <Route
          element={
            <>
              <GoHome />
              <Counter />
            </>
          }
          path="/counter"
        />

        <Route
          element={
            <>
              <GoHome />
              <Modal/>
            </>
          }
          path="/modal"
        />

        {/* Route for not found page */}
        <Route
          element={
            <>
              <h2 style={{ textAlign: "center" }}>Page not found</h2>
              <Link
                to="/"
                className="button">
                Home page
              </Link>
            </>
          }
          path="*"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
