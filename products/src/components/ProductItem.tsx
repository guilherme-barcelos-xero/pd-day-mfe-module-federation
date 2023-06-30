import React from 'react';
import { Link } from "react-router-dom";

import XUIActions from '@xero/xui/react/actions';
import XUIPanel from '@xero/xui/react/panel';
import { XUIColumn, XUIRow } from '@xero/xui/react/structural';

import { IProduct } from '../services/productsService';

import AddToCart from "cart/AddToCart";

interface IProductItemProps extends IProduct {
}

export default ({
  id,
  image,
  name,
  price,
  description,
}: IProductItemProps) => {
  return (
    <XUIPanel>
      <XUIRow variant="flex">
          <XUIColumn gridColumns="full">
            <Link to={`/product/${id}`}>
              <img src={image} alt={name} width={50} height={50}/>
            </Link>
          </XUIColumn>
        </XUIRow>
        <XUIRow variant="flex">
          <XUIColumn gridColumns="half">
              <strong>{name}</strong>
          </XUIColumn>
          <XUIColumn gridColumns="half">
              {price}
          </XUIColumn>
        </XUIRow>
        <XUIRow variant="flex">
          <XUIColumn gridColumns="full">
              {description}
          </XUIColumn>
        </XUIRow>
        <XUIActions
          className="xui-padding-top"
          primaryAction={<AddToCart id={id} />}
        />
    </XUIPanel>
  );
};