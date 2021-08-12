import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        backgroundImage: `linear-gradient(315deg, rgb(0 0 0), rgb(0 0 0 / 50%)),url('/wind-waker/img/ww-bg.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <h1 className="hero__title" style={{ margin: 0 }}>
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle" style={{ marginTop: '-15px' }}>
          Build High-Performance <b style={{ color: 'darkgreen' }}>Nodejs</b> API
        </p>
        <Link to="/docs/intro" style={{ color: '#fff' }} className="button button--lg">
          GET STARTED
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Fast nodejs framework">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
