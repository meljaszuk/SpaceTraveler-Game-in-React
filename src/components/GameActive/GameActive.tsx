import React, { useState, useEffect } from 'react';
import styles from './GameActive.module.scss';
import { Level } from '../Level';
import { Bullets } from '../Bullets';
import { Score } from '../Score';
import { Loader } from '../Loader';
import { Counter } from '../Counter';

export const GameActive: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
    console.log('LOADER done');
  }, []);

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
