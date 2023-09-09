import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Router from "./components/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <Router />
    </div>
  </React.StrictMode>
);
