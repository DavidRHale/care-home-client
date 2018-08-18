import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import RoomsContainer from './components/RoomsContainer/RoomsContainer';
import ResidentsContainer from './components/ResidentsContainer/ResidentsContainer';
import ResidentsEdit from './components/ResidentsEdit/ResidentsEdit';

export default () => (
  <div className="container">
    <BrowserRouter>
      <div>
        <Navigation />
        <Route exact path="/" component={RoomsContainer} />
        <Route exact path="/rooms" component={RoomsContainer} />
        <Route exact path="/residents" component={ResidentsContainer} />
        <Route exact path="/residents/new" component={ResidentsEdit} />
        <Route exact path="/residents/edit" component={ResidentsEdit} />
      </div>
    </BrowserRouter>
  </div>
);
