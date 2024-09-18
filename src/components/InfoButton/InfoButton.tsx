import React, { useContext } from 'react';
import styles from './InfoButton.module.scss';
import { AppContext } from '../../context';

export const InfoButton: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const handleInfo = () => {
    setIsInfo(true)
  }

  const { gameStatus, setIsInfo } = context;
  return (
    <div className={styles.container} onClick={handleInfo}>
      <div
        className={`${styles.info} ${gameStatus === 'GameOver' ? styles.GameOver : ''}`}
      >
        INFO
      </div>
    </div>
  );
};
