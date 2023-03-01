import React from 'react';
import styles from './header.module.scss';
import logo from '../../assets/themovielogo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <img className={styles.logoImg} src={logo} alt="logo" data-testid="logo-1" />
        </a>
      </div>
      <nav className={styles.nav}>
        <a href="#" data-testid="giris-yap">
          Giriş Yap
        </a>
        <a href="#" data-testid="üye-ol">
          Üye Ol
        </a>
      </nav>
    </header>
  );
};

export default React.memo(Header);
