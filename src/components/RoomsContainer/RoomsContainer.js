/* eslint react/no-unescaped-entities: 0 */

import React, { Component } from 'react';
import axios from 'axios';

import RoomsList from '../RoomsList/RoomsList';

export default class RoomsContainer extends Component {
  constructor() {
    super();

    this.state = {
      rooms: [],
    };
  }

  componentDidMount() {
    this.fetchRooms();
  }

  fetchRooms() {
    axios
      .get('http://localhost:3001/rooms')
      .then(res => this.setState({ rooms: res.data }))
      .catch(() => { /* log or do something sensible */ });
  }

  renderRoomsList() {
    const { rooms } = this.state;

    return rooms.length > 0
      ? <RoomsList rooms={rooms} />
      : <p>You don't seem to have any rooms yet. Add one to get started!</p>;
  }

  render() {
    return (
      <div>
        <div className="row">
          <h2 className="col s8 offset-s2">Rooms</h2>
        </div>
        {this.renderRoomsList()}
      </div>
    );
  }
}
