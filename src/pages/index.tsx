import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import styles from '../../styles/Home/Home.module.css'

export default function Home() {
  const router = useRouter();
  {/*<img src="/home-image.jpeg" className={styles.img} alt="kknknkk"/>*/ }
  return (
    <div className={styles.container}>
      <div className={styles.img}/>
   
        <div className={styles.textImageContent}>
          <span className={styles.title}>O apoio que você precisa</span>
          <span className={styles.subTitle}>Está a alguns cliques</span>
          <div className={styles.buttonAgendar} >
            <Link href='/'><a  className={router.pathname == "/" ? styles.active : ""}>Home</a></Link>
          </div>
          </div>
        
      </div>
  )
}
