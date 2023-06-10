import React, { useState } from 'react';
import styles from './Doubts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { RotateProp } from '@fortawesome/fontawesome-svg-core';

type Question = {
  title: string;
  answer: string;
};

function Doubts() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderQuestions = () => {
    const questions: Question[] = [
      {
        title: 'Como saber se preciso de psicoterapia?',
        answer: 'Existem momentos na vida que passamos por situações difíceis,'
        + 'emoções instáveis e sofrimento psicológico frequente. Alguns exemplos de quando procurar terapia:\n\n'
        + '- Alterações frequentes de humor\n' 
        + '- Sintomas físicos no corpo de ansiedade\n'
        + '- Sensação de fadiga e estresse constante\n'
        + '- Perda do autocontrole\n'
        + '- Pensamentos negativos\n'
        + '- Insônia\n'
        + '- Dificuldade em pensar com clareza ou tomar decisões\n'
        + '- Depressão\n'
        + '- Compulsão alimentar\n'
      },
      {
        title: 'Psicólogo ou Psiquiatra?',
        answer: 'O psicólogo  atuará com habilidades para tratar, por meio de técnicas da psicoterapia,'
        +'as diversas dificuldades mentais, comportamentais e emocionais que o paciente possa ter.\n\n'
        +'O psiquiatra dispõe da capacidade de diagnosticar e indicar tratamentos com o uso de medicamentos.'
      },
      {
        title: 'Como funciona a terapia?',
        answer: 'A psicoterapia é um processo terapêutico em que junto com o paciente o profissional irá auxiliar em suas demandas emocionais e/ou psíquicas. Com objetivo de restabelecer a saúde e qualidade de vida do paciente.',
      },
      {
        title: 'Como faço para agendar uma consulta?',
        answer: 'Parabéns por ter chegado a essa etapa!!\n\n'+
        'Para agendar clique no botão abaixo'+
        '(colocar whatsapp)'
      },
    ];

    return questions.map((question, index) => (
      <div className={styles.content} key={index}>
        <div className={styles.question} onClick={() => toggleAnswer(index)}>
          <h3>{question.title}</h3>
          <FontAwesomeIcon
            className={styles.arrowIcon}
            icon={faAngleDown}
            rotation={activeIndex === index ? 180 as RotateProp : 0 as RotateProp}
          />
        </div>
        <div className={`${styles.answer} ${activeIndex === index ? styles.active : styles.notActive}`}>
          <p>{question.answer}</p>
        </div>
      </div>
    ));
  };

  return (
    <section className={styles.container} id="doubts">
      <h3>Dúvidas</h3>
      {renderQuestions()}
    </section>
  );
}

export default Doubts;
