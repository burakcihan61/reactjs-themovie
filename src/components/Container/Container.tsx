import React from 'react';
import styles from './container.module.scss';
import Header from '../Header/Header';
import Content from '../Content/Content';

const Container = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Content />
    </div>
  );
};

export default Container;
