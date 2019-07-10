import React from 'react';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const app = mount(<App />);
  app.unmount();
});

describe('App', () => {
  const app = mount(<App />);
  describe('getPhoneticArrayFromString', () => {
    it('returns the space string for space character', () => {
      expect(app.instance().getPhoneticArrayFromString('Abcdefghijklmnopqrstuvwxyz 0123456789')).toEqual(['Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu ', '(space)', 'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']);
    });
  });
});
