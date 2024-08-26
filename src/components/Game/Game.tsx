import React from 'react';
import styles from './Game.module.scss';
import { Level } from '../Level';
import { Bullets } from '../Bullets';

export const Game: React.FC = () => {
  const handleNotReady = () => {
    alert('Game is still in development...');
  };
  return (
    <div className={styles.container}>
      <div className={styles.gameScreen}>
        <h1 className={styles.title}>space traveller</h1>
        <div className={styles.button} onClick={handleNotReady} />
      </div>
      <div className={styles.gamePanel}>
        <Bullets />
        <Level />
        <div className={styles.gameScore}>03567</div>
      </div>
    </div>
  );
};
