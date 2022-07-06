import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className="contato">
          <h3 id={styles.title}>Contato</h3>
          <span id={styles.text}>Whatsap:</span>
          <span id={styles.text}> 99999999</span>
          <div className={styles.socialIconContainer}>

            <div className={styles.socialIconContent}>
              <p id={styles.iconText}>f</p>
            </div>
            <div className={styles.socialIconContent}>
              <p id={styles.iconText}>f</p>
            </div>
            <div className={styles.socialIconContent}>
              <p id={styles.iconText}>f</p>
            </div>

          </div>
        </div>
        <div className="contato">
          <h3 id={styles.title}> Horário atendimento</h3>
          <span id={styles.text}>Seguda à sexta das 8:00h às 22:00h</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;