import React from 'react';

import XUIButton from '@xero/xui/react/button';

import withProvider from "./withProvider";
import { useAddToCartMutation } from '../services/cartService';

import "./Style.css";

const AddToCart = (id: number) => {
  const [addToCartMutation] = useAddToCartMutation();

  return (
    <XUIButton
      className='green-dotted'
      variant="main"
      fullWidth="always"
      onClick={() => addToCartMutation(id)}>
      Add to cart
    </XUIButton>
  );
};

export default withProvider(AddToCart);