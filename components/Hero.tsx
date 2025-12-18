import SocialLinks from './SocialLinks';
import styles from '../styles/home.module.css';

const SUBTITLE_PARTS = ['software dev', 'builder', 'always learning'];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={`${styles.title} ${styles.fade}`}>John Park</h1>
      <p className={`${styles.subtitle} ${styles.fade}`}>
        {SUBTITLE_PARTS.map((part, index) => (
          <span key={part}>
            {part}
            {index < SUBTITLE_PARTS.length - 1 ? ' · ' : ''}
          </span>
        ))}
      </p>
      <div className={styles.fade}>
        <SocialLinks size="lg" />
      </div>
    </section>
  );
}
