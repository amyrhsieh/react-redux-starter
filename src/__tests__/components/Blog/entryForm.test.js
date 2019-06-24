import React from 'react';
import EntryForm from 'Components/Blog/EntryForm';
import { shallow } from 'enzyme';

const onSubmit = () => {return true;}

describe('EntryForm (Snapshot)', () => {
  it('EntryForm component renders EntryForm', () => {
    const wrapper = shallow(<EntryForm onSubmit={onSubmit} />);
    expect(wrapper).toMatchSnapshot();
  });
});
