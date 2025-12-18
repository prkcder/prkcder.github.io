import styles from '../styles/page.module.css';

type SocialLink = {
  href: string;
  label: string;
  iconClassName: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  // { href: 'https://www.instagram.com/', label: 'Instagram', iconClassName: 'fab fa-instagram' },
  { href: 'https://www.linkedin.com/in/jhnprk', label: 'LinkedIn', iconClassName: 'fab fa-linkedin' },
  { href: 'https://www.github.com/prkcder', label: 'GitHub', iconClassName: 'fab fa-github' },
  // { href: 'https://www.twitter.com/', label: 'Twitter', iconClassName: 'fab fa-twitter' },
  // { href: 'https://www.discord.com', label: 'Discord', iconClassName: 'fab fa-discord' }
];

export default function SocialLinks({ size = 'lg' }: { size?: 'sm' | 'lg' }) {
  return (
    <div className={styles.socialRow} aria-label="Social links">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          className={size === 'lg' ? styles.socialLinkLg : styles.socialLinkSm}
        >
          <i className={`${link.iconClassName} ${size === 'lg' ? 'fa-2x' : 'fa-lg'}`} aria-hidden />
        </a>
      ))}
    </div>
  );
}

