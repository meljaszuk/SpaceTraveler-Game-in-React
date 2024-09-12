import React, { useContext } from 'react';
import styles from './Level.module.scss';
import { AppContext } from '../../context';

export const Level: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { gameStatus } = context;
  return (
    <div className={styles.gameLevel}>
      <div className={styles.wrapper}>
        L
        <em
          className={`${styles.gameLevel} ${gameStatus === 'GameOver' ? styles.gameOver : styles.gameActive}`}
        >
          EV
        </em>
        EL_|
      </div>
    </div>
  );
};
