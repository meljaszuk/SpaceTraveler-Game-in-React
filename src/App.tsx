import React, { useContext, useEffect } from 'react';
import { Background } from './components/Background';
import { GameStart } from './components/GameStart';
import { GameActive } from './components/GameActive';
import { GameOver } from './components/GameOver';
import { GameWon } from './components/GameWon';
import { Info } from './components/Info';
import { LeaveGame } from './components/LeaveGame';
import styles from './App.module.scss';
import { AppContext } from './context';
import { GameState } from './types/types';
import ufoImg from './images/ufo.webp';

export const App: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { gameStatus, setGameStatus, setIsPaused, isPaused } = context;

  return (
    <>
      <div className={styles.body}>
        <Info />
        <Background />
        {gameStatus === 'GameStart' && <GameStart />}
        {gameStatus === 'GameActive' && <GameActive />}
        {gameStatus === 'GameWon' && <GameWon />}
        {gameStatus === 'GameOver' && <GameOver />}
        <LeaveGame />
      </div>

      <div className={styles.rwd}>
        <div className={styles.alert}>
          The universe doesn't fit on such a small screen. You need a screen of
          at least:
        </div>
        <div className={styles.screen}>1220px x 600px.</div>
        <div className={styles.ufo}>
          <img src={ufoImg} />
        </div>
      </div>
    </>
  );
};
