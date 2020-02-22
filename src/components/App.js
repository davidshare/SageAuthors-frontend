import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage.compoent';
import Signup from './Signup/Signup.component';
import Signin from './Signin/Signin.component';

import './App.scss';
import AuthContextProvider from '../context/Auth.context';

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @returns {object} Jsx
   * @memberof App
   */
  render() {
    return (
      <AuthContextProvider>
        <Fragment>
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/signin" component={Signin} exact />
          </Switch>
        </Fragment>
      </AuthContextProvider>
    );
  }
}

export default App;
