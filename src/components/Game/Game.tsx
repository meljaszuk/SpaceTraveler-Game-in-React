import React from 'react';
import styles from './Game.module.scss';

export const Game: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>space traveller</h1>
      <div className={styles.button} />
    </div>
  );
};
