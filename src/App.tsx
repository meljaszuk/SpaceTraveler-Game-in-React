import React from 'react';
import { Meteor } from './components/Meteor';
import { Background } from './components/Background';
import styles from './App.module.scss';

export const App: React.FC = () => {
  console.log('app');
  return (
    <div className={styles.body}>
      <Background />
    </div>
  );
};
