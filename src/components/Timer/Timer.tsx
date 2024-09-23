import React, { useContext } from 'react';
import styles from './Timer.module.scss';
import { AppContext } from '../../context';

export const Timer: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { gameStatus, isPaused, TIME_PER_LEVEL } = context;

  return (
    <div
      className={`${styles.gameTimer} ${gameStatus === 'GameWon' || gameStatus === 'GameStart' ? styles.inactive : ''} ${gameStatus === 'GameOver' ? styles.gameOver : ''} ${isPaused ? styles.inactive : ''}`}
    >
      <div className={styles.time}>TIME</div>
      <div className={styles.clock}>
        <div
          className={`${styles.arrow} ${gameStatus === 'GameActive' ? styles.animation : ''} ${isPaused ? styles.paused : ''}`}
          style={{ animationDuration: `${TIME_PER_LEVEL}s` }}
        >
          <div className={styles.arrowBlue}></div>
          <div className={styles.arrowTransparent}></div>
        </div>
        <div className={styles.arrowWhite}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};
