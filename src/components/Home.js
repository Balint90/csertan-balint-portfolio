import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.scss';
import ThreeScene from './ThreeScene';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <div className={styles.textContainer}>
        <h2>{t('home.welcome')}</h2>
        <p>{t('home.intro')}</p>
      </div>
      <div className={styles.sceneContainer}>
        <ThreeScene />
      </div>
    </div>
  );
};

export default Home;