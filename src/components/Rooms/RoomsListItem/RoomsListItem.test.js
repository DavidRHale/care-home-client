/* global jest, describe, beforeEach, it, expect */

import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RoomsListItem from './RoomsListItem';

Enzyme.configure({ adapter: new Adapter() });

describe('Rooms List', () => {
  let component;
  const room = { id: 1, name: '1F1', resident_id: 1 };

  beforeEach(() => {
    component = shallow(<RoomsListItem room={room} itemIndex={5} onEditClick={() => { }} />);
  });

  it('renders without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should be a li', () => {
    expect(component.type()).toEqual('li');
  });

  it('should have an edit button', () => {
    const button = component.find('button');
    expect(button.exists()).toEqual(true);
    expect(button.text()).toEqual('Edit');
  });

  it('Should call the onEditClick function when clicked', () => {
    const onEdit = jest.fn();
    component = mount(<RoomsListItem room={room} onEditClick={onEdit} itemIndex={5} />);

    expect(onEdit.mock.calls.length).toEqual(0);
    component.find('button').simulate('click');
    expect(onEdit.mock.calls.length).toEqual(1);
  });
});
