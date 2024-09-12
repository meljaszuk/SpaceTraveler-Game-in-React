import React, { useContext } from 'react';
import styles from './Background.module.scss';
import { AppContext } from '../../context';

export const Background: React.FC = () => {
  const BCGs = [1]; //FIXED LENGTH TO CHANGE - should depend on level
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { gameStatus, isPaused } = context;

  let statusForStyling;

  return (
    <div className={styles.container}>
      <div
        className={`${styles.slideWrapper} ${gameStatus === 'GameActive' ? styles.GameActive : gameStatus === 'GameOver' ? styles.GameOver : styles.GameInactive} ${isPaused ? styles.GamePaused : ''}`}
        style={{ width: `${BCGs.length * 8000}px` }}
      >
        {BCGs.map((_, index) => (
          <div className={styles.slide} key={index}></div>
        ))}
      </div>
    </div>
  );
};
