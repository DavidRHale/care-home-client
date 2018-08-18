import React from 'react';
import PropTypes from 'prop-types';

import RoomsListItem from '../RoomsListItem/RoomsListItem';
import RoomsEdit from '../RoomsEdit/RoomsEdit';

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
        <li className="collection-item row" key={room.id}>
          <div className="col s12 m10">
            <RoomsEdit
              submitRoom={submitRoom}
              roomName={room.name}
              roomId={room.id}
              residentId={room.resident ? room.resident.id : -1}
              residents={residents}
            />
          </div>
          <div className="col s12 m2">
            <button
              className="btn delete-button red"
              onClick={(event) => {
                event.preventDefault();
                onDeleteClick(room.id);
              }}
            >
              X
            </button>
          </div>
        </li>
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

RoomsList.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      resident_id: PropTypes.number,
      resident: PropTypes.shape({
        id: PropTypes.number,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        dob: PropTypes.string,
        favourite_food: PropTypes.string,
      }),
    }),
  ).isRequired,
  residents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      dob: PropTypes.string,
      favourite_food: PropTypes.string,
    }),
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
