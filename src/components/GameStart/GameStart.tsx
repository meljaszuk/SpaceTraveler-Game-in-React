import React, { useContext } from 'react';
import styles from './GameStart.module.scss';
import { Level } from '../Level';
import { Bullets } from '../Bullets';
import { Score } from '../Score';
import { Title } from '../Title';
import { AppContext } from '../../context';

export const GameStart: React.FC = () => {

  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const {setGameStatus} = context;

  const handleStart = () => {
    setGameStatus('GameActive');
  };
  return (
    <div className={styles.container}>
      <div className={styles.gameScreen}>
        <Title />
        <div className={styles.button} onClick={handleStart} />
      </div>
      <div className={styles.gamePanel}>
        <Bullets />
        <Level />
        <Score />
      </div>
    </div>
  );
};
