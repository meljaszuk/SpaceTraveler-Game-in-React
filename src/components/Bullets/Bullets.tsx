import React, { useContext } from 'react';
import styles from './Bullets.module.scss';
import { AppContext } from '../../context';

export const Bullets: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { gameStatus } = context;
  return (
    <div className={styles.gameBullets}>
      <div className={`${styles.bulletIcon} ${gameStatus === 'GameOver' ? styles.gameOver : styles.gameActive}`}></div>
      <div className={`${styles.bulletIcon} ${gameStatus === 'GameOver' ? styles.gameOver : styles.gameActive}`}></div>
      <div className={`${styles.bulletIcon} ${gameStatus === 'GameOver' ? styles.gameOver : styles.gameActive}`}></div>
      <div className={`${styles.bulletIcon} ${gameStatus === 'GameOver' ? styles.gameOver : styles.gameActive}`}></div>
    </div>
  );
};
