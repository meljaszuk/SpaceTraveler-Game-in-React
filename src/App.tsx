import React, { useState } from 'react';
import { Background } from './components/Background';
import { Game } from './components/Game';
import styles from './App.module.scss';

export const App: React.FC = () => {
  const [gameStatus, setGameStatus] = useState<
    'GameStart' | 'GameActive' | 'GameWon' | 'GameOver'
  >('GameStart');

  console.log('app launched');

  return (
    <div className={styles.body}>
      <Background gameStatus={gameStatus} />
      <Game />
    </div>
  );
};
