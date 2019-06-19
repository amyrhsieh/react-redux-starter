import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../components/Main.js';
import { shallow } from 'enzyme';

describe('Main (Snapshot)', () => {
  it('Main component renders Main', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});
