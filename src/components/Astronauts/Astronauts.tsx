import React, { useContext, useEffect, useState } from 'react';
import styles from './Astronauts.module.scss';
import { AppContext } from '../../context';

export const Astronauts: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { gameStatus, ASTRONAUTS } = context;
  const [astronauts, setAstronauts] = useState<number[]>([]);

  useEffect(() => {
    const astronauts: number[] = Array(ASTRONAUTS).fill(1);
  }, []);

  useEffect(
    () => {
      //decrement number of bullets on shot
      //TEMPORARY CODE:
      const updatedAstronauts = [1, 1, 1, 0, 0];
      setAstronauts(updatedAstronauts);
    },
    [
      /* bullets */
    ]
  );

  return (
    <div className={styles.gameAstronauts}>
      {astronauts.map((item, index) => (
        <div
          key={index}
          className={`${styles.bulletIcon} ${gameStatus === 'GameOver' ? styles.gameOver : styles.gameActive} ${item === 1 ? '' : styles.used}`}
        />
      ))}
    </div>
  );
};
