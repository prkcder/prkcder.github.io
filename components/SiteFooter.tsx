import styles from '../styles/page.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        <span aria-hidden>©</span> {new Date().getFullYear()} John Park · Built with Next.js
      </p>
    </footer>
  );
}

