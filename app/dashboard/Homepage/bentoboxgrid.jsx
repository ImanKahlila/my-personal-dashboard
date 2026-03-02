import styles from './bentobox.module.css'
import News from '../News/news';

export default function BentoGrid() {
  return (
    <div className={styles.grid}>

      <div className={`${styles.card} ${styles.hero}`}>
        <h3 className='news'>News</h3>
        <News />
      </div>

      <div className={`${styles.card} ${styles.portrait}`}>
        Portrait
      </div>

      <div className={`${styles.card} ${styles.sidebar}`}>
        Sidebar
      </div>

      <div className={`${styles.card} ${styles.about}`}>
        About
      </div>

      <div className={`${styles.card} ${styles.contact}`}>
        Contact
      </div>

    </div>
  );
}

