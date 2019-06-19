import React from 'react';
import renderer from 'react-test-renderer';
import { Blog } from 'Components/Blog';
import entries from 'Mocks/entriesMock';

const onAddEntryClickMock = () => {return true;}

describe('Blog (Snapshot)', () => {
  it('Blog component renders Blog', () => {
    const component = renderer.create(<Blog entries={entries} onAddEntryClick={onAddEntryClickMock}/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
