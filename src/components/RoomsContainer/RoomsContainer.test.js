/* global jest, describe, beforeEach, it, expect */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';

import RoomsContainer from './RoomsContainer';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('axios');

describe('Rooms Container', () => {
  let component;
  const rooms = [
    { id: 1, name: '1F1', resident_id: 1 },
    { id: 2, name: '1F2', resident_id: 2 },
  ];

  beforeEach(() => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: rooms }));
    component = shallow(<RoomsContainer />);
  });


  it('renders without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should be a div', () => {
    expect(component.type()).toEqual('div');
  });

  it('should have a header', () => {
    const header = component.find('h2');
    expect(header.text()).toEqual('Rooms');
  });

  it('should render a RoomsList when rooms are fetched', () => {
    const roomsList = component.find('RoomsList');
    expect(roomsList.exists()).toEqual(true);
    expect(roomsList.props().rooms).toEqual(rooms);
  });

  it('should render text when no rooms are fetched', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));
    component = shallow(<RoomsContainer />);

    const roomsList = component.find('RoomsList');
    expect(roomsList.exists()).toEqual(false);

    const noRoomsText = component.find('p');
    expect(noRoomsText.text()).toEqual('You don\'t seem to have any rooms yet. Add one to get started!');
  });
});
