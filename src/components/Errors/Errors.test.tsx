import React from 'react';
import { render, screen } from '@testing-library/react';
import Errors from './Errors';

describe('Errors', () => {
  const errorMessage = 'Test Error Message';

  it('renders the Errors component', () => {
    render(<Errors>{errorMessage}</Errors>);

    const errorsElement = screen.getByTestId('errors');

    expect(errorsElement).toBeInTheDocument();
    expect(errorsElement).toHaveClass('error');
    expect(errorsElement).toHaveTextContent(errorMessage);
  });
});
