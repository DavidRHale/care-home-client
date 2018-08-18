import React from 'react';
import PropTypes from 'prop-types';

import RoomsEdit from '../RoomsEdit/RoomsEdit';

const RoomsListItemEdit = ({
  room,
  residents,
  submitRoom,
  onDeleteClick,
}) => (
    <li className="collection-item row" key={room.id}>
      <div className="col s12 m10">
        <RoomsEdit
          submitRoom={submitRoom}
          roomName={room.name}
          roomId={room.id}
          residentId={room.resident ? room.resident.id : null}
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

const residentPropTypeShape = {
  id: PropTypes.number,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  dob: PropTypes.string,
  favourite_food: PropTypes.string,
};

RoomsListItemEdit.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    resident_id: PropTypes.number,
    resident: PropTypes.shape(residentPropTypeShape),
  }).isRequired,
  residents: PropTypes.arrayOf(
    PropTypes.shape(residentPropTypeShape),
  ).isRequired,
  submitRoom: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default RoomsListItemEdit;
