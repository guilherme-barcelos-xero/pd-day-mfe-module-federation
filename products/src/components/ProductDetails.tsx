import React from 'react';
import { useParams } from "react-router-dom";

import { XUIColumn, XUIRow } from '@xero/xui/react/structural';
import XUILoader from "@xero/xui/react/loader";

import { useGetProductQuery } from '../services/productsService';
import withProvider from "./withProvider";

import "./Style.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductQuery(id);
  
  return (
    <>
      {product && <XUIRow variant="grid" className='blue-dotted'>
          <XUIColumn gridColumns="half">
            <XUIRow variant="flex">
              <XUIColumn gridColumns="full">
                <img src={product.image} alt={product.name} width={"100%"} height={"100%"}/>
              </XUIColumn>
            </XUIRow>
          </XUIColumn>
          <XUIColumn gridColumns="half">
            <XUIRow variant="flex">
              <XUIColumn gridColumns="full">
                <h1>{product.name}</h1>
              </XUIColumn>
            </XUIRow>
            <XUIRow variant="flex">
              <XUIColumn gridColumns="full">
                <p>{product.description}</p>
              </XUIColumn>
            </XUIRow>
            <XUIRow variant="flex">
              <XUIColumn gridColumns="full">
                <p>{product.longDescription}</p>
              </XUIColumn>
            </XUIRow>
          </XUIColumn>
        </XUIRow>
      }
      {
        !product && isLoading && <XUILoader ariaLabel="Loading"/>
      }
      {
        !product && !isLoading && "Product not found"
      }
    </>
  );
};

export default withProvider(ProductDetails);