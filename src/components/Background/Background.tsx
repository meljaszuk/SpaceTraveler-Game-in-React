import React from 'react';
import styles from './Background.module.scss';

type BackgroundPropos = {
  gameStatus: 'GameStart' | 'GameActive' | 'GameWon' | 'GameOver';
};

export const Background: React.FC<BackgroundPropos> = ({ gameStatus }) => {
  const BCGs = [1]; //FIXED LENGTH TO CHANGE - should depend on level

  let statusForStyling;

  gameStatus === 'GameActive'
    ? (statusForStyling = true)
    : (statusForStyling = false);

  return (
    <div className={styles.container}>
      <div className={styles.panel} />
      <div
        className={`${styles.slideWrapper} ${gameStatus === 'GameActive' ? styles.GameActive : styles.GameInactive}`}
        style={{ width: `${BCGs.length * 8000}px` }}
      >
        {BCGs.map((_, index) => (
          <div className={styles.slide} key={index}></div>
        ))}
      </div>
    </div>
  );
};
