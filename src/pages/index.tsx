import styles from '../../styles/Home/Home.module.css'
import Image from 'next/image';
export default function Home() {
  {/*<img src="/home-image.jpeg" className={styles.img} alt="kknknkk"/>*/ }
  return (
    <div className={styles.img}>
      <Image src="/home-image.png"
        alt="kknknkk"
        layout='fill'
      />

      <div className={styles.cardContainer}>
        <h1 id={styles.title}>TERAPIA ONLINE NO CONFORTO DA SUA CASA</h1>
        <div className={styles.textContent}>
          <h3 id={styles.subTitle}>Thais Gomes Oliveira</h3>
          <span id={styles.text}> Psicóloga CRP 06/154046 (Terapeuta Cognitiva Comportamental)
            Atendimento online</span>
        </div>
        <span id={styles.text2}>Uma alma humana, comprometida, determinada, de coração grato e motivada.</span>
        <br></br>
        <span id={styles.text2}>"Apaixonada pelo que faz, tem como essência trabalhar ajudando as pessoas na busca do seu PROPÓSITO, QUALIDADE DE VIDA, SAÚDE MENTAL e sua MELHOR VERSÃO!</span>
      </div>

    </div >

  )
}
