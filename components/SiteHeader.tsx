import Link from 'next/link';
import styles from '../styles/page.module.css';

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <Link className={styles.brand} href="/">
          prkcder
        </Link>
        {/* <div className={styles.navLinks}>
          <Link className={styles.navLink} href="/projects">
            Projects
          </Link>
          <Link className={styles.navLink} href="/contact">
            Contact
          </Link>
        </div> */}
      </nav>
    </header>
  );
}

