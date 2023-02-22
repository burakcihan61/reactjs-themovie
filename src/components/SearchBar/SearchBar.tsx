import React from 'react';
import styles from './searchbar.module.scss';

type TProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchMovie: (e: { preventDefault: () => void }) => void;
};

const SearchBar: React.FC<TProps> = (props: TProps) => {
  const searchInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchTerm(e.target.value);
  };
  return (
    <div className={styles.container}>
      <form className={styles.inputSearch} onSubmit={props.searchMovie}>
        <input
          className={styles.inputSearch}
          type="search"
          placeholder="film search"
          value={props.searchTerm}
          onChange={searchInputChangeHandler}
          aria-label="search"
          name="query"
        />
      </form>
    </div>
  );
};

export default SearchBar;
