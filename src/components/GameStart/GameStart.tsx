import React, { useContext, useEffect, useState } from 'react';
import styles from './GameStart.module.scss';
import { Level } from '../Level';
import { Bullets } from '../Bullets';
import { Score } from '../Score';
import { Title } from '../Title';
import { AppContext } from '../../context';
import { Loader } from '../Loader';

export const GameStart: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { setGameStatus } = context;

  const handleStart = () => {
    setGameStatus('GameActive');
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); /* LOADING SIMULATION */
    console.log('LOADER done');
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.gameScreen}>
            <Title />
            <div className={styles.button} onClick={handleStart} />
            {/*   ADD INSTRUCTIONS */}
          </div>
          <div className={styles.gamePanel}>
            <Bullets />
            <Level />
            <Score />
          </div>
        </>
      )}
    </div>
  );
};
