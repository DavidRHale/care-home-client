import React from 'react';
import PropTypes from 'prop-types';

const RoomsListItem = ({ room, itemIndex, onEditClick }) => {
  const residentName = room.resident
    ? `${room.resident.first_name} ${room.resident.last_name}`
    : 'Empty';

  const onClick = (event) => {
    event.preventDefault();
    onEditClick(itemIndex);
  };

  return (
    <li key={room.id} className="collection-item row">
      <div className="col s12 m4 l5 bold"><b>Room: {room.name}</b></div>
      <div className="col s12 m5 l5">Resident: {residentName}</div>
      <div className="col s12 m3 l2">
        <button className="btn pink" onClick={onClick}>
          Edit
        </button>
      </div>
    </li>
  );
};

RoomsListItem.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    resident: PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      dob: PropTypes.string.isRequired,
      favourite_food: PropTypes.string.isRequired,
    }),
  }).isRequired,
  itemIndex: PropTypes.number.isRequired,
  onEditClick: PropTypes.func.isRequired,
};

export default RoomsListItem;
