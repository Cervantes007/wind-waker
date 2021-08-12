import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Learn',
    src: require('../../static/img/ww-bow-feature.png').default,
    description: (
      <>
        Wind Waker was designed with the simplest API possible, enabling developers to build web
        servers in no time.
      </>
    ),
  },
  {
    title: 'High Performance',
    src: require('../../static/img/ww-hook-feature.png').default,
    description: (
      <>
        Wind Waker was implemented from scratch to be one of the fastest alternatives for Nodejs
        Developers.
      </>
    ),
  },
  {
    title: 'Production Ready',
    src: require('../../static/img/ww-shield-sword-feature.png').default,
    description: (
      <>
        Wind Waker is easy to learn, write, scale and deploy, our docs will provide you everything
        you need to build a rock solid web server.
      </>
    ),
  },
];

function Feature({ src, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} alt={title} width={175} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
