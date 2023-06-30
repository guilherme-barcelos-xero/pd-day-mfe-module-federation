import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => (
  <div className="cart-container">
    <strong>Cart</strong>
    <div>You have 1 item(s) in your cart</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("cart-dev"));
