import React, { useState } from 'react';
import styles from './Doubts.module.css'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(fas)



function Doubts() {
const [isActive, setIsActive] = useState(false);

const setIsActiveAnswer = () => {
    setIsActive(!isActive)  
}
  return (
    <section className={styles.container} id="doubts">
     <h3>Dúvidas</h3>
     <div  className={styles.content}>
       <div className={styles.question} onClick={() => setIsActiveAnswer()} >
        <h3>Como saber se preciso de psicoterapia? </h3>
        <div className={`${isActive ? styles.open : styles.close}`}>
         <FontAwesomeIcon className={`${isActive ? styles.close : styles.close}`} icon={"angle-down"}/>
        </div>
       </div>
       <div className={`${styles.answer} ${isActive ? styles.active : styles.notActive}`} >
        <p>skdfkdsajf naldfklsdafkldsakf lksafdkdksl</p>
   
       </div>
       
     </div>
     <div  className={styles.content}>
       <div className={styles.question} onClick={() => setIsActiveAnswer()} >
        <h3>Psicólogo ou Psiquiatra?</h3>
        <div className={`${isActive ? styles.open : styles.close}`}>
         <FontAwesomeIcon className={`${isActive ? styles.close : styles.close}`} icon={"angle-down"}/>
        </div>
       </div>
       <div className={`${styles.answer} ${isActive ? styles.active : styles.notActive}`} >
        <p>skdfkdsajf naldfklsdafkldsakf lksafdkdksl</p>
   
       </div>
       
     </div>
     <div  className={styles.content}>
       <div className={styles.question} onClick={() => setIsActiveAnswer()} >
        <h3>Atendimento on-line </h3>
        <div className={`${isActive ? styles.open : styles.close}`}>
         <FontAwesomeIcon className={`${isActive ? styles.close : styles.close}`} icon={"angle-down"}/>
        </div>
       </div>
       <div className={`${styles.answer} ${isActive ? styles.active : styles.notActive}`} >
        <p>skdfkdsajf naldfklsdafkldsakf lksafdkdksl</p>
   
       </div>
       
     </div>
     <div  className={styles.content}>
       <div className={styles.question} onClick={() => setIsActiveAnswer()} >
        <h3>Como funciona a terapia? </h3>
        <div className={`${isActive ? styles.open : styles.close}`}>
         <FontAwesomeIcon className={`${isActive ? styles.close : styles.close}`} icon={"angle-down"}/>
        </div>
       </div>
       <div className={`${styles.answer} ${isActive ? styles.active : styles.notActive}`} >
        <p>skdfkdsajf naldfklsdafkldsakf lksafdkdksl</p>
   
       </div>
       
     </div>
     <div  className={styles.content}>
       <div className={styles.question} onClick={() => setIsActiveAnswer()} >
        <h3>Como faço para agendar uma consulta? </h3>
        <div className={`${isActive ? styles.open : styles.close}`}>
         <FontAwesomeIcon className={`${isActive ? styles.close : styles.close}`} icon={"angle-down"}/>
        </div>
       </div>
       <div className={`${styles.answer} ${isActive ? styles.active : styles.notActive}`} >
        <p>skdfkdsajf naldfklsdafkldsakf lksafdkdksl</p>
   
       </div>
       
     </div>
     
    </section>
  )
}

export default Doubts;