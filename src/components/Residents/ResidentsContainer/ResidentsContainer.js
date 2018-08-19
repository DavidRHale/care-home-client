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
        <div className="row valign-wrapper">
          <div className="col offset-s1 offset-m2">
            <Link to="/residents/new" className="btn">
              + Add
            </Link>
          </div>
          <h2 className="col s1 header">Residents</h2>
        </div>

        {this.renderResidentsList()}
      </div>
    );
  }
}
