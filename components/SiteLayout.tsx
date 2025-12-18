import Head from 'next/head';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import styles from '../styles/page.module.css';

type SiteLayoutProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function SiteLayout({ title, description, children }: SiteLayoutProps) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      <SiteHeader />
      <main className={styles.main}>{children}</main>
      <SiteFooter />
    </div>
  );
}

