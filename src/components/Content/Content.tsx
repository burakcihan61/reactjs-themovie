import React from 'react';
import styles from './content.module.scss';

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
        <div className={styles.card}>test</div>
        <div className={styles.card}>test</div>
        <div className={styles.card}>test</div>
        <div className={styles.card}>test</div>
        <div className={styles.card}>test</div>
        <div className={styles.card}>test</div>
        <div className={styles.card}>test</div>
        <div className={styles.card}>test</div>
        <div className={styles.card}>test</div>
        <div className={styles.card}>test</div>
      </main>
    </div>
  );
};

export default Content;
