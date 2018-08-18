import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoomsNew extends Component {
  constructor() {
    super();

    this.state = {
      roomName: '',
      resident: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { roomName, resident } = this.state;
    const { submitRoom } = this.props;
    submitRoom(roomName, resident);
    this.setState({
      roomName: '',
      resident: '',
    });
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
    const { submitRoom } = this.props;
    const { roomName } = this.state;

    return (
      <div className="row">
        <form onSubmit={this.onSubmit} className="col s12 m10 offset-m2 l8 offset-l2">
          <div className="row">
            <div className="input-field col s12 m5">
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
              <select className="browser-default" onChange={event => this.setState({ resident: event.target.value })} >
                <option value="">None</option>
                {this.renderOptions()}
              </select>
            </div>

            <div className="col s12 m2">
              <button className="submit-button btn pink" onClick={submitRoom}>
                Add Room
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

RoomsNew.propTypes = {
  submitRoom: PropTypes.func.isRequired,
  residents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      dob: PropTypes.string.isRequired,
      favourite_food: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RoomsNew;
