import React, { useContext, useEffect, useState } from 'react';
import styles from './Score.module.scss';
import { AppContext } from '../../context';

export const Score: React.FC = () => {
  const [stringScore, setStringScore] = useState<string>("0000")
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const {
    gameStatus,
    score,
    setScore,
    rescuedAstronauts,
    SCORE_PER_ASTRONAUT,
  } = context;

  useEffect(() => {
    setScore(rescuedAstronauts * SCORE_PER_ASTRONAUT);
  }, [rescuedAstronauts]);

  useEffect(() => {
    const formattedScore = score.toString().padStart(4, '0');
    setStringScore(formattedScore)
  }, [score])

  return (
    <div
      className={`${styles.gameScore} ${gameStatus === 'GameOver' ? styles.gameOver : ''}`}
    >
      {stringScore}
    </div>
  );
};
