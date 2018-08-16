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
        <div className="row">
          <h2 className="col s8 offset-s2">Rooms</h2>
        </div>
        {rooms.length > 0 ? <RoomsList rooms={rooms} /> : 'No rooms'}
      </div>
    );
  }
}
