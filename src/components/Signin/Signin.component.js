import React, { Fragment, useState, useContext } from 'react';

import AuthContainer from '../hoc/AuthContainer.component';
import { AuthContext } from '../../context/Auth.context';
import signinUser from '../../actions/auth.action';

import './Signin.styles.scss';

const Signin = () => {
  const initialState = {
    email: '',
    password: '',
    loading: '',
  };

  const [signinState, setSigninState] = useState(initialState);
  const { dispatch, authState } = useContext(AuthContext);
  const {
    email, password, loading,
  } = signinState;

  const handleInputChange = (event) => {
    setSigninState({
      ...signinState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    signinUser(dispatch, { email, password });
  };

  return (
    <Fragment>
      <AuthContainer>
        <form
          method="POST"
          onSubmit={handleSignin}
          className="auth-form signup-form"
          autofill="false"
        >
          <p className="input-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="email">Email</label>
          </p>
          <p className="input-group">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="password">Password</label>
          </p>
          <p className="submit-action">
            <a href="/signup" className="btn btn-blue-outline">
          Signup
            </a>
            <button
              type="submit"
              className="btn btn-blue"
              disabled={loading}
              role="signin"
            >
              {loading ? 'Loading...' : 'Signin'}
            </button>
          </p>
          <p className="error-msg">{authState.errorMsg}</p>
        </form>
        <div className="auth-page-message">
          <p className="auth-welcome-text">
            Welcome <span className="app-name">Sage</span>!!! We have been expecting you.
          </p>
          <p className="auth-signup message">
            Please <strong>Signin</strong> to share your wisdom.
          </p>
        </div>
      </AuthContainer>
    </Fragment>
  );
};
export default Signin;
