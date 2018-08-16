import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import RoomsContainer from './components/RoomsContainer/RoomsContainer';

export default () => (
  <div className="container">
    <BrowserRouter>
      <div>
        <Navigation />
        <Route exact path="/" component={RoomsContainer} />
      </div>
    </BrowserRouter>
  </div>
);
