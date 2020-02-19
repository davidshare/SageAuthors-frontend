import React, { Component } from 'react';
import Navbar from './Navbar/Navbar.component';

import './App.scss';

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
      </div>
    );
  }
}

export default App;
