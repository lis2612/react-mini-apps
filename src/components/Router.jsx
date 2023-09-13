import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import Counter from "./screens/Counter/Counter";
import Modal from "./screens/Modal/Modal";
import Quiz from "./screens/Quiz/Quiz";
import TicTacToe from "./screens/Tictactoe/TicTacToe";

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
              <Modal />
            </>
          }
          path="/modal"
        />

        <Route
          element={
            <>
              <GoHome />
              <Quiz />
            </>
          }
          path="/quiz"
        />

        <Route
          element={
            <>
              <GoHome />
              <TicTacToe/>
            </>
          }
          path="/tic-tac-toe"
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
