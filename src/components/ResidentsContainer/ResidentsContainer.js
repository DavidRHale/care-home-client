import React, { Component } from 'react';
import axios from 'axios';

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

  render() {
    const { residents } = this.state;

    return (
      <div>
        <div className="row">
          <h2 className="col s8 offset-s2">Residents</h2>
          <p>{residents.length}</p>
        </div>
      </div>
    );
  }
}
