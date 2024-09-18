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

  const { setIsPaused, setIsPausedBtnVisible, isInfo } = context;

  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    setIsPaused(true);
    console.log('paused');
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    console.log('control counter', count);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (count < 1 && count > -1) {
      setIsVisible(false);
      // eslint-disable-next-line no-unused-vars
      if(!isInfo) {setIsPaused(false)};
      setIsPausedBtnVisible(true);
    }
  }, [count]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.count}>
      <div className={styles.number}>{count}</div>
      <div></div>
    </div>
  );
};
