import React, { useContext } from 'react';
import styles from './InfoButton.module.scss';
import { AppContext } from '../../context';

export const InfoButton: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { gameStatus } = context;
  return (
    <div className={styles.container}>
      <div
        className={`${styles.info} ${gameStatus === 'GameOver' ? styles.GameOver : ''}`}
      >
        INFO
      </div>
    </div>
  );
};
