import React from 'react';
import styles from './container.module.scss';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';

const Container = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Slider />
    </div>
  );
};

export default Container;
