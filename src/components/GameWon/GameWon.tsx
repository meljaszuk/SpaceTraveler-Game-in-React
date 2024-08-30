import React from 'react';
import styles from './GameWon.module.scss';
import { Level } from '../Level';
import { Bullets } from '../Bullets';
import { Score } from '../Score';
import { Title } from '../Title';

export const GameWon: React.FC = () => {
  const handleNotReady = () => {
    alert('Game is still in development...');
  };
  return (
    <div className={styles.container}>
      <div className={styles.gameScreen}>
        <Title />
        <div>GameWon in progress</div>
      </div>
      <div className={styles.gamePanel}>
        <Bullets />
        <Level />
        <Score />
      </div>
    </div>
  );
};
