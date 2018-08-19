/* eslint react/no-unescaped-entities: 0 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ResidentsCollection from '../ResidentsCollection/ResidentsCollection';

export default class ResidentsContainer extends Component {
  constructor() {
    super();

    this.state = {
      residents: [],
    };

    this.deleteResident = this.deleteResident.bind(this);
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

  deleteResident(residentId) {
    axios
      .delete(`http://localhost:3001/residents/${residentId}`)
      .then(() => this.fetchResidents())
      .catch(() => { /* log or do something sensible */ });
  }

  renderResidentsList() {
    const { residents } = this.state;
    return residents.length > 0
      ? <ResidentsCollection residents={residents} onDeleteClick={this.deleteResident} />
      : <p>You don't seem to have any residents yet. Add one to get started!</p>;
  }

  render() {
    return (
      <div>
        <div className="row">
          <h2 className="col offset-s1 s10 offset-m1 m2 offset-l3 l1 header">Residents</h2>
          <Link to="/residents/new" className="col offset-s2 s3 offset-m3 m2 add-button btn pink lighten-3">
            + Add
          </Link>
        </div>

        {this.renderResidentsList()}
      </div>
    );
  }
}
