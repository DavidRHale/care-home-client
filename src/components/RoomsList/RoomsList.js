import React from 'react';
import PropTypes from 'prop-types';

const renderRooms = rooms => (
  rooms.map((room) => {
    const residentName = room.resident
      ? `${room.resident.first_name} ${room.resident.last_name}`
      : 'Empty';

    return (
      <li key={room.id} className="collection-item row">
        <div className="col s6 bold"><b>Room: {room.name}</b></div><div className="col s6">Resident: {residentName}</div>
      </li>
    );
  })
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
      resident_id: PropTypes.number,
      resident: PropTypes.shape({
        id: PropTypes.number.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        dob: PropTypes.string.isRequired,
        favourite_food: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};

export default RoomsList;
