import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  const movieId = 1;
  const movieTitle = 'Test Movie';
  const moviePosterPath = '/test-poster.jpg';
  const movieImage = 'https://www.test.com';

  it('renders the Card component', () => {
    render(
      <Card
        movieId={movieId}
        movieTitle={movieTitle}
        moviePosterPath={moviePosterPath}
        movieImage={movieImage}
      />
    );

    const movieElement = screen.getByTestId('movie-1');

    expect(movieElement).toBeInTheDocument();
    expect(movieElement).toHaveClass('movie');

    const imgElement = movieElement.querySelector('img');

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', `${movieImage}${moviePosterPath}`);
    expect(imgElement).toHaveAttribute('alt', movieTitle);

    const movieTitleElement = movieElement.querySelector('h5');

    expect(movieTitleElement).toBeInTheDocument();
    expect(movieTitleElement).toHaveClass('movieTitle');
    expect(movieTitleElement).toHaveTextContent(movieTitle);
  });
});
