import React, { useContext, useEffect, useState} from 'react';
import styles from './Bullets.module.scss';
import { AppContext } from '../../context';

export const Bullets: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { gameStatus, BULLETS } = context;
  const [bullets, setBullets] = useState<number[]>([])

  useEffect(() => {
    let bullets: number[] = Array(BULLETS).fill(1)
  }, [])

  useEffect(() => {
    //decrement number of bullets on shot
    //TEMPORARY CODE:
    const updatedBullets = [1,1,1,1,1,1,1,1,0,0,0,0]
    setBullets(updatedBullets)
  },[/* bullets */])

  return (
        <div className={styles.gameBullets}>
          {bullets.map((item,index) => (
            <div
            key={index}
            className={`${styles.bulletIcon} ${gameStatus === 'GameOver' ? styles.gameOver : styles.gameActive} ${item === 1 ? "" : styles.used}`}
            />
          ))}
    </div>
  );
};
