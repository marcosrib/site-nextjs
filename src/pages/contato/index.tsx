import React, {useEffect, useState,useCallback} from 'react';
import styles from './Contato.module.css';
import {validateFields,  Form} from './validateFields';

const formData = {
    name: "",
    email:"",
    lastName: "",
    message: ""
}

function Contato() {
  const [value, setValue] = useState(0);
  const [form, setForm] = useState<Form>(formData);

  const setInput = (newValue:any) => {
    console.log(newValue);
    
    setForm(oldForm => ({...oldForm, ...newValue}) )
  }
  
  const handleSubmit = useCallback(async (e)=> {
    e.preventDefault();
    console.log('enviado form');
    console.log(form);
    try {
       validateFields(form);
   
      
       console.log('enviado form');
       
    } catch (error) {
      console.log(error.message);
      
    }
  },[])


  useEffect(() => {
    console.log(form);
    
    let percetage = 0.20;
    let height = window.screen.availHeight;
    let valuePercentage =  Math.round(window.screen.availHeight * percetage); 
    let valueHeightFinal = height - valuePercentage;
    setValue(valueHeightFinal);
  }, [value,form]);



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
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.groupFields}>
              <div className={`${styles.field} ${styles.name}`}>
                <input 
                  type="text" 
                  placeholder="Nome"
                  onChange={e => {setInput({name: e.target.value})}}
                />
              </div>
              <div className={`${styles.field} ${styles.email}`}>
                <input 
                  type="text" 
                  placeholder="E-mail"
                  onChange={e => {setInput({email: e.target.value})}}
                />
              </div>
            </div>
            <div className={styles.field}>
                <input 
                  type="text" 
                  placeholder="Sobrenome"
                  onChange={e => {setInput({lastName: e.target.value})}}
                />
            </div>
            <div className={styles.textArea}>
              <textarea 
                cols={30}  
                rows={10}
                placeholder="Escrever..."
                onChange={e => {setInput({message: e.target.value})}}
              />
            </div>
            <div className={styles.button}>
             <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contato;