import React from 'react';
import styles from './container.module.scss';
import Header from '../Header/Header';

const Container = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};

export default Container;
