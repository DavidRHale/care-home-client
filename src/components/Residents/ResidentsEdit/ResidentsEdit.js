import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import DateOfBirthInput from '../../DateOfBirthInput';

class ResidentsEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.firstName,
      lastName: props.lastName,
      favouriteFood: props.favouriteFood,
      day: props.day,
      month: props.month,
      year: props.year,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { firstName, lastName, favouriteFood, day, month, year } = this.state;

    const resident = {
      first_name: firstName,
      last_name: lastName,
      favourite_food: favouriteFood,
      dob: `${year}-${month}-${day}`,
    };

    axios
      .post('http://localhost:3001/residents', resident)
      .then(res => console.log('added', res.data))
      .catch(err => console.log('err', err.response.data.message));
  }

  render() {
    const {
      firstName,
      lastName,
      favouriteFood,
      day,
      month,
      year,
    } = this.state;

    return (
      <div>
        <h2>Add/Edit Resident</h2>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col s12 m6">
              <input
                placeholder="David"
                id="firstName"
                type="text"
                className="validate"
                value={firstName}
                onChange={event => this.setState({ firstName: event.target.value })}
              />
              <label htmlFor="firstName" className="active">
                First Name:
              </label>
            </div>

            <div className="input-field col s12 m6">
              <input
                placeholder="Hale"
                id="lastName"
                type="text"
                className="validate"
                value={lastName}
                onChange={event => this.setState({ lastName: event.target.value })}
              />
              <label htmlFor="lastName" className="active">
                Last Name:
              </label>
            </div>

            <div className="input-field col s12 m6">
              <input
                placeholder="Hale"
                id="favouriteFood"
                type="text"
                className="validate"
                value={favouriteFood}
                onChange={event => this.setState({ favouriteFood: event.target.value })}
              />
              <label htmlFor="favouriteFood" className="active">
                Favourite Food:
              </label>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m6">
              <DateOfBirthInput
                day={day}
                month={month}
                year={year}
                onDayChange={event => this.setState({ day: event.target.value })}
                onMonthChange={event => this.setState({ month: event.target.value })}
                onYearChange={event => this.setState({ year: event.target.value })}
              />
            </div>
          </div>

          <div className="col s12 m2">
            <button className="btn pink" onClick={this.onSubmit}>
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

ResidentsEdit.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  favouriteFood: PropTypes.string,
  day: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.string,
};

ResidentsEdit.defaultProps = {
  firstName: '',
  lastName: '',
  favouriteFood: '',
  day: '',
  month: '',
  year: '',
};

export default ResidentsEdit;
