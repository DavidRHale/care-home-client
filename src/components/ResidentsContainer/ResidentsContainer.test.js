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

  it('should render a residents collection when rooms are fetched', () => {
    const residentsCollection = component.find('ResidentsCollection');
    expect(residentsCollection.props().residents).toEqual(residents);
  });

  it('should render text when no residents are fetched', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));
    component = shallow(<ResidentsContainer />);

    const residentsCollection = component.find('ResidentsCollection');
    expect(residentsCollection.exists()).toEqual(false);

    const noRoomsText = component.find('p');
    expect(noRoomsText.text()).toEqual('You don\'t seem to have any residents yet. Add one to get started!');
  });
});
