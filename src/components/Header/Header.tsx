import React from 'react';
import styles from './header.module.scss';
import logo from '../../assets/themovielogo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <img className={styles.logoImg} src={logo} alt="logo" />
        </a>
      </div>
      <nav className={styles.nav}>
        <a href="#">Giriş Yap</a>
        <a href="#">Üye Ol</a>
      </nav>
    </header>
  );
};

export default React.memo(Header);
