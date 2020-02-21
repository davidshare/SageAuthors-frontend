import React, { Component, Fragment } from 'react';
import './App.scss';
import LandingPage from './LandingPage/LandingPage.compoent';

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
        <LandingPage />
      </Fragment>
    );
  }
}

export default App;
