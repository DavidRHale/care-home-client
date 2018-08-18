/* global jest, describe, beforeEach, it, expect */

import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RoomsEdit from './RoomsEdit';

Enzyme.configure({ adapter: new Adapter() });

describe('Rooms Edit', () => {
  let component;

  beforeEach(() => {
    component = shallow(<RoomsEdit submitRoom={() => { }} residents={[]} />);
  });

  it('renders without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should be a form', () => {
    expect(component.type()).toEqual('form');
  });

  it('should have a form', () => {
    const form = component.find('form');
    expect(form.exists()).toEqual(true);
  });

  it('should have a text input', () => {
    const textInput = component.find('input');
    expect(textInput.exists()).toEqual(true);
    expect(textInput.props().type).toEqual('text');
  });

  it('should gave a label for room name', () => {
    const label = component.find('label').first();
    expect(label.exists()).toEqual(true);
    expect(label.text()).toEqual('Room Name:');
  });

  it('should have a select', () => {
    const select = component.find('select');
    expect(select.exists()).toEqual(true);
  });

  it('should gave a label for residents dropdown', () => {
    const label = component.find('label').at(1);
    expect(label.exists()).toEqual(true);
    expect(label.text()).toEqual('Resident:');
  });

  it('should have a submit button', () => {
    const submitButton = component.find('button');
    expect(submitButton.exists()).toEqual(true);
  });

  it('should have submit button text for adding', () => {
    const submitButton = component.find('button');
    expect(submitButton.text()).toEqual('Add');
  });

  it('should have submit button text for editing when editing', () => {
    component = shallow(<RoomsEdit submitRoom={() => { }} residents={[]} roomName="room 1" />);
    const submitButton = component.find('button');
    expect(submitButton.text()).toEqual('Update');
  });

  it('Should call the submitRoom function when clicked', () => {
    const submitMock = jest.fn();
    component = mount(<RoomsEdit submitRoom={submitMock} residents={[]} />);

    expect(submitMock.mock.calls.length).toEqual(0);
    component.find('form').simulate('submit');
    expect(submitMock.mock.calls.length).toEqual(1);
  });
});
