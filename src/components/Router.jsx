import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import Counter from "./screens/Counter/Counter";
import Modal from "./screens/Modal/Modal";
import Quiz from "./screens/Quiz/Quiz";
import TicTacToe from "./screens/Tictactoe/TicTacToe";

const GoHome = () => {
  return (
    <Link
      to="/react-mini-apps/"
      className="button"
      style={{position:"relative",  top: "0",margin:"30px auto" }}>
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
          path="/react-mini-apps/"
        />

        <Route
          element={
            <>
              <GoHome />
              <Counter />
            </>
          }
          path="/react-mini-apps/counter"
        />

        <Route
          element={
            <>
              <GoHome />
              <Modal />
            </>
          }
          path="/react-mini-apps/modal"
        />

        <Route
          element={
            <>
              <GoHome />
              <Quiz />
            </>
          }
          path="/react-mini-apps/quiz"
        />

        <Route
          element={
            <>
              <GoHome />
              <TicTacToe />
            </>
          }
          path="/react-mini-apps/tic-tac-toe"
        />

        {/* Route for not found page */}
        <Route
          element={
            <>
              <h2 style={{ textAlign: "center" }}>Page not found</h2>
              <Link
                to="/react-mini-apps/"
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
