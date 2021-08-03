import React from 'react';
import styles from './Sobre.module.css'
import AboutCard from '../../components/Card/AboutCard';
function sobre() {
  return (
    <div className={styles.container} >
      <h1 id={styles.title}>Sobre mim</h1>
      <p id={styles.text}>Olá, seja bem vindo a minha página! Me chamo Thais Gomes Oliveira, sou psicóloga graduada pela Universidade Paulista, tenho pós graduação em Terapia Cognitivo Comportamental, atuo como psicóloga clínica em atendimentos para adolescentes e adultos.</p>
      <p id={styles.text}>Além da prática em consultório clínico, tenho experiência no âmbito hospitalar psiquiátrico, cuja a conduta é voltada para proporcionar acolhimento individual e/ ou grupal, oficina terapêutica e atividades que contribuam para saúde mental.</p>
      <p id={styles.text}>Também, tive a oportunidade de participar do V Congresso Brasileiro Psicologia: Ciência e Profissão, na Universidade Nove de Julho/SP, realizado de 14 a 18 de novembro de 2018, através da exposição e apresentação de pôster desenvolvido a partir do tema central “MÍDIAS SOCIAIS, ADOLESCENTES E ATENDIMENTO PSICOLÓGICO”.</p>
      <div className={styles.card}>
        <AboutCard
          title="Missão"
          text="Levar a psicologia a todos, acreditando que a vida é uma escola e aprender a viver conectado a nossas essência é a lição mais importante para viver cada dia MELHOR!" />
        <div className={styles.verticalLine}></div>
        <AboutCard
          title="Visão"
          text="Oferecer de maneira qualificada atendimento psicológico dentro da modalidade online. Dessa forma é possível dar suporte para qualquer pessoa do Brasil ou até mesmo para brasileiros que moram no exterior." />
        <div className={styles.verticalLine}></div>
        <AboutCard
          title="Valores"
          text="Sou uma alma humana, comprometida, determinada, de coração grato e motivada. Apaixonada pelo que faz, tenho como essência trabalhar ajudando as pessoas na busca do seu PROPÓSITO, QUALIDADE DE VIDA, SAÚDE MENTAL e sua MELHOR VERSÃO!" />
      </div>
    </div>
  )
}

export default sobre;