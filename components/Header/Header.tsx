import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.titleContainer}>
          <span className="parent">Chicago Institute</span>
          <br />
          <span className="name">Artwork Gallery</span>
        </div>

        <nav className={styles.navContainer}>
          <Link href="/">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;