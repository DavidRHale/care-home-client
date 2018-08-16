/* global jest, describe, beforeEach, it, expect */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';

import ResidentsContainer from './ResidentsContainer';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('axios');

describe('Residents Container', () => {
  let component;
  const residents = [
    { id: 1, first_name: 'Steve', last_name: 'Gomez', favourite_food: 'Pasta', dob: '1915-07-07' },
    { id: 2, first_name: 'Hank', last_name: 'Shrader', favourite_food: 'Fried Chicken', dob: '1857-12-07' },
  ];

  beforeEach(() => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: residents }));
    component = shallow(<ResidentsContainer />);
  });


  it('renders without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should be a div', () => {
    expect(component.type()).toEqual('div');
  });

  it('should have a header', () => {
    const header = component.find('h2');
    expect(header.text()).toEqual('Residents');
  });

  it('should render residents count when rooms are fetched', () => {
    const count = component.find('p');
    expect(count.text()).toEqual('2');
  });

  // it('should render text when no rooms are fetched', () => {
  //   axios.get.mockImplementationOnce(() => Promise.resolve({ data: rooms }));
  //   component = shallow(<ResidentsContainer />);

  //   const roomsList = component.find('RoomsList');
  //   expect(roomsList.exists()).toEqual(false);

  //   const noRoomsText = component.find('p');
  //   expect(noRoomsText.text()).toEqual('You don\'t seem to have any rooms yet. Add one to get started!');
  // });
});
