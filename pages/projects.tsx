import Link from 'next/link';
import projectsData from '../content/projects.json';
import SiteLayout from '../components/SiteLayout';
import styles from '../styles/page.module.css';

type Project = {
  title: string;
  description: string;
  href?: string;
  tag: string;
};

const PROJECTS: Project[] = projectsData;

export default function ProjectsPage() {
  return (
    <SiteLayout title="Projects · John Park" description="Selected projects and links.">
      <section className={styles.section}>
        <h1 className={styles.h1}>Projects</h1>
        <p className={styles.lead}>
          A simple, scannable list. I’ll keep expanding this with real write-ups as projects ship.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.cards}>
          {PROJECTS.map((project) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.cardTop}>
                <h2 className={styles.h2}>{project.title}</h2>
                <span className={styles.tag}>{project.tag}</span>
              </div>
              <p className={styles.p}>{project.description}</p>
              {project.href ? (
                <a className={styles.cardLink} href={project.href} target="_blank" rel="noreferrer">
                  View →
                </a>
              ) : (
                <span className={styles.cardLinkMuted}>Details soon</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.p}>
          Want to collaborate? Find me on Github 
          {/* Head to <Link href="/contact">contact</Link>. */}
        </p>
      </section>
    </SiteLayout>
  );
}
