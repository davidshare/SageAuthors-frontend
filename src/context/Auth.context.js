import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import authReducer from '../reducers/auth.reducer';

export const AuthContext = createContext();
const initialState = {
  isLoading: false,
  response: null,
  errorMsg: null,
  isAuthenticated: false,
};

const AuthContextProvider = (props) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthContextProvider;
