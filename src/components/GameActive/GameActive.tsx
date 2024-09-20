import React, { useState, useEffect, useContext } from 'react';
import styles from './GameActive.module.scss';
import { Panel } from '../Panel';
import { Loader } from '../Loader';
import { Counter } from '../Counter';
import { PlayGame } from '../PlayGame';
import { AppContext } from '../../context';

export const GameActive: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { TIME_PER_LEVEL, setTime, setGameStatus, time, isPaused } = context;

  useEffect(() => {
    setIsLoading(false);
    setTime(TIME_PER_LEVEL);
  }, []);

  useEffect(() => {
    if (time >= 0 && !isPaused) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [time, isPaused]);

  useEffect(() => {
    if (time < 0) {
      setGameStatus('GameWon');
      setTime(TIME_PER_LEVEL);
    }
  }, [time]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.gameScreen}>
            <div>
              <Counter />
            </div>
            <PlayGame />
          </div>
          <Panel />
        </>
      )}
    </div>
  );
};
