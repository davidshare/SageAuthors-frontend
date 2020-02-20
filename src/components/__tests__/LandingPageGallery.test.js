import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LandingPageGallery from '../LandingPageGallery/LandingPageGallery.component';

afterEach(cleanup);

describe('Landing page Gallery', () => {
  test('render the landing page gallery component', () => {
    const { asFragment } = render(<LandingPageGallery />);
    expect(asFragment()).toMatchSnapshot();
  });
});
