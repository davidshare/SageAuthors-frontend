import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../Navbar/Navbar.component';

afterEach(cleanup);

describe('Navbar component', () => {
  test('render the Navbar component', () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show mobile menu on click of menu icon', () => {
    const { getByTestId } = render(<Navbar />);
    fireEvent.click(getByTestId('menu-icon'));
    expect(getByTestId('navlist')).toHaveClass('nav');
  });

  it('should close mobile menu on click of close icon', () => {
    const { getByTestId } = render(<Navbar />);
    fireEvent.click(getByTestId('menu-icon'));
    fireEvent.click(getByTestId('close-nav'));
    expect(getByTestId('navlist')).toHaveClass('hideNav');
  });

  it('should close mobile menu on click of close icon', () => {
    const { getByTestId } = render(<Navbar />);
    fireEvent.click(getByTestId('menu-icon'));
    fireEvent.click(getByTestId('close-nav'));
    expect(getByTestId('navlist')).toHaveClass('hideNav');
  });
});
