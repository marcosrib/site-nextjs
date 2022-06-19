import React, {useState, useEffect} from "react";
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from "next/router";
import styles from './Header.module.css'

const Header: React.FC = () => {
  const [toggle,setToggle] = useState(false);

  const router = useRouter();
  const openMenu = () => {
    console.log(toggle);
    
    setToggle(!toggle);
  }

  const closeMenu = () => {
    setToggle(!toggle);
  }
  useEffect(() => {
    if(toggle) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  },[toggle])



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