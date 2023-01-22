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
  console.log('mlçlçmm');
  
}
  return (
    <section className={styles.container} id="doubts">
     <h3 className={styles.title}>Dúvidas</h3>
     <div  className={styles.content}>
       <div className={styles.question} onClick={() => setIsActiveAnswer()} >
        <h3>Como saber se preciso de psicoterapia? </h3>
        <div className={`${isActive ? styles.open : styles.close}`}>
         <FontAwesomeIcon className={`${isActive ? styles.close : styles.close}`} icon={"angle-down"}/>
        </div>
       </div>
       <div className={`${styles.answer} ${isActive ? styles.active : styles.notActive}`} >
        <p>skdfkdsajf naldfklsdafkldsakf lksafdkdksl</p>
        <p>skdfkdsajf naldfklsdafkldsakf lksafdkdksl</p>
        <p>skdfkdsajf naldfklsdafkldsakf lksafdkdksl</p>
        <p>skdfkdsajf naldfklsdafkldsakf lksafdkdksl</p>
   
       </div>
     </div>
    </section>
  )
}

export default Doubts;