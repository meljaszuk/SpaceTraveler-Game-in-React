import React, { useContext, useEffect } from 'react';
import { Background } from './components/Background';
import { GameStart } from './components/GameStart';
import { GameActive } from './components/GameActive';
import { GameOver } from './components/GameOver';
import { GameWon } from './components/GameWon';
import styles from './App.module.scss';
import { AppContext } from './context';
import { GameState } from './types/types';

export const App: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { gameStatus, setGameStatus, setIsPaused, isPaused } = context;

  const handleOnClick = (gameStat: GameState) => {
    setGameStatus(gameStat);
  };

  const pauseGame = () => {
    if (gameStatus === 'GameActive') {
      setIsPaused(!isPaused);
    }
  };

  useEffect(() => {
    console.log('App started');
  }, []);

  useEffect(() => {
    console.log(isPaused);
  }, [isPaused]);

  return (
    <div>
      <div>
        <div className={styles.temporaryLinks}>
          <div
            onClick={() => handleOnClick('GameStart')}
            className={styles.tempLinks}
          >
            GameStart
          </div>
          <div
            onClick={() => handleOnClick('GameActive')}
            className={styles.tempLinks}
          >
            GameActive (in progress)
          </div>
          <div
            onClick={() => handleOnClick('GameWon')}
            className={styles.tempLinks}
          >
            GameWon (in progress)
          </div>
          <div
            onClick={() => handleOnClick('GameOver')}
            className={styles.tempLinks}
          >
            GameOver
          </div>
          <div
            onClick={pauseGame}
            className={styles.tempLinks}
          >
            [pasue / unpause game]
          </div>
        </div>

        <div className={styles.body}>
          <Background />
          {gameStatus === 'GameStart' && <GameStart />}
          {gameStatus === 'GameActive' && <GameActive />}
          {gameStatus === 'GameWon' && <GameWon />}
          {gameStatus === 'GameOver' && <GameOver />}
        </div>
      </div>
    </div>
  );
};
