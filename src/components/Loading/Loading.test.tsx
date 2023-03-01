import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading', () => {
  it('renders the Loading component', () => {
    render(<Loading />);

    const loadingElement1 = screen.getByTestId('loading-1');
    expect(loadingElement1).toBeInTheDocument();

    const loadingElement2 = screen.getByTestId('loading-2');
    expect(loadingElement2).toBeInTheDocument();
    expect(loadingElement2).toHaveClass('loader');
  });
});
