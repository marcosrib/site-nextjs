import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const openMenu = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [toggle]);

  return (
    <div>
      <Head>
        <title>Thais Gomes Oliveira</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={styles.header}>
        <div className={styles.logoContent}>
          <img
            src="/logo1.png"
            alt="Picture of the author"
            width={100}
            height={60}
          />
        </div>
        <nav id={styles.nav} className={toggle ? styles.menuactive : ''}>
          <button onClick={openMenu} id={styles.menumobile}>
            <span id={styles.hamburger}></span>
          </button>
          <div id={styles.menu}>
            <AnchorLink onClick={closeMenu} href="#home">
              Home
            </AnchorLink>
            <AnchorLink onClick={closeMenu} href="#about">
              Sobre
            </AnchorLink>
            <AnchorLink onClick={closeMenu} href="#oquefaco">
              O que faço
            </AnchorLink>
            <AnchorLink onClick={closeMenu} href="#doubts">
              Dúvidas
            </AnchorLink>
            <AnchorLink onClick={closeMenu} href="#gallery">
              Consultório
            </AnchorLink>
            <AnchorLink onClick={closeMenu} href="#contact">
              Contato
            </AnchorLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
