import React from 'react';
import { shallow } from 'enzyme';
import LandingPageGallery from '../LandingPageGallery/LandingPageGallery.component';

describe('Landing page Gallery', () => {
  const wrapper = shallow(<LandingPageGallery />);
  test('it should render the gallery component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
