import React, { useContext } from 'react';
import styles from './StartButton.module.scss';
import { AppContext } from '../../context';

export const StartButton: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { setGameStatus, gameStatus, setIsInfo, setRescuedAstronauts } = context;

  const handleStart = () => {
    setGameStatus('GameActive');
    setRescuedAstronauts(0)
  };

  const openInfo = () => {
    setIsInfo(true);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.button} ${gameStatus === 'GameOver' ? styles.GameOver : ''}`}
        onClick={handleStart}
      />
      <div
        className={`${styles.infoButton} ${gameStatus !== 'GameStart' ? styles.hidden : ''}`}
        onClick={openInfo}
      />
    </div>
  );
};
