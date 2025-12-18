import Image from 'next/image';
import SocialLinks from '../components/SocialLinks';
import SiteLayout from '../components/SiteLayout';
import styles from '../styles/page.module.css';

// Draft-only contact page. Move back into `pages/` to re-enable the route.
export default function ContactDraftPage() {
  return (
    <SiteLayout title="Contact · John Park" description="Find John Park on social and GitHub.">
      <section className={styles.section}>
        <h1 className={styles.h1}>About / Contact</h1>
        <p className={styles.lead}>
          Low-friction links, no forms. If you want to see what I’m like in person, you should message me.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <Image
              src="/John.jpg"
              alt="John Park"
              width={160}
              height={160}
              className={styles.avatarImg}
              priority
            />
          </div>
          <div className={styles.profileContent}>
            <h2 className={styles.h2}>Links</h2>
            <SocialLinks size="sm" />
            <div className={styles.kv}>
              <div className={styles.kvRow}>
                <span className={styles.kvKey}>GitHub</span>
                <a className={styles.kvValue} href="https://github.com/prkcder" target="_blank" rel="noreferrer">
                  github.com/prkcder
                </a>
              </div>
              <div className={styles.kvRow}>
                <span className={styles.kvKey}>LinkedIn</span>
                <a
                  className={styles.kvValue}
                  href="https://www.linkedin.com/in/jhnprk"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/jhnprk
                </a>
              </div>
              <div className={styles.kvRow}>
                <span className={styles.kvKey}>Instagram</span>
                <a
                  className={styles.kvValue}
                  href="https://www.instagram.com/jhnprk"
                  target="_blank"
                  rel="noreferrer"
                >
                  instagram.com/jhnprk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

