import React from 'react';
import styles from './container.module.scss';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';


const Container = () => {
  return (
    <div className={styles.container}>
      <Header />
      <SearchBar />
    </div>
  );
};

export default Container;
