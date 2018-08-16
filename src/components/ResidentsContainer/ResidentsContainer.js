import React, { Component } from 'react';
import axios from 'axios';

import ResidentsCollection from '../ResidentsCollection/ResidentsCollection';

export default class ResidentsContainer extends Component {
  constructor() {
    super();

    this.state = {
      residents: [],
    };
  }

  componentDidMount() {
    this.fetchResidents();
  }

  fetchResidents() {
    axios
      .get('http://localhost:3001/residents')
      .then(res => this.setState({ residents: res.data }))
      .catch(() => { /* log or do something sensible */ });
  }

  renderResidentsList() {
    const { residents } = this.state;
    return residents.length > 0
      ? <ResidentsCollection residents={residents} />
      : 'You don\'t seem to have any residents yet. Add one to get started!';
  }

  render() {
    return (
      <div>
        <div className="row">
          <h2 className="col s8 offset-s2">Residents</h2>
          <p>{this.renderResidentsList()}</p>
        </div>
      </div>
    );
  }
}
