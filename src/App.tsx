import React, { useState } from 'react';
import { Background } from './components/Background';
import { GameStart } from './components/GameStart';
import { GameActive } from './components/GameActive';
import { GameOver } from './components/GameOver';
import { GameWon } from './components/GameWon';
import styles from './App.module.scss';

export const App: React.FC = () => {
  const [gameStatus, setGameStatus] = useState<
    'GameStart' | 'GameActive' | 'GameWon' | 'GameOver'
  >('GameStart');

  console.log('app launched');

  const handleOnClick = (gameStat: 'GameStart' | 'GameActive' | 'GameWon' | 'GameOver') => {
    setGameStatus(gameStat);
  }
  return (
    <div>
      <div className={styles.temporaryLinks}>
        <div onClick={() => handleOnClick('GameStart')} className={styles.tempLinks}> GameStart </div>
        <div onClick={() => handleOnClick('GameActive')} className={styles.tempLinks}> GameActive </div>
        <div onClick={() => handleOnClick('GameWon')} className={styles.tempLinks}> GameWon </div>
        <div onClick={() => handleOnClick('GameOver')} className={styles.tempLinks}> GameOver </div>
      </div>
      
      <div className={styles.body}>
        <Background gameStatus={gameStatus} />
        {gameStatus === 'GameStart' && <GameStart />}
        {gameStatus === 'GameActive' && <GameActive />}
        {gameStatus === 'GameWon' && <GameWon />}
        {gameStatus === 'GameOver' && <GameOver />}
      </div>
    </div>

  );
};
