import React from 'react';
import styles from './searchbar.module.scss';
import { searchMovies } from '../../services/movie';
import { TMovieCard } from '../../types/TypeMovieDB';

type TProps = {
  setMovies: React.Dispatch<React.SetStateAction<TMovieCard[]>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<TProps> = (props: TProps) => {
  const searchMovie = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (props.query === '') {
      return alert('Please enter a movie name');
    } else {
      await searchMovies(props.query).then((res) => {
        props.setMovies(res.results);
        props.setQuery('');
      });
    }
  };
  const changeHandler = (e: { target: { value: React.SetStateAction<string> } }) => {
    props.setQuery(e.target.value);
  };
  return (
    <div className={styles.container}>
      <form className={styles.inputSearch} onSubmit={searchMovie}>
        <input
          className={styles.inputSearch}
          type="search"
          placeholder="film search"
          value={props.query}
          onChange={changeHandler}
          aria-label="search"
          name="query"
        />
      </form>
    </div>
  );
};

export default SearchBar;
