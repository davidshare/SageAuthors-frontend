import React, { Component } from 'react';
import Navbar from './Navbar/Navbar.component';

import './App.scss';
import LandingPageGallery from './LandingPageGallery/LandingPageGallery.component';

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
      <div>
        <Navbar />
        <LandingPageGallery />
      </div>
    );
  }
}

export default App;
