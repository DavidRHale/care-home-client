import React, { Component } from 'react';
import axios from 'axios';

import RoomsList from './RoomsList';

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
        {rooms.length > 0 ? <RoomsList rooms={rooms} /> : 'No rooms'}
      </div>
    );
  }
}
