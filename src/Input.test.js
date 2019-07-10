import React from 'react';
import { Input } from './Input';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const input = mount(<Input />);
  input.unmount();
});

it('reset click calls reset', () => {
  const spy = jest.fn();
  const input = mount(<Input onReset={spy} />);

  input.find('.Input-clear').simulate('click');

  expect(spy).toHaveBeenCalled();
  input.unmount()
});

it('input change triggers onchange', () => {
  const spy = jest.fn();
  const input = mount(<Input onChange={spy} />);
  const element = input.find('.Input-element');

  element.value = 'test';
  element.simulate('change');

  expect(spy).toHaveBeenCalled();
  input.unmount()
});

it('input updates from prop', () => {
  const input = mount(<Input value='test' onChange={() => {}} />);
  const element = input.find('.Input-element');

  expect(element.props().value).toEqual('test');
  input.unmount()
});
