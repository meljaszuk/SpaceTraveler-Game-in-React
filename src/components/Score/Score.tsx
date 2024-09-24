import React, { useContext, useEffect } from 'react';
import styles from './Score.module.scss';
import { AppContext } from '../../context';

export const Score: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { gameStatus, score, setScore, rescuedAstronauts, SCORE_PER_ASTRONAUT} = context;

  useEffect(() => {
    setScore(rescuedAstronauts * SCORE_PER_ASTRONAUT);
  }, [rescuedAstronauts])
  return (
    <div
      className={`${styles.gameScore} ${gameStatus === 'GameOver' ? styles.gameOver : ''}`}
    >
      {score}
    </div>
  );
};
