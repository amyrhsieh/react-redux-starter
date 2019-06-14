import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer.js';

describe('Footer (Snapshot)', () => {
  it('Footer component renders footer', () => {
    const component = renderer.create(<Footer />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
