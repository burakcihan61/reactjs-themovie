import React from 'react';
import styles from './slider.module.scss';

const Slider = () => {
  return (
    <div className={styles.container}>
      <input className={styles.inputSearch} type="search" placeholder="film search" />
    </div>
  );
};

export default Slider;
