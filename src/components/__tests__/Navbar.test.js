import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../Navbar/Navbar.component';

describe('Navbar component', () => {
  test('render the app component', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('img')).toHaveLength(1);
  });
});
