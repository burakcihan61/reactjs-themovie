import React, { useState } from 'react';
import styles from './searchbar.module.scss';

type TProps = {
  onSubmit: (search: string) => void;
};

const SearchBar: React.FC<TProps> = (props: TProps) => {
  const [search, setSearch] = useState<string>('');
  const searchInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputSearch}>
        <input
          className={styles.inputSearch}
          type="search"
          placeholder="film search"
          value={search}
          onChange={searchInputChangeHandler}
          aria-label="search"
          name="query"
        />
      </div>
      <button onClick={() => props.onSubmit(search)}>ARA</button>
    </div>
  );
};

export default SearchBar;
