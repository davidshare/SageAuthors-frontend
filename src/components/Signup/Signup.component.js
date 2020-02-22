import React, { Fragment, useState } from 'react';
import Axios from 'axios';

import AuthContainer from '../hoc/AuthContainer.component';
import './Signup.styles.scss';

const Signup = () => {
  const initialState = {
    lastname: '',
    firstname: '',
    email: '',
    username: '',
    password: '',
    loading: '',
    errorMsg: '',
  };

  const [signupState, setSignupState] = useState(initialState);

  const handleInputChange = (event) => {
    setSignupState({
      ...signupState,
      [event.target.name]: event.target.value,
    });
  };

  const { loading, errorMsg, ...userObject } = signupState;
  const handleSignup = async (e) => {
    e.preventDefault();
    setSignupState({
      ...signupState,
      loading: true,
      errorMsg: null,
    });
    try {
      const user = await Axios.post(`${process.env.API_BASE_URL}/auth/signup`, {
        ...userObject,
      });

      if (user) {
        window.location.href = '/signin';
      }
    } catch (error) {
      setSignupState({
        ...signupState,
        loading: false,
        errorMsg: error.response
          ? error.response.data.message
          : 'Sorry, there was an error, please try again',
      });
    }
  };

  return (
    <Fragment>
      <AuthContainer>
        <form
          method="POST"
          onSubmit={handleSignup}
          className="auth-form signup-form"
          autofill="false"
        >
          <p className="input-group">
            <input
              type="name"
              name="firstname"
              id="firstname"
              placeholder="Firstname"
              value={signupState.firstname}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="firstname">Firstname</label>
          </p>
          <p className="input-group">
            <input
              type="name"
              name="lastname"
              id="lastname"
              placeholder="Lastname"
              value={signupState.lastname}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="lastname">Lastname</label>
          </p>
          <p className="input-group">
            <input
              type="name"
              name="username"
              id="username"
              placeholder="Username"
              value={signupState.username}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="username">Username</label>
          </p>
          <p className="input-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={signupState.email}
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
              value={signupState.password}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="password">Password</label>
          </p>
          <p className="submit-action">
            <a href="/signin" className="btn btn-blue-outline">
              Signin
            </a>
            <button
              type="submit"
              className="btn btn-blue"
              disabled={loading}
              role="signup"
            >
              {loading ? 'Loading...' : 'Signup'}
            </button>
          </p>
          <p className="error-msg">{signupState.errorMsg}</p>
        </form>
        <div className="auth-page-message">
          <p className="auth-welcome-text">
            Welcome to <span className="app-name">SageAuthors</span>
          </p>
          <p className="auth-signup message">
            Please <strong>Signup</strong> to join the League of Sages
          </p>
        </div>
      </AuthContainer>
    </Fragment>
  );
};

export default Signup;
