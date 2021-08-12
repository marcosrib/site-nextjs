import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from "next/router";
import styles from './Header.module.css'

const Header: React.FC = () => {
  const router = useRouter();
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
        <nav className={styles.nav}>
          <Link href='/'><a className={router.pathname == "/" ? styles.active : ""}>Home</a></Link>
          <Link href='/sobre'><a className={router.pathname == "/sobre" ? styles.active : ""} >Sobre</a></Link>
          <Link href='/oquefaco'><a className={router.pathname == "/oquefaco" ? styles.active : ""}>O que faço</a></Link>
          <Link href='/contato'><a className={router.pathname == "/contato" ? styles.active : ""}>Contato</a></Link>
        </nav>
      </header>

    </div>
  )
}

export default Header;