import React, { useEffect, useState } from 'react';
import styles from './container.module.scss';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import Content from '../components/Content/Content';
import { TMovieCard } from '../types/TypeMovieDB';
import {
  getMoviePopuler,
  getMovies,
  getMovieTrend,
  getMovieYears,
  searchMovies,
} from '../services/movie';

const Container = () => {
  const [movies, setMovies] = useState<TMovieCard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [noResults, setNoResults] = useState<string>('');

  const searchMovie = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (searchTerm === '') {
      return alert('Please enter a movie name');
    } else {
      await searchMovies(searchTerm).then((res) => {
        setMovies(res.results);
        setSearchTerm('');
      });
    }
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getMovies()
        .then((res) => {
          setLoading(false);
          setMovies(res.results);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
          setNoResults('No results found');
        });
    }, 1500);
  }, []);
  const onClickHandlerTrendList = () => {
    setLoading(true);
    setTimeout(() => {
      getMovieTrend()
        .then((res) => {
          setLoading(false);
          setMovies(res.results);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
          setNoResults('No results found');
        });
    }, 1000);
  };
  const onClickHandlerPopularList = () => {
    setLoading(true);
    setTimeout(() => {
      getMoviePopuler()
        .then((res) => {
          setLoading(false);
          setMovies(res.results);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
          setNoResults('No results found');
        });
    }, 1000);
  };
  const onClickHandlerYearsList = () => {
    setLoading(true);
    setTimeout(() => {
      getMovieYears()
        .then((res) => {
          setLoading(false);
          setMovies(res.results);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
          setNoResults('No results found');
        });
    }, 1000);
  };
  return (
    <div className={styles.container}>
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovie={searchMovie} />
      <Content
        loading={loading}
        movies={movies}
        noResults={noResults}
        error={error}
        onClickHandlerTrendList={onClickHandlerTrendList}
        onClickHandlerPopularList={onClickHandlerPopularList}
        getMovieYears={onClickHandlerYearsList}
      />
    </div>
  );
};

export default Container;
