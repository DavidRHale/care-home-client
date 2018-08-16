import React, { Component } from 'react';
import axios from 'axios';

export default class RoomsContainer extends Component {
  constructor() {
    super();

    this.state = {
      rooms: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/rooms')
      .then(res => this.setState({ rooms: res.data }))
      .catch(err => console.log('err', err));
  }

  render() {
    const { rooms } = this.state;

    return (
      <div>
        <h2>Rooms</h2>
        {rooms.length > 0 ? 'Rooms found' : 'No rooms'}
      </div>
    );
  }
}
