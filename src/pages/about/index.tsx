import React from 'react';
import styles from './Sobre.module.css'
import AboutCard from '../../components/Card/AboutCard';
function About() {
  return (
    <div className={styles.container} id="about">
      <h1 id={styles.title}>Quem sou?</h1>
      <p id={styles.text}>Olá, seja bem vindo a minha página! Me chamo <span id={styles.textStrong}> Thais Gomes Oliveira. </span>
       Psicóloga Clínica ,com base na abordagem TCC - Terapia Cognitivo
Comportamental , CRP 06/154046.</p>
      <p id={styles.text}>Psicóloga graduada pela Universidade Paulista - UNIP.
Cursos complementares em Inteligência Emocional, Teoria dos Temperamentos,
especialização em TCC.</p>
      <p id={styles.text}>Experiência em atendimento clínico individual e grupal com enfoque nas demandas
de ansiedade, saúde mental, autoconhecimento, inteligência emocional,
psicoeducação, fobias e medos.<br></br>Tenho como objetivo auxiliar na prevenção e tratamento de doenças psíquicas, com
foco no aumento da qualidade de vida e no equilíbrio emocional.</p>
      <p id={styles.text}>Co Fundadora do projeto PsicoStop, criado por quatro psicólogas que visam
dedicar seus conhecimentos a fim de promover saúde mental através de Plantão
Psicológico, Roda de Conversa, Palestras e Psicoeducação.<br></br><br></br><br></br></p>

<span id={styles.textStrong}>Atendimento Presencial e On-line.</span>
      
      <div className={styles.card}>
          <AboutCard
          title="Missão" 
          iconName='coffee'
          text="Levar a psicologia a todos, acreditando que a vida é uma escola e aprender a viver conectado a nossas essência é a lição mais importante para viver cada dia MELHOR!" />
        <AboutCard 
        iconName='eye'
          title="Visão"
          text="Oferecer de maneira qualificada atendimento psicológico dentro da modalidade online. Dessa forma é possível dar suporte para qualquer pessoa do Brasil ou até mesmo para brasileiros que moram no exterior." />
        <AboutCard
          iconName='chart-column'
          title="Valores"
          text="Sou uma alma humana, comprometida, determinada, de coração grato e motivada. Apaixonada pelo que faz, tenho como essência trabalhar ajudando as pessoas na busca do seu PROPÓSITO, QUALIDADE DE VIDA, SAÚDE MENTAL e sua MELHOR VERSÃO!" />
      </div>
    </div>
  )
}

export default About;