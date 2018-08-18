import React from 'react';
import PropTypes from 'prop-types';

import RoomsListItem from '../RoomsListItem/RoomsListItem';

const RoomsList = ({ rooms, onEditClick, editIndex }) => {
  const renderRooms = () => rooms.map((room, index) => {
    if (index === editIndex) {
      return <li className="collection-item row">Editing</li>;
    }

    return (
      <RoomsListItem
        room={room}
        key={room.id}
        itemIndex={index}
        onEditClick={onEditClick}
      />
    );
  });

  return (
    <div className="row">
      <ul className="collection col s8 offset-s2">
        {rooms && renderRooms(rooms)}
      </ul>
    </div>
  );
};

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
  onEditClick: PropTypes.func.isRequired,
  editIndex: PropTypes.number,
};

RoomsList.defaultProps = {
  editIndex: undefined,
};

export default RoomsList;
