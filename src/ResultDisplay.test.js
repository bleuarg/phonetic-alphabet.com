import React from 'react';
import { ResultDisplay } from './ResultDisplay';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const display = mount(<ResultDisplay />);
  display.unmount();
});

it('renders text passed as props', () => {
  const display = mount(<ResultDisplay />);
  
  display.setProps({
    phoneticStrings: ['Alfa', 'Bravo']
  });

  expect(display.text().trim()).toEqual('Alfa Bravo');
  
  display.unmount();
});