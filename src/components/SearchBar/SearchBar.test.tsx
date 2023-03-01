import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const onSubmit = jest.fn();

  it('renders the SearchBar component', () => {
    render(<SearchBar onSubmit={onSubmit} />);

    const searchInputElement = screen.getByLabelText('search');
    expect(searchInputElement).toBeInTheDocument();

    const searchButtonElement = screen.getByText('ARA');
    expect(searchButtonElement).toBeInTheDocument();

    fireEvent.change(searchInputElement, { target: { value: 'Test Search Query' } });
    expect(searchInputElement).toHaveValue('Test Search Query');

    fireEvent.click(searchButtonElement);
    expect(onSubmit).toHaveBeenCalledWith('Test Search Query');
  });
});
