import React from 'react';
import styles from './Background.module.scss';

export const Background: React.FC = () => {
  const BCGs = [1]; //FIXED LENGTH TO CHANGE

  return (
    <div className={styles.container}>
      <div className={styles.panel} />
      <div
        className={styles.slideWrapper}
        style={{ width: `${BCGs.length * 16000}px` }}
      >
        {BCGs.map((_, index) => (
          <div className={styles.slide} key={index}></div>
        ))}
      </div>
    </div>
  );
};
