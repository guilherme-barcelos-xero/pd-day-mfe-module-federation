import React, { useState } from 'react';
import XUIActions from '@xero/xui/react/actions';
import XUIButton from '@xero/xui/react/button';
import XUIModal, { XUIModalBody, XUIModalFooter, XUIModalHeader } from '@xero/xui/react/modal';
import XUITextInput from '@xero/xui/react/textinput';

import { useLoginMutation } from '../services/authService';

interface ILoginModalProps {
  onLogin(): void;
  isOpen: boolean;
}

const LoginModal = ({
  onLogin,
  isOpen
}: ILoginModalProps) => {
  const [loginMutation] = useLoginMutation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onClick = async () => {
    try {
      await loginMutation({ user: userName, password }).unwrap();
      onLogin();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <XUIModal closeButtonLabel="Close" isOpen={isOpen}>
        <XUIModalHeader>Login</XUIModalHeader>
        <XUIModalBody>
          <XUITextInput isFieldLayout label="Username" onChange={(e) => setUserName(e.target.value)} />
          <XUITextInput isFieldLayout label="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        </XUIModalBody>
        <XUIModalFooter>
          <XUIActions
            primaryAction={
              <XUIButton onClick={onClick} variant="main">
                Login
              </XUIButton>
            }
          />
        </XUIModalFooter>
      </XUIModal>
    </>
  );
};

export default LoginModal;