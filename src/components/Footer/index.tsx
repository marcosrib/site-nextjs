import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <footer className={styles.container}>
      <Link
        href="https://api.whatsapp.com/send?phone=1191489-3597<&text=Olá,%20gostaria%20de%20falar%20sobre..."
        className={`${styles.floatingIcon} ${isVisible ? styles.show : ''}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="whatssap.png" width={100} />
      </Link>
      <div className={styles.content}>
        <div className="contato">
          <h3 id={styles.title}>Contato</h3>
          <span id={styles.text}>Whatsap:</span>
          <span id={styles.text}> (11) 91489-3597</span>
          <div className={styles.socialIconContainer}>
            <Link
              className={styles.socialIconContent}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/_psicologathaisgomes/"
            >
              <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
            </Link>
          </div>
        </div>
        <div className="contato">
          <h3 id={styles.title}> Horário atendimento</h3>
          <span id={styles.text}>Seguda à sexta das 8:00h às 22:00h</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
