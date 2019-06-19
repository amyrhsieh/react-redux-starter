import React from 'react';
import renderer from 'react-test-renderer';
import { Blog } from '../components/Blog';
import entries from 'Mocks/entryMock';

const onAddEntryClickMock = () => {return true;}

describe('Blog (Snapshot)', () => {
  it('Blog component renders Blog', () => {
    const component = renderer.create(<Blog entries={entries} onAddEntryClick={onAddEntryClickMock}/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
