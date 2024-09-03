import React, { useState, useEffect, useContext } from 'react';
import styles from './Timer.module.scss';
import { AppContext } from '../../context';

export const Timer: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { setIsPaused, time, setTime } = context;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time >= 0) {
        setTime(time - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      setIsPaused(true);
      console.log('time = 0');
      /* GO TO NEXT LEVEL AND RESET TIMER */
    }
  }, [time]);

  return (
    <div className={styles.count}>
      <div className={styles.number}>{time}</div>
    </div>
  );
};
