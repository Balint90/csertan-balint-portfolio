import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.switcher}>
      <button onClick={() => changeLanguage('hu')}>HU</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
    </div>
  );
};

export default LanguageSwitcher;