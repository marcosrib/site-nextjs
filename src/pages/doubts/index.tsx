import React, { useState } from 'react';
import styles from './Doubts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Doubts() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderQuestions = () => {
    const questions = [
      {
        title: 'Como saber se preciso de psicoterapia?',
        answer: 'Resposta para a pergunta 1',
      },
      {
        title: 'Psicólogo ou Psiquiatra?',
        answer: 'Resposta para a pergunta 2',
      },
      {
        title: 'Atendimento on-line',
        answer: 'Resposta para a pergunta 3',
      },
      {
        title: 'Como funciona a terapia?',
        answer: 'Resposta para a pergunta 4',
      },
      {
        title: 'Como faço para agendar uma consulta?',
        answer: 'Resposta para a pergunta 5',
      },
    ];

    return questions.map((question, index) => (
      <div className={styles.content} key={index}>
        <div className={styles.question} onClick={() => toggleAnswer(index)}>
          <h3>{question.title}</h3>
          <FontAwesomeIcon
            className={styles.arrowIcon}
            icon={faAngleDown}
            rotation={activeIndex === index ? 180 : 0}
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
