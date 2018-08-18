import React from 'react';
import PropTypes from 'prop-types';

import RoomsListItem from '../RoomsListItem/RoomsListItem';
import RoomsListItemEdit from '../RoomsListItemEdit/RoomsListItemEdit';

const RoomsList = ({
  rooms,
  residents,
  editIndex,
  onEditClick,
  submitRoom,
  onDeleteClick,
}) => {
  const renderRooms = () => rooms.map((room, index) => {
    if (index === editIndex) {
      return (
        <RoomsListItemEdit
          room={room}
          residents={residents}
          submitRoom={submitRoom}
          onDeleteClick={onDeleteClick}
        />
      );
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

const residentPropTypeShape = {
  id: PropTypes.number,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  dob: PropTypes.string,
  favourite_food: PropTypes.string,
};

RoomsList.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      resident_id: PropTypes.number,
      resident: PropTypes.shape(residentPropTypeShape),
    }),
  ).isRequired,
  residents: PropTypes.arrayOf(
    PropTypes.shape(residentPropTypeShape),
  ).isRequired,
  editIndex: PropTypes.number,
  onEditClick: PropTypes.func.isRequired,
  submitRoom: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

RoomsList.defaultProps = {
  editIndex: undefined,
};

export default RoomsList;
