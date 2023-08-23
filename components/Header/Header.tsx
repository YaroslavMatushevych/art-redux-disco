import React from 'react';
import './Header.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div>
        <article id="title">
          <span className="parent">Chicago Institute</span>
          <br />
          <span className="name">Artwork Gallery</span>
        </article>

        <article id="reference">
          Redux, Next.js
        </article>
      </div>
    </header>
  );
};

export default Header;