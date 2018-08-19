import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const renderResidents = residents => (
  residents.map(resident => (
    <div className="col s12 m4 offset-m2 l5 offset-l1" key={resident.id}>
      <div className="card hoverable">
        <div className="card-content">
          <span className="card-title">{resident.first_name} {resident.last_name}</span>
          <hr />
          <p>Room: {resident.room}</p>
          <p>DOB: {moment(resident.dob).format('DD/MM/YYYY')}</p>
          <p>Favourite Food: {resident.favourite_food}</p>
        </div>
      </div>
    </div>
  ))
);

const ResidentsCollection = ({ residents }) => (
  <div className="row">
    {renderResidents(residents)}
  </div>
);

ResidentsCollection.propTypes = {
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

export default ResidentsCollection;
