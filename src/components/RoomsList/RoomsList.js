import React from 'react';
import PropTypes from 'prop-types';

const renderRooms = rooms => (
  rooms.map(room => (
    <li key={room.id} className="collection-item">
      {room.name}
    </li>
  ))
);

const RoomsList = ({ rooms }) => (
  <div className="row">
    <ul className="collection col s8 offset-s2">
      {rooms && renderRooms(rooms)}
    </ul>
  </div>
);

RoomsList.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      resident_id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default RoomsList;
