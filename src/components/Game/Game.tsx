import React from 'react';
import styles from './Game.module.scss';

export const Game: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gameScreen}>
        <h1 className={styles.title}>space traveller</h1>
        <div className={styles.button} />
      </div>
      <div className={styles.gamePanel}>
        <div className={styles.gameBullets}>
          <div className={styles.bulletIcon}></div>
          <div className={styles.bulletIcon}></div>
          <div className={styles.bulletIcon}></div>
          <div className={styles.bulletIcon}></div>
        </div>
        <div className={styles.gameLevel}>LEVEL 1</div>
        <div className={styles.gameScore}>03567</div>
      </div>
    </div>
  );
};
