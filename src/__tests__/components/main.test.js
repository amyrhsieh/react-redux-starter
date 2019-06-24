import React from 'react';
import Main from 'Components/Main.js';
import { shallow } from 'enzyme';

describe('Main (Snapshot)', () => {
  it('Main component renders Main', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});
