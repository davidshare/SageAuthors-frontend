import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RightAside from '../RightAside/RightAside.component';

afterEach(cleanup);

describe('RightAside component', () => {
  it('should render the RightAside component', () => {
    const { getByTestId } = render(<RightAside />);
    expect(getByTestId('subscribe-button')).toHaveTextContent('Subscribe');
  });

  it('should render the RightAside component', () => {
    const { getByTestId } = render(<RightAside />);
    fireEvent.click(getByTestId('subscribe-button'));
  });
});
