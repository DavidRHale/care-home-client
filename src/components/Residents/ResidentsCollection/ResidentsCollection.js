import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

const ResidentsCollection = ({ residents, onDeleteClick }) => {
  const renderResidents = () => (
    residents.map(resident => (
      <div className="col s12 m6 l5 offset-l1" key={resident.id}>
        <div className="card hoverable">
          <div className="card-content">
            <span className="card-title">{resident.first_name} {resident.last_name}</span>
            <hr />
            <p>Room: {resident.room}</p>
            <p>DOB: {moment(resident.dob).format('DD/MM/YYYY')}</p>
            <p>Favourite Food: {resident.favourite_food}</p>
          </div>
          <div className="card-action valign-wrapper">
            <Link to={`/residents/${resident.id}/edit`} className="btn pink lighten-3">
              Edit
            </Link>
            <button
              className="btn red lighten-1"
              onClick={(event) => {
                event.preventDefault();
                onDeleteClick(resident.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))
  );

  return (
    <div className="row">
      {renderResidents(residents)}
    </div>
  );
};

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
  onDeleteClick: PropTypes.func.isRequired,
};

export default ResidentsCollection;
