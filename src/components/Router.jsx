import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Home />}
          path="/"
        />


        {/* Route for not found page */}
        <Route
          element={
            <>
              <h2 style={{ textAlign: "center" }}>Page not found</h2>
              <Link
                to="/"
                className="button">
                Go home
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
