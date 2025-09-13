import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Csertán Bálint. All rights reserved.</p>
    </footer>
  );
};

export default Footer;