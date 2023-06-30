import React, { ReactNode, } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const withProvider = (WrappedComponent) => (props: any) => (
  <Provider store={store}>
    <WrappedComponent {...props} />
  </Provider>
);

export default withProvider;