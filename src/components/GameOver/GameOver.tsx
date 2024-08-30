import React from 'react';
import styles from './GameOver.module.scss';
import { Level } from '../Level';
import { Bullets } from '../Bullets';
import { Score } from '../Score';
import { Title } from '../Title';

export const GameOver: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gameScreen}>
        <Title />
        <div>GameOver in progress</div>
      </div>
      <div className={styles.gamePanel}>
        <Bullets />
        <Level />
        <Score />
      </div>
    </div>
  );
};
