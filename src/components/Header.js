import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.langSwitcherWrapper}>
        <LanguageSwitcher />
      </div>
      <h1>{t('header.title')}</h1>
      <p>{t('header.subtitle')}</p>
    </header>
  );
};

export default Header;