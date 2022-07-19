import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import styles from '../../styles/Home/Home.module.css'

export default function Home() {
  const router = useRouter();
  {/*<img src="/home-image.jpeg" className={styles.img} alt="kknknkk"/>*/ }
  return (
    <div className={styles.container} id="home">
      <div className={styles.content}>
   
        <div className={styles.textContent} >
          <span className={styles.title}>Terapia Online No Conforto Da Sua Casa</span>
          <span className={styles.subTitle}>Está a alguns cliques</span>
          <div className={styles.buttonContato} >
            <Link href='/contato'><a  className={router.pathname == "/contato" ? styles.active : ""}>Contato</a></Link>
          </div>
        </div>
        </div>
      <div className={styles.containerSobre}>
        <img src="/fotothais.jpeg" className={styles.img}/>
        <div className={styles.descriptionContent}>
        <h3 className={styles.nameTitle}>Thais Gomes Oliveira</h3>
        <span className={styles.description} > Psicóloga CRP 06/154046 (Terapeuta Cognitiva Comportamental)
            Atendimento online. <br></br>
            Uma alma humana, comprometida, determinada, de coração grato e motivada.
            paixonada pelo que faz, tem como essência trabalhar ajudando as pessoas na busca do seu <span className={styles.descriptionStrong}> PROPÓSITO, QUALIDADE DE VIDA, SAÚDE MENTAL </span> e sua <span className={styles.descriptionStrong}>MELHOR VERSÃO!</span>
            </span>
        </div>
     
      </div>
        
      </div>
  )
}
