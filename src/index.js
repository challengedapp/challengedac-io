import React from "react";
import ReactDom from "react-dom";
import "./stylesheets/style.css";
import "./stylesheets/custom.css";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
