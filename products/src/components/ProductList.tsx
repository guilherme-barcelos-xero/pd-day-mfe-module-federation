import React, { useEffect, useRef, useState } from "react";

import { XUILoader } from "@xero/xui/react/loader";

import ProductItem from "./ProductItem";
import { useGetProductsQuery } from "../services/productsService";
import withProvider from "./withProvider";

import "./Style.css";

const ProductList = () => {
  const LOGIN_USER_LOGGED_IN = "login:userLoggedIn";
  const LOGIN_USER_LOGGED_OUT = "login:userLoggedOut";

  const { data: products, isLoading } = useGetProductsQuery();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // TODO: Event listeners are not updating state here
  useEffect(() => {
    const onUserLoggedIn = () => {
      setIsUserLoggedIn(true);
    }
    const userLoggedOut = () => {
      setIsUserLoggedIn(false);
    }

    window.addEventListener(LOGIN_USER_LOGGED_IN, onUserLoggedIn);
    window.addEventListener(LOGIN_USER_LOGGED_OUT, userLoggedOut);

    return () => {
      window.removeEventListener(LOGIN_USER_LOGGED_IN, onUserLoggedIn);
      window.removeEventListener(LOGIN_USER_LOGGED_OUT, userLoggedOut);
    };
  }, []);

  const productItems = 
    products?.map(product => (
      <ProductItem
        key={product.id}
        {...product}
      />
    ));

  return (
    <div className="blue-dotted">
      {isLoading ? <XUILoader ariaLabel="Loading" /> : productItems}
    </div>
  );
};

export default withProvider(ProductList);