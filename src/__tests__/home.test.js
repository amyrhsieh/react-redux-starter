import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home.js';

describe('Home (Snapshot)', () => {
  it('Home component renders Home', () => {
    const component = renderer.create(<Home />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
