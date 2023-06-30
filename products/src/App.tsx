import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <Router>
    <ProductList />
  </Router>
);
ReactDOM.render(<App />, document.getElementById("products-dev"));
