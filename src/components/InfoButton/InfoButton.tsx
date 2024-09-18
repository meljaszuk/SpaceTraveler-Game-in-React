import React, { useContext } from 'react';
import styles from './InfoButton.module.scss';
import { AppContext } from '../../context';

export const InfoButton: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }
  const { gameStatus, setIsInfo, setIsPaused } = context;
  const openInfo = () => {
    setIsInfo(true);
    setIsPaused(true);
  };

  return (
    <div className={styles.container} onClick={openInfo}>
      <div
        className={`${styles.info} ${gameStatus === 'GameOver' ? styles.GameOver : ''}`}
      >
        INFO
      </div>
    </div>
  );
};
