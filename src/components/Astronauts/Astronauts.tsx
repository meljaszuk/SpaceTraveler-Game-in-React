import React, { useContext, useEffect, useState } from 'react';
import styles from './Astronauts.module.scss';
import { AppContext } from '../../context';

export const Astronauts: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { gameStatus, ASTRONAUTS, rescuedAstronauts } = context;
  const [astronauts, setAstronauts] = useState<number[]>([]);

  useEffect(() => {
    const astronauts: number[] = Array(ASTRONAUTS).fill(0);
    for (let i = 0; i < rescuedAstronauts; i++) {
      astronauts[i] = 1;
    }
    setAstronauts(astronauts)
  }, []);

  useEffect(() => {
    astronauts[rescuedAstronauts - 1] = 1;
  }, [rescuedAstronauts])

    return (
    <div className={styles.gameAstronauts}>
      {astronauts.map((item, index) => (
        <div
          key={index}
          className={`${styles.icon} ${gameStatus === 'GameOver' ? styles.gameOver : styles.gameActive} ${item === 1 ? '' : styles.notYet}`}
        />
      ))}
    </div>
  );
};
