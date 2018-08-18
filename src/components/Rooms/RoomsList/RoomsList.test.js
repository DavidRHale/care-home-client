/* global describe, beforeEach, it, expect */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RoomsList from './RoomsList';

Enzyme.configure({ adapter: new Adapter() });

describe('Rooms List', () => {
  let component;
  const rooms = [
    { id: 1, name: '1F1', resident_id: 1 },
    { id: 2, name: '1F2', resident_id: 2 },
    { id: 3, name: '2F1', resident_id: 3 },
    { id: 4, name: '2F2', resident_id: 4 },
    { id: 5, name: '3F1', resident_id: 5 },
    { id: 6, name: '3F2', resident_id: 6 },
  ];

  beforeEach(() => {
    component = shallow(
      <RoomsList
        rooms={rooms}
        residents={[]}
        onEditClick={() => { }}
        onDeleteClick={() => { }}
        submitRoom={() => { }}
      />,
    );
  });

  it('renders without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should be a div', () => {
    expect(component.type()).toEqual('div');
  });

  it('should have a ul', () => {
    const ul = component.find('ul');
    expect(ul.exists()).toEqual(true);
  });

  it('should render a RoomsListItem for each room passed as props', () => {
    const rli = component.find('RoomsListItem');
    expect(rli.length).toEqual(rooms.length);
  });
});
