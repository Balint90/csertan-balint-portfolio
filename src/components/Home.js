import React, { useMemo } from 'react'; // Import useMemo
import { useTranslation } from 'react-i18next';
import styles from './Home.module.scss';
import ThreeScene from './ThreeScene';

const Home = () => {
  const { t } = useTranslation();

  // Get the primary color from CSS variables
  const primaryColor = useMemo(() => {
    if (typeof window !== 'undefined') { // Check if window is defined (for SSR compatibility)
      const style = getComputedStyle(document.body);
      return style.getPropertyValue('--primary-color').trim();
    }
    return '#00d4ff'; // Default color for SSR or if variable not found
  }, []); // Empty dependency array means this runs once after initial render

  return (
    <div className={styles.home}>
      <div className={styles.textContainer}>
        <h2>{t('home.welcome')}</h2>
        <p>{t('home.intro')}</p>
      </div>
      <div className={styles.sceneContainer}>
        <ThreeScene color={primaryColor} /> {/* Pass primaryColor */}
      </div>
    </div>
  );
};

export default Home;