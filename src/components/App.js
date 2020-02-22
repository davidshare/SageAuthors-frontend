import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import LandingPage from './LandingPage/LandingPage.compoent';
import Signup from './Signup/Signup.component';

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
      <Fragment>
        <Switch>
          <Route path='/' component={LandingPage} exact />
          <Route path='/signup' component={Signup} exact />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
