/* eslint react/no-unescaped-entities: 0 */

import React, { Component } from 'react';
import axios from 'axios';

import RoomsList from '../RoomsList/RoomsList';
import RoomsEdit from '../RoomsEdit/RoomsEdit';

export default class RoomsContainer extends Component {
  constructor() {
    super();

    this.state = {
      rooms: [],
      residents: [],
      hideForm: true,
      editIndex: undefined,
    };

    this.addRoom = this.addRoom.bind(this);
    this.editRoom = this.editRoom.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
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
      .then(res => this.setState({
        residents: res.data,
        editIndex: -1,
      }))
      .catch(() => { /* log or do something sensible */ });
  }

  addRoom(name, residentId) {
    const { rooms } = this.state;
    const room = { name, resident_id: residentId };

    axios
      .post('http://localhost:3001/rooms', room)
      .then(res => this.setState({
        rooms: [...rooms, res.data],
        hideForm: true,
      }))
      .catch(err => console.log('err', err.response.data.message));
  }

  editRoom(name, residentId, roomId) {
    const room = { name, resident_id: residentId };

    axios
      .put(`http://localhost:3001/rooms/${roomId}`, room)
      .then(() => this.fetchRooms())
      .catch(err => console.log('err', err.response.data.message));

    this.setState({ editIndex: -1 });
  }

  deleteRoom(roomId) {
    axios
      .delete(`http://localhost:3001/rooms/${roomId}`)
      .then(() => this.fetchRooms())
      .catch(err => console.log('err', err.response.data.message));

    this.setState({ editIndex: -1 });
  }

  renderRoomsList() {
    const { rooms, editIndex, residents } = this.state;

    if (rooms.length > 0) {
      return (
        <RoomsList
          rooms={rooms}
          residents={residents}
          editIndex={editIndex}
          onEditClick={itemIndex => this.setState({ editIndex: itemIndex })}
          onDeleteClick={this.deleteRoom}
          submitRoom={this.editRoom}
        />
      );
    }

    return <p>You don't seem to have any rooms yet. Add one to get started!</p>;
  }

  render() {
    const { residents, hideForm } = this.state;

    return (
      <div>
        <div className="row">
          <h2 className="col offset-s1 s6 offset-l3 l1 header">Rooms</h2>
          <button className="col offset-s2 s3 offset-m2 m1 add-button btn pink lighten-3" onClick={() => this.setState({ hideForm: !hideForm })}>
            + Add
          </button>
        </div>

        <div hidden={hideForm} className="row">
          <RoomsEdit submitRoom={this.addRoom} residents={residents} />
        </div>

        {this.renderRoomsList()}

      </div>
    );
  }
}
