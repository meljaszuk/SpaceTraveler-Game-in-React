import React, { useState, useEffect, useContext } from 'react';
import styles from './Counter.module.scss';
import { AppContext } from '../../context';

export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(3);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { setIsPaused } = context;

  useEffect(() => {
    setIsPaused(true);
    console.log('paused');
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (count < 1) {
      setIsVisible(false);
      setIsPaused(false);
      console.log('not paused');
    }
  }, [count]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.count}>
      <div className={styles.number}>{count}</div>
    </div>
  );
};
