import React from 'react';
import './Header.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div>
        <div className="title-container">
          <span className="parent">Chicago Institute</span>
          <br />
          <span className="name">Artwork Gallery</span>
        </div>

        <nav className="nav-container">
          <Link href="/">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;