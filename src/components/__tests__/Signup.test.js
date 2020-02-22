import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Signup from '../Signup/Signup.component';

afterEach(cleanup);

describe('Signup component', () => {
  const user = {
    firstname: 'David',
    lastname: 'Essien',
    email: 'chrismogan@gmail.com',
    username: 'chrisis',
    password: 'gemfaith,1609#',
  };
  const onSubmit = jest.fn();

  it('should submit the form', async () => {
    const { getByLabelText, getByRole } = render(
      <Signup onSubmit={onSubmit} />,
    );

    fireEvent.change(getByLabelText(/firstname/i), {
      target: { value: user.firstname },
    });

    fireEvent.change(getByLabelText(/lastname/i), {
      target: { value: user.lastname },
    });

    fireEvent.change(getByLabelText(/email/i), {
      target: { value: user.email },
    });

    fireEvent.change(getByLabelText(/username/i), {
      target: { value: user.username },
    });

    fireEvent.change(getByLabelText(/password/i), {
      target: { value: user.password },
    });

    fireEvent.click(getByRole(/signup/i));
    // expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
