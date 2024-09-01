import React, { useContext } from 'react';
import styles from './Title.module.scss';
import { AppContext } from '../../context';

export const Title: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { gameStatus } = context;

  return (
    <div>
      {gameStatus === 'GameStart' && (
        <div className={`${styles.GameStart} ${styles.general}`}>
          space traveller
        </div>
      )}
      {gameStatus === 'GameActive' && <div></div>}
      {gameStatus === 'GameWon' && (
        <div className={`${styles.GameWon} ${styles.general}`}>great job!</div>
      )}
      {gameStatus === 'GameOver' && (
        <div className={`${styles.GameOver} ${styles.general}`}>game over</div>
      )}
    </div>
  );
};
