import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { XUICompositionDetailHeader } from '@xero/xui/react/compositions';

const ProductList = React.lazy(() => import('products/ProductList'));
const ProductDetails = React.lazy(() => import('products/ProductDetails'));
const Cart = React.lazy(() => import('cart/Cart'));

import "./App.css";
import Header from "./Header";

const App = () => {
  const LOGIN_USER_LOGGED_IN = "login:userLoggedIn";
  const LOGIN_USER_LOGGED_OUT = "login:userLoggedOut";

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const onUserLoggedIn = () => setIsUserLoggedIn(true);
    const userLoggedOut = () => setIsUserLoggedIn(false);

    window.addEventListener(LOGIN_USER_LOGGED_IN, onUserLoggedIn);
    window.addEventListener(LOGIN_USER_LOGGED_OUT, userLoggedOut);

    return () => {
      window.removeEventListener(LOGIN_USER_LOGGED_IN, onUserLoggedIn);
      window.removeEventListener(LOGIN_USER_LOGGED_OUT, userLoggedOut);
    };
  }, [])

  const RoutesWrapper = () => (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/product/:id" component={ProductDetails} />
        {isUserLoggedIn && <Route path="/cart" component={Cart} />}
      </Switch>
    </React.Suspense>
  );

  return (
    <div className="shell-container red-dotted">
      <Router>
        <XUICompositionDetailHeader detail={<RoutesWrapper />} header={<Header isUserLoggedIn={isUserLoggedIn} />} />; 
      </Router>
    </div>
    );
  };

export default App;
