import React, { Component, Fragment } from 'react';
import Navbar from './Navbar/Navbar.component';

import './App.scss';
import LandingPageGallery from './LandingPageGallery/LandingPageGallery.component';
import LandingPageArticles from './LandingPageArticles/LandingPageArticles.component';

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
        <Navbar />
        <LandingPageGallery />
        <LandingPageArticles />
      </Fragment>
    );
  }
}

export default App;
