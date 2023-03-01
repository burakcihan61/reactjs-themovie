import React from 'react';
import styles from './error.module.scss';

type TProps = {
  children: React.ReactNode | string;
};

const Errors = ({ children }: TProps) => {
  return (
    <div className={styles.error} data-testid="errors">
      {children}
    </div>
  );
};

export default Errors;
