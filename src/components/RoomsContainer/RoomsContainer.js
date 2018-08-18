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
      residents: [],
      hideForm: true,
      editIndex: undefined,
    };

    this.submitRoom = this.submitRoom.bind(this);
  }

  componentDidMount() {
    this.fetchRooms();
    this.fetchResidents();
  }

  fetchRooms() {
    axios
      .get('http://localhost:3001/rooms')
      .then(res => this.setState({ rooms: res.data }))
      .catch(() => { /* log or do something sensible */ });
  }

  fetchResidents() {
    axios
      .get('http://localhost:3001/residents')
      .then(res => this.setState({ residents: res.data }))
      .catch(() => { /* log or do something sensible */ });
  }

  submitRoom(name, residentId) {
    const { rooms } = this.state;
    const room = { name, resident_id: residentId };

    axios
      .post('http://localhost:3001/rooms', room)
      .then(res => this.setState({ rooms: [...rooms, res.data] }))
      .catch(err => console.log('err', err.response.data.message));
  }

  renderRoomsList() {
    const { rooms, editIndex } = this.state;

    if (rooms.length > 0) {
      return (
        <RoomsList
          rooms={rooms}
          onEditClick={itemIndex => this.setState({ editIndex: itemIndex })}
          editIndex={editIndex}
        />
      );
    }
    return <p>You don't seem to have any rooms yet. Add one to get started!</p>;
  }

  render() {
    const { residents, hideForm } = this.state;

    return (
      <div>
        <div className="row valign-wrapper">
          <div className="col offset-s1 offset-m2">
            <button className="btn" onClick={() => this.setState({ hideForm: !hideForm })}>
              + Add
            </button>
          </div>
          <h2 className="col s1 header">Rooms</h2>
        </div>
        <div hidden={hideForm}>
          <RoomsNew submitRoom={this.submitRoom} residents={residents} />
        </div>
        {this.renderRoomsList()}
      </div>
    );
  }
}
