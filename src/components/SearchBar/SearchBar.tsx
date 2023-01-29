import React from 'react';
import styles from './searchbar.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input className={styles.inputSearch} type="search" placeholder="film search" />
    </div>
  );
};

export default SearchBar;
