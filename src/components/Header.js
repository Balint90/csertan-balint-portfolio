import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle'; // Import ThemeToggle

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.langSwitcherWrapper}>
        <LanguageSwitcher />
        <ThemeToggle /> {/* Add ThemeToggle */}
      </div>
      <h1>{t('header.title')}</h1>
      <p>{t('header.subtitle')}</p>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navLink}>{t('nav.home')}</Link>
          </li>
          <li>
            <Link to="/projects" className={styles.navLink}>{t('nav.projects')}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;