import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoomsNew extends Component {
  constructor() {
    super();

    this.state = {
      roomName: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { submitRoom } = this.props;
    submitRoom();
    this.setState({ roomName: '' });
  }

  render() {
    const { submitRoom } = this.props;
    const { roomName } = this.state;

    return (
      <div className="row">
        <form onSubmit={this.onSubmit} className="col s10 offset-s1 m12 offset-m2 l6 offset-l2">
          <div className="input-field col s12 m6">
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

          <div className="col s12 m6">
            <button className="btn pink" onClick={submitRoom}>
              Add Room
            </button>
          </div>
        </form>
      </div>
    );
  }
}

RoomsNew.propTypes = {
  submitRoom: PropTypes.func.isRequired,
};

export default RoomsNew;
