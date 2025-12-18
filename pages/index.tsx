import Link from 'next/link';
import { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import styles from '../styles/home.module.css';

// const BACKGROUND_CHARACTERS = ' *,      ./0!8#X~;$\\}%'.replaceAll(' ', '\u00A0');

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return prefersReducedMotion;
}

// function Background() {
//   const prefersReducedMotion = usePrefersReducedMotion();
//   const [characters, setCharacters] = useState<string[]>([]);

//   useEffect(() => {
//     if (prefersReducedMotion) return;

//     const characterWidth = 9.6;
//     const characterHeight = 24;

//     const recalc = () => {
//       const viewportWidth = window.innerWidth;
//       const viewportHeight = window.innerHeight;
//       const charactersNeededWidth = Math.ceil(viewportWidth / characterWidth);
//       const charactersNeededHeight = Math.ceil(viewportHeight / characterHeight);
//       const count = charactersNeededWidth * charactersNeededHeight;
//       // setCharacters(
//       //   Array.from({ length: count }).map(
//       //     () => BACKGROUND_CHARACTERS[Math.floor(Math.random() * BACKGROUND_CHARACTERS.length)]
//       //   )
//       // );
//     };

//     recalc();
//     window.addEventListener('resize', recalc);
//     return () => window.removeEventListener('resize', recalc);
//   }, [prefersReducedMotion]);

//   if (prefersReducedMotion) return null;

//   return (
//     <div className={styles.background} aria-hidden>
//       {characters.map((char, i) => (
//         <span key={i} className={styles.backgroundChar}>
//           {char}
//         </span>
//       ))}
//     </div>
//   );
// }

export default function HomePage() {
  const mainRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const container = mainRef.current;
    if (!container) return;
    const nodes = container.querySelectorAll(`.${styles.fade}`);
    nodes.forEach((node, index) => {
      (node as HTMLElement).style.animationDelay = `calc(${index + 1} * var(--animation-delay-step))`;
    });
  }, [prefersReducedMotion]);

  const quote = useMemo(
    () => '"if you want to improve, be content to be thought foolish and stupid" — Epictetus',
    []
  );

  return (
    <main
      className={styles.container}
      ref={mainRef}
      style={
        {
          '--animation-delay-step': '60ms',
        } as CSSProperties
      }
    >
      {/* <Background /> */}

      <header className={styles.topbar}>
        <div className={`${styles.topbarLeft} ${styles.fade}`}>
          <span className={styles.badge}>jp</span>
          <span className={styles.muted}>san diego, ca</span>
        </div>
        {/* <nav className={`${styles.topbarRight} ${styles.fade}`} aria-label="Quick links">
          <Link className={styles.navLink} href="/projects">
            Projects
          </Link>
          <Link className={styles.navLink} href="/contact">
            Contact
          </Link>
        </nav> */}
      </header>

      <Hero />
      
      <section className={`${styles.quote} ${styles.fade}`}>
        <p className={styles.quoteText}>{quote}</p>
      </section>

      <Highlights />

    </main>
  );
}
