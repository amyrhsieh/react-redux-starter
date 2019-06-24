import React from 'react';
import { Blog } from 'Components/Blog';
import entries from 'Mocks/entriesMock';
import { shallow } from 'enzyme';

const dispatchCreateEntry = () => {return true;}

describe('Blog (Snapshot)', () => {
  it('Blog component renders Blog', () => {
    const wrapper = shallow(<Blog entries={entries} dispatchCreateEntry={dispatchCreateEntry} />);
    expect(wrapper).toMatchSnapshot();
  });
});
