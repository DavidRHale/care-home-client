/* eslint react/destructuring-assignment: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoomsEdit extends Component {
  constructor(props) {
    super(props);
    const { roomName, residentId } = props;

    this.state = {
      roomName,
      residentId: residentId > 0 ? residentId : '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { roomName, residentId } = this.state;
    const { submitRoom, roomId } = this.props;

    submitRoom(roomName, residentId, roomId);

    // if component is being used as a create form,
    // clear the inputs after submit
    if (!this.props.roomName) {
      this.setState({
        roomName: '',
        residentId: '',
      });
    }
  }

  renderOptions() {
    const { residents } = this.props;

    return residents.map(resident => (
      <option key={resident.id} value={resident.id}>
        {resident.first_name} {resident.last_name}
      </option>
    ));
  }

  render() {
    const { roomName, residentId } = this.state;

    return (
      <form onSubmit={this.onSubmit} className="row">
        <div className="input-field col s12 m4 l5">
          <input
            placeholder="2F2"
            id="room_name"
            type="text"
            className="validate"
            value={roomName}
            onChange={event => this.setState({ roomName: event.target.value })}
          />
          <label htmlFor="room_name" className="active">
            Room Name:
          </label>
        </div>

        <div className="col s12 m5">
          <label>Resident:</label>
          <select
            value={residentId}
            className="browser-default"
            onChange={event => this.setState({ residentId: event.target.value })}
          >
            <option value="">None</option>
            {this.renderOptions()}
          </select>
        </div>

        <div className="col s12 m2">
          <button className="submit-button btn pink lighten-3" onClick={this.onSubmit}>
            {this.props.roomName ? 'Update' : 'Add'}
          </button>
        </div>
      </form>
    );
  }
}

RoomsEdit.propTypes = {
  submitRoom: PropTypes.func.isRequired,
  residents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      dob: PropTypes.string,
      favourite_food: PropTypes.string,
    }),
  ).isRequired,
  roomName: PropTypes.string,
  residentId: PropTypes.number,
  roomId: PropTypes.number,
};

RoomsEdit.defaultProps = {
  roomName: '',
  residentId: -1,
  roomId: -1,
};

export default RoomsEdit;
