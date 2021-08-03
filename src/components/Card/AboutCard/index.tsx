
import styles from './AboutCard.module.css'
interface Props {
  text: string;
  title: string;
}
function AboutCard({ text, title }: Props) {
  return (
    <div className={styles.cardContent}>
      <h3>{title}</h3>
      <span id={styles.text}>
        {text}
      </span>
    </div>
  );
}

export default AboutCard;