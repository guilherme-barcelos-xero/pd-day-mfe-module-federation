import React from 'react';

import withProvider from "./withProvider";
import { useGetCartQuery } from '../services/cartService';

import "./Style.css";

const AddToCart = (id: number) => {
  const { data: cart } = useGetCartQuery();
  
  return (
    <p className='green-dotted'>
      You have {cart?.cartItems?.length} item(s) in your cart.
    </p>
  );
};

export default withProvider(AddToCart);