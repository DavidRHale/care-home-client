/* eslint react/no-unescaped-entities: 0 */

import React, { Component } from 'react';
import axios from 'axios';

import RoomsList from '../RoomsList/RoomsList';
import RoomsNew from '../RoomsNew/RoomsNew';

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
        <div className="row valign-wrapper">
          <div className="col offset-s1 offset-m2">
            <button className="btn" onClick={() => this.setState({ showForm: true })}>
              + Add
            </button>
          </div>
          <h2 className="col s1 header">Rooms</h2>
        </div>
        <RoomsNew submitRoom={() => { }} />
        {this.renderRoomsList()}
      </div>
    );
  }
}
