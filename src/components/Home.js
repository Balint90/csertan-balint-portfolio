import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.scss';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <h2>{t('home.welcome')}</h2>
      <p>{t('home.intro')}</p>
    </div>
  );
};

export default Home;