import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App component', () => {
  test('render the app component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
