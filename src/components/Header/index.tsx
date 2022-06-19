import React, {cloneElement, useState} from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from "next/router";
import styles from './Header.module.css'

const Header: React.FC = () => {
  const [toggle,setToggle] = useState(false);

  const router = useRouter();
  const openMenu = () => {
    setToggle(!toggle);
  }

  const closeMenu = () => {
    setToggle(!toggle);
  }



  return (
    <div>
      <Head>
        <title>tetetet</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header className={styles.header}>
        <div>
          <img className={styles.image}
            src="/logo-thais (1).svg"
            alt="Picture of the author"
          />
        </div>
        <nav  id={styles.nav} className={toggle ? styles.menuactive: ""}>
          <button onClick={openMenu}  id={styles.menumobile}>
            <span id={styles.hamburger}></span>
          </button>
          <div id={styles.menu} >
            <Link href='/'><a onClick={closeMenu}  className={router.pathname == "/" ? styles.active : ""}>Home</a></Link>
            <Link href='/sobre'><a onClick={closeMenu}  className={router.pathname == "/sobre" ? styles.active : ""} >Sobre</a></Link>
            <Link href='/oquefaco'><a onClick={closeMenu}  className={router.pathname == "/oquefaco" ? styles.active : ""}>O que faço</a></Link>
            <Link href='/contato'><a onClick={closeMenu}  className={router.pathname == "/contato" ? styles.active : ""}>Contato</a></Link>
          </div>
        </nav>
      </header>

    </div>
  )
}

export default Header;