import React from 'react';
import styles from './loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.center} data-testid="loading-1">
      <span className={styles.loader} data-testid="loading-2"></span>
    </div>
  );
};

export default Loading;
