/* global jest, describe, beforeEach, it, expect */

import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ResidentsEdit from './ResidentsEdit';

Enzyme.configure({ adapter: new Adapter() });

describe('Residents Edit', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ResidentsEdit />);
  });

  it('renders without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should be a div', () => {
    expect(component.type()).toEqual('div');
  });

  it('should have a form', () => {
    const form = component.find('form');
    expect(form.exists()).toEqual(true);
  });

  it('should have a 3 text inputs', () => {
    const textInputs = component.find('input');
    expect(textInputs.length).toEqual(3);
  });

  it('should gave a label for first name', () => {
    const label = component.find('label').first();
    expect(label.exists()).toEqual(true);
    expect(label.text()).toEqual('First Name:');
  });

  it('should gave a label for last name', () => {
    const label = component.find('label').at(1);
    expect(label.exists()).toEqual(true);
    expect(label.text()).toEqual('Last Name:');
  });

  it('should gave a label for favourite food', () => {
    const label = component.find('label').at(2);
    expect(label.exists()).toEqual(true);
    expect(label.text()).toEqual('Favourite Food:');
  });

  it('should have a date input element', () => {
    const dob = component.find('DateOfBirthInput');
    expect(dob.exists()).toEqual(true);
  });

  // it('should gave a label for residents dropdown', () => {
  //   const label = component.find('label').at(1);
  //   expect(label.exists()).toEqual(true);
  //   expect(label.text()).toEqual('Resident:');
  // });

  // it('should have a submit button', () => {
  //   const submitButton = component.find('button');
  //   expect(submitButton.exists()).toEqual(true);
  // });

  // it('should have submit button text for adding', () => {
  //   const submitButton = component.find('button');
  //   expect(submitButton.text()).toEqual('Add');
  // });

  // it('should have submit button text for editing when editing', () => {
  //   component = shallow(<RoomsEdit submitRoom={() => { }} residents={[]} roomName="room 1" />);
  //   const submitButton = component.find('button');
  //   expect(submitButton.text()).toEqual('Update');
  // });

  // it('Should call the submitRoom function when clicked', () => {
  //   const submitMock = jest.fn();
  //   component = mount(<RoomsEdit submitRoom={submitMock} residents={[]} />);

  //   expect(submitMock.mock.calls.length).toEqual(0);
  //   component.find('form').simulate('submit');
  //   expect(submitMock.mock.calls.length).toEqual(1);
  // });
});
