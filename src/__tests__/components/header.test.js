import React from 'react';
import renderer from 'react-test-renderer';
import Header from 'Components/Header.js';
import { StaticRouter } from 'react-router';

describe('Header (Snapshot)', () => {
  it('Header component renders header nav', () => {
    const component = renderer.create(
      <StaticRouter>
        <Header />
      </StaticRouter>
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
