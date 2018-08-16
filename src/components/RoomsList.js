import React from 'react';
import PropTypes from 'prop-types';

const renderRooms = rooms => (
  rooms.map(room => (
    <div key={room.id}>
      Name: {room.name}
    </div>
  ))
);

const RoomsList = ({ rooms }) => (
  <div>
    {rooms && renderRooms(rooms)}
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
