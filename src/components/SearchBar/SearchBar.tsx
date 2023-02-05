import React, { useState } from 'react';
import styles from './searchbar.module.scss';
import { searchMovies } from '../../services/movie';
import { TMovieCard } from '../../types/TypeMovieDB';

type TProps = {
  setMovies: React.Dispatch<React.SetStateAction<TMovieCard[]>>;
};

const SearchBar: React.FC<TProps> = (props: TProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const searchMovie = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (searchTerm === '') {
      return alert('Please enter a movie name');
    } else {
      await searchMovies(searchTerm).then((res) => {
        props.setMovies(res.results);
        setSearchTerm('');
      });
    }
  };
  const searchInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className={styles.container}>
      <form className={styles.inputSearch} onSubmit={searchMovie}>
        <input
          className={styles.inputSearch}
          type="search"
          placeholder="film search"
          value={searchTerm}
          onChange={searchInputChangeHandler}
          aria-label="search"
          name="query"
        />
      </form>
    </div>
  );
};

export default SearchBar;
