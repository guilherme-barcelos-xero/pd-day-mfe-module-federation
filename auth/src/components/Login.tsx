import React, { useEffect, useState } from 'react';

import XUIButton from '@xero/xui/react/button';

import LoginModal from './LoginModal';
import withProvider from "./withProvider";
import { clearJwtToken, hasJwtToken } from '../services/utils';

import "./Style.css";

const Login = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const USER_LOGGED_IN_EVENT = 'login:userLoggedIn';
  const USER_LOGGED_OUT_EVENT = 'login:userLoggedOut';
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (hasJwtToken()){
      const event = new CustomEvent(USER_LOGGED_IN_EVENT, {});
      window.dispatchEvent(event);
    }
  }, []);

  const onClick = () => {
    let eventName;
    if (isUserLoggedIn) {
      setIsUserLoggedIn(false);
      clearJwtToken();
      eventName = USER_LOGGED_OUT_EVENT;
    } else {
      setIsUserLoggedIn(true);
      setIsModalOpen(false);
      eventName = USER_LOGGED_IN_EVENT;
    }

    const event = new CustomEvent(eventName, {});
    window.dispatchEvent(event);
  }
  
  return (
    <>
    <XUIButton
      className="yellow-dotted"
      variant="standard"
      onClick={onClick}>
      {isUserLoggedIn ? "Logout" : "Login" }
    </XUIButton>
    <LoginModal onLogin={onClick} isOpen={isModalOpen} />
    </>
  );
};

export default withProvider(Login);