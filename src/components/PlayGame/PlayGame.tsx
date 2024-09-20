import React, { useContext, useEffect, useState } from 'react';
import styles from './PlayGame.module.scss';
import { AppContext } from '../../context';

export const PlayGame: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { meteors, TIME_PER_LEVEL, isPaused } = context;
  const [newXs, setNewXs] = useState<Record<string, number>>({});
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    if (counter < TIME_PER_LEVEL * 100 && !isPaused) {
      const newCounter = counter + 1;
      setTimeout(() => setCounter(newCounter), 10);
    }
  }, [counter, isPaused]);

  useEffect(() => {
    const newXs: { [key: string]: number } = {};
    for (let i = 0; i < meteors.length; i++) {
      newXs[meteors[i].id] = meteors[i].x;
    }
    setNewXs(newXs);
  }, [meteors]);

  useEffect(() => {
    setNewXs((prevNewXs) => {
      const updatedXs = { ...prevNewXs };
      for (const key in updatedXs) {
        if (updatedXs[key] > -300) {
          updatedXs[key] = updatedXs[key] - 1;
        }
      }
      return updatedXs;
    });
  }, [counter]);

  return (
    <div className={styles.playground}>
      <div className={styles.wrapper}>
        {meteors.map((item, index) => (
          <div
            key={index}
            className={styles.meteor}
            style={{
              top: `${item.y}px`,
              left: `${newXs[item.id]}px`,
              width: `${item.size}px`,
              height: `${item.size}px`,
              transform: `rotate(${item.rotation}deg)`,
            }}
          >
            {item.id}
          </div>
        ))}
      </div>
    </div>
  );
};
