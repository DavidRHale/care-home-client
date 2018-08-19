/* global describe, beforeEach, it, expect */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ResidentsCollection from './ResidentsCollection';

Enzyme.configure({ adapter: new Adapter() });

describe('Rooms List', () => {
  let component;
  const residents = [
    { id: 1, first_name: 'Steve', last_name: 'Gomez', favourite_food: 'Pasta', dob: '1915-07-07' },
    { id: 2, first_name: 'Hank', last_name: 'Shrader', favourite_food: 'Fried Chicken', dob: '1857-12-07' },
  ];

  beforeEach(() => {
    component = shallow(<ResidentsCollection residents={residents} onDeleteClick={() => {}}/>);
  });


  it('renders without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should be a div', () => {
    expect(component.type()).toEqual('div');
  });

  it('should render a card for each resident passed as props', () => {
    const cards = component.find('.card');
    expect(cards.length).toEqual(residents.length);
  });
});
