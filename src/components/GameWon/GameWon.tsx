import React, { useState, useEffect } from 'react';
import styles from './GameWon.module.scss';
import { Level } from '../Level';
import { Bullets } from '../Bullets';
import { Score } from '../Score';
import { Title } from '../Title';
import { Loader } from '../Loader';

export const GameWon: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);


  const handleNotReady = () => {
    alert('Game is still in development...');
  };

  useEffect(() => {
    setIsLoading(false);
    console.log('LOADER done')
}, []);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <div className={styles.gameScreen}>
        <Title />
        <div>GameWon in progress</div>
      </div>
      <div className={styles.gamePanel}>
        <Bullets />
        <Level />
        <Score />
      </div>
        </>
      )};
    </div>
  );
};
