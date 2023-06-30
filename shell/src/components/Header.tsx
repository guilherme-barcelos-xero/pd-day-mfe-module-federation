import React from 'react';
import { Link } from "react-router-dom";

import XUIPageHeader from '@xero/xui/react/pageheader';
import XUIPicklist, { XUIPickitem } from '@xero/xui/react/picklist';

import MiniCart from 'cart/MiniCart';
import Login from 'auth/Login';

interface IHeaderProps {
  isUserLoggedIn: boolean;
}

export default ({
  isUserLoggedIn
}: IHeaderProps) => {
  const builtTabs = (
    <XUIPicklist>
      <XUIPickitem id="home">
        <Link to="/"><strong>Home</strong></Link>
      </XUIPickitem>
      {isUserLoggedIn && 
        <>
        <XUIPickitem id="cart">
          <Link to="/cart">Cart</Link>
        </XUIPickitem>
        <XUIPickitem id="mini-cart">
          <MiniCart />
        </XUIPickitem>
        </>
      }
      {<Login />}
    </XUIPicklist>
  );
  return <XUIPageHeader tabs={builtTabs} title="App" className="red-dotted"/>;
};