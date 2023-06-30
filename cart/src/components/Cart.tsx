import React from 'react';

import withProvider from "./withProvider";
import { useGetCartQuery } from '../services/cartService';

import "./Style.css";

const Cart = () => {
  const { data: cart } = useGetCartQuery();
  
  return (
    <p className='green-dotted'>
      {JSON.stringify(cart)}
    </p>
  );
};

export default withProvider(Cart);