import React, { useContext } from 'react';
import styles from './Panel.module.scss';
import { Level } from '../Level';
import { Astronauts } from '../Astronauts';
import { Score } from '../Score';
import { Timer } from '../Timer';
import { AppContext } from '../../context';
import { InfoButton } from '../InfoButton';
import { PauseButton } from '../PauseButton';

export const Panel: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { gameStatus } = context;
  return (
    <div
      className={`${styles.gamePanel} ${gameStatus === 'GameOver' ? styles.gameOver : styles.gameActive}`}
    >
      <div className={styles.margin}></div>
      <div className={styles.astronauts}>
        <Astronauts />
      </div>
      <div className={styles.pauseButton}>
        <PauseButton />
      </div>
      <div className={styles.levels}>
        <Level />
        <InfoButton />
      </div>
      <div className={styles.timer}>
        <Timer />
      </div>
      <div className={styles.score}>
        <Score />
      </div>
    </div>
  );
};
