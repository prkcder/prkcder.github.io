import Link from 'next/link';
import styles from '../styles/home.module.css';

export default function Highlights() {
  return (
    <section className={styles.grid} aria-label="Highlights">
      <div className={`${styles.card} ${styles.fade}`}>
        <h2 className={styles.cardTitle}>Now</h2>
        <p className={styles.cardBody}>
          Shipping projects, tightening craft, and collecting small wins. Ask me what I’m working on.
        </p>
      </div>
      <div className={`${styles.card} ${styles.fade}`}>
        <h2 className={styles.cardTitle}>Links</h2>
        <div className={styles.pills}>
          <Link className={styles.pill} href="/projects">
            <i className="fas fa-project-diagram" aria-hidden /> Projects
          </Link>
          {/* <Link className={styles.pill} href="/contact">
            <i className="fas fa-id-card-alt" aria-hidden /> Contact
          </Link>
          <a className={styles.pill} href="https://www.github.com/prkcder" target="_blank" rel="noreferrer">
            <i className="fab fa-github" aria-hidden /> GitHub
          </a>
          <span className={`${styles.pill} ${styles.pillDisabled}`} aria-disabled>
            <i className="far fa-file" aria-hidden /> Resume (soon)
          </span> */}
        </div>
      </div>
    </section>
  );
}

