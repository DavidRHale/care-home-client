import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation';

export default () => (
  <div className="container">
    <BrowserRouter>
      <div>
        <Navigation />
        <Route exact path="/" component={() => <h1>Care Home</h1>} />
      </div>
    </BrowserRouter>
  </div>
);
