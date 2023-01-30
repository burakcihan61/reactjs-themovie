import React from 'react';
import styles from './container.module.scss';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Content from '../Content/Content';

const Container = () => {
  return (
    <div className={styles.container}>
      <Header />
      <SearchBar />
      <Content />
    </div>
  );
};

export default Container;
