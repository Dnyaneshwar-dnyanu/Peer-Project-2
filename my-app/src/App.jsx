import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";  // ✅ Import BrowserRouter
import App from "./home";
import Home from "./home";

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById("root")
);

export default App;