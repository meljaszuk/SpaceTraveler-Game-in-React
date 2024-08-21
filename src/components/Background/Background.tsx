import React from 'react';
import styles from './Background.module.scss';

export const Background: React.FC = () => {
  console.log('bcg');
  return (
    <div className={styles.container}>
      <div className={styles.slider}></div>
    </div>
  );
};
