import React, { useState } from 'react';
import styles from './container.module.scss';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Content from '../Content/Content';
import { TMovieCard } from '../../types/TypeMovieDB';

const Container = () => {
  const [movies, setMovies] = useState<TMovieCard[]>([]);
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <Header />
      <SearchBar setMovies={setMovies} query={query} setQuery={setQuery} />
      <Content loading={loading} setLoading={setLoading} movies={movies} setMovies={setMovies} />
    </div>
  );
};

export default Container;
