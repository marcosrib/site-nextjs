
import styles from './AboutCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fas)

interface Props {
  text: string;
  title: string;
  iconName: IconProp;
}
function AboutCard({ text, title, iconName }: Props) {
  return (
    <div className={styles.cardContent}>
      <FontAwesomeIcon className={styles.icon} icon={iconName}/>
      <span className={styles.title}>{title}</span>
      <span id={styles.text}>
        {text}
      </span>
    </div>
  );
}

export default AboutCard;