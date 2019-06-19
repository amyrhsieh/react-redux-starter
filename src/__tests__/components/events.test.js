import React from 'react';
import renderer from 'react-test-renderer';
import { Events } from 'Components/Events';
import events from 'Mocks/eventsMock';

describe('Events (Snapshot)', () => {
  it('Events component renders Events', () => {
    const component = renderer.create(<Events events={events} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
