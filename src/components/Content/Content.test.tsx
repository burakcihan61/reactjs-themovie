import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from './Content';
import { TMovieCard } from '../../types/TypeMovieDB';

describe('Content component', () => {
  const props = {
    loading: false,
    movies: [
      {
        id: 1,
        title: 'Movie 1',
        poster_path: '/movie1.jpg',
      },
      {
        id: 2,
        title: 'Movie 2',
        poster_path: '/movie2.jpg',
      },
    ] as TMovieCard[],
    error: null,
    noResults: null,
    onClickHandlerTrendList: jest.fn(),
    onClickHandlerPopularList: jest.fn(),
    getMovieYears: jest.fn(),
  };

  it('renders the movie list correctly', () => {
    render(<Content {...props} />);
    const movieElements = screen.getAllByTestId('movie-1');
    expect(movieElements).toHaveLength(props.movies.length);
  });

  it('renders error message when error prop is not null', () => {
    const errorProps = { ...props, error: 'Error occurred!' };
    render(<Content {...errorProps} />);
    const errorElement = screen.getByTestId('errors');
    expect(errorElement).toHaveTextContent(errorProps.error);
  });

  it('renders no results message when movies array is empty', () => {
    const noResultsProps = { ...props, movies: [], noResults: 'No results!' };
    render(<Content {...noResultsProps} />);
    const errorElement = screen.getByTestId('errors');
    expect(errorElement).toHaveTextContent(noResultsProps.noResults);
  });

  it('calls onClickHandlerTrendList function when trend list button is clicked', () => {
    render(<Content {...props} />);
    const trendListButton = screen.getByText('TREND');
    trendListButton.click();
    expect(props.onClickHandlerTrendList).toHaveBeenCalled();
  });

  it('calls onClickHandlerPopularList function when popular list button is clicked', () => {
    render(<Content {...props} />);
    const popularListButton = screen.getByText('POPULER');
    popularListButton.click();
    expect(props.onClickHandlerPopularList).toHaveBeenCalled();
  });

  it('calls getMovieYears function when 2023 YIL button is clicked', () => {
    render(<Content {...props} />);
    const movieYearsButton = screen.getByText('2023 YIL');
    movieYearsButton.click();
    expect(props.getMovieYears).toHaveBeenCalled();
  });
});
