import React, { useState, useEffect } from 'react';
import styles from './GameOver.module.scss';
import { Level } from '../Level';
import { Bullets } from '../Bullets';
import { Score } from '../Score';
import { Title } from '../Title';
import { Loader } from '../Loader';

export const GameOver: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isExplostion, setIsExplostion] = useState<boolean>(true)
  const [isScreenHidden, setIsScreenHidden] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(false);
    console.log('LOADER done');
  }, []);

  useEffect (() => {
    setTimeout(()=> setIsExplostion(false), 1000)
  }, [])

  useEffect (() => {
    setTimeout(()=> setIsScreenHidden(false), 800)
  }, [])

  return (
    <div className={styles.container}>
      <div className={`${isExplostion ? styles.explosion : styles.explosionDone}`}></div>
      {isLoading ? (
        <Loader />
      ) : (
        <>        
          <div className={`${isScreenHidden ? styles.gameScreenHidden : styles.gameScreen}`}></div>
          <div className={styles.gamePanel}></div>
        </>
      )}
    </div>
  );
};
