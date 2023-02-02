import React from 'react';
import styles from './loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.center}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
