import React, { Component } from 'react';

import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <h1>Care Home</h1>
      </div>
    );
  }
}

export default App;
