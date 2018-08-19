/* eslint react/forbid-prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */
/* eslint object-curly-newline: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';

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
      residentId: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.fetchResident = this.fetchResident.bind(this);
  }

  componentDidMount() {
    const residentId = this.props.match.params.id;

    if (residentId) {
      this.fetchResident(residentId);
      this.setState({ residentId });
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const { history } = this.props;
    const { residentId, firstName, lastName, favouriteFood, day, month, year } = this.state;

    const resident = {
      first_name: firstName,
      last_name: lastName,
      favourite_food: favouriteFood,
      dob: `${year}-${month}-${day}`,
    };

    if (residentId) {
      axios
        .put(`http://localhost:3001/residents/${residentId}`, resident)
        .then(() => history.push('/residents'))
        .catch(() => { /* log or do something sensible */ });
    } else {
      axios
        .post('http://localhost:3001/residents', resident)
        .then(() => history.push('/residents'))
        .catch(() => { /* log or do something sensible */ });
    }
  }

  fetchResident(residentId) {
    axios
      .get(`http://localhost:3001/residents/${residentId}`)
      .then((res) => {
        const dob = moment(res.data.dob);

        this.setState({
          firstName: res.data.first_name,
          lastName: res.data.last_name,
          favouriteFood: res.data.favourite_food,
          day: dob.format('DD'),
          month: dob.format('MM'),
          year: dob.format('YYYY'),
        });
      })
      .catch(() => { /* log or do something sensible */ });
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
            <button className="btn pink lighten-3" onClick={this.onSubmit}>
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
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
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
