import React, { useContext } from 'react';
import styles from './PauseButton.module.scss';
import { AppContext } from '../../context';

export const PauseButton: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { gameStatus } = context;
  return (
    <div className={styles.container}>
        <div className={styles.play}>&#9660;</div>
        <div className={styles.pause}></div>
        <div className={styles.pause}></div>
    </div>
  );
};
