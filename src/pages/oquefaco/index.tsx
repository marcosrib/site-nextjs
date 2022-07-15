import styles from './Oquefaco.module.css'
import { content } from '../../contentPage/oqueFaco';
function OqueFaco() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.contentText}>
                <h1 className={styles.Title}>{content.psicoterapia.title}</h1>
                <p id={styles.text}>{content.psicoterapia.p1}</p>
                <p id={styles.text}>{content.psicoterapia.p2}</p>
                
                <h1 className={styles.Title}>{content.oquefaco.title}</h1>
                <h1 className={styles.Title}>{content.oquefaco.title2}</h1>
                <h2 className={styles.subTitle}>{content.oquefaco.subTitle}</h2>
                <h2 className={styles.subTitle}>{content.oquefaco.titleAdolescentes}</h2>
                <p id={styles.text}>{content.oquefaco.pAdolescentes}</p>

                <h2 className={styles.subTitle}>{content.oquefaco.titleAdultos}</h2>
                <p id={styles.text}>{content.oquefaco.pAdultos}</p>

                <h2 className={styles.subTitle}>{content.oquefaco.titleAEPM}</h2>
                <p id={styles.text}>{content.oquefaco.pAEPM}</p>
        
        
            </div>
            </div>
        </div>
    )
}


export default OqueFaco;