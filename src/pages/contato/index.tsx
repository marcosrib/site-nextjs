import React, {useEffect, useState} from 'react';
import styles from './Contato.module.css'


function Contato() {
  const [value, setValue] = useState(null);


  useEffect(() => {
    let i = window.screen.availHeight / 4.5;
    
    setValue(window.screen.availHeight - i);
  }, []);

  return( 
    <section className={styles.container}  style={{height:value}}>
      <div className={styles.groupTitles}>
      <i className="fa-solid fa-user"></i>
        <h1 className={styles.title}>Contato</h1>
        <h6 className={styles.subTitle}>Fale conosco</h6>
      </div>
      <div className={styles.contactContainer}>
        
        <div className={styles.contactUs}>
        <div className={styles.titleContactUs}>Fale Conosco</div>
          <div className={styles.contactUsNameTitle}>Nome</div>
          <div className={styles.contactUsName}>Thais gomes</div>

          <div className={styles.contactUsPhoneTitle}>Telefone</div>
          <div className={styles.contactUsPhonePhone}>(11)99999-9999</div>

          <div className={styles.contactUsEmailTitle}>Email</div>
          <div className={styles.contactUsEmail}>Thais@mail.com</div>
      
        </div>
        <div className={styles.formMessage}>
          <div className={styles.titleMessage}>Mensagem</div>
          <form className={styles.form}>
            <div className={styles.groupFields}>
              <div className={`${styles.field} ${styles.name}`}>
                <input type="text" placeholder="Nome"/>
              </div>
              <div className={`${styles.field} ${styles.email}`}>
                <input type="text" placeholder="E-mail"/>
              </div>
            </div>
            <div className={styles.field}>
                <input type="text" placeholder="Sobrenome"/>
            </div>
            <div className={styles.textArea}>
              <textarea cols={30}  rows={10} placeholder="Escrever..."/>
            </div>
            <div className={styles.button}>
             <button>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contato;