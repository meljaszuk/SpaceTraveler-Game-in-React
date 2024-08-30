import React from 'react';
import styles from './GameActive.module.scss';
import { Level } from '../Level';
import { Bullets } from '../Bullets';
import { Score } from '../Score';

export const GameActive: React.FC = () => {
  const handleNotReady = () => {
    alert('Game is still in development...');
  };
  return (
    <div className={styles.container}>
      <div className={styles.gameScreen}>
        <h1 className={styles.title}>space traveller</h1>
        <div>GameActive in progress</div>
      </div>
      <div className={styles.gamePanel}>
        <Bullets />
        <Level />
        <Score />
      </div>
    </div>
  );
};
