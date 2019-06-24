import React from 'react';
import App from 'Src/App.js';
import { shallow } from 'enzyme';

describe('App (Snapshot)', () => {
  it('App component renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
