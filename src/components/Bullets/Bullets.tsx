import React from 'react';
import styles from './Bullets.module.scss';

export const Bullets: React.FC = () => {
  return (
    <div className={styles.gameBullets}>
      <div className={styles.bulletIcon}></div>
      <div className={styles.bulletIcon}></div>
      <div className={styles.bulletIcon}></div>
      <div className={styles.bulletIcon}></div>
    </div>
  );
};
