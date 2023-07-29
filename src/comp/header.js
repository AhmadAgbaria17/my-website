import React from 'react';

const Header = () => {
  return (
    <div>
      <header>
        <a href="/" className="logo">
          Ahmad's WebSite
        </a>
        <nav className="navigation">
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/contacts">Contacts</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
