import React from 'react';
import styles from './content.module.scss';
import Card from '../Card/Card';

const Content = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.asideContent}>
        <ul>
          <li>All</li>
          <li>Türkçe</li>
          <li>Altyazı</li>
          <li>Aksiyon</li>
          <li>Bilim Kurgu</li>
          <li>Fantazi</li>
        </ul>
      </aside>
      <main className={styles.contentMain}>
        <Card />
      </main>
    </div>
  );
};

export default Content;
