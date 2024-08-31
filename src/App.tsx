import React, { useContext } from 'react';
import { Background } from './components/Background';
import { GameStart } from './components/GameStart';
import { GameActive } from './components/GameActive';
import { GameOver } from './components/GameOver';
import { GameWon } from './components/GameWon';
import styles from './App.module.scss';
import { AppContext } from './context'
import { GameState } from './types/types'

export const App: React.FC = () => {

  const context = useContext(AppContext)

  if (!context) {
    throw new Error ('AppContext must be used within a ContextProvider')
  }

  const {gameStatus, setGameStatus} = context;

  const handleOnClick = (gameStat: GameState) => {
    setGameStatus(gameStat);
  };
  return (
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
          GameActive
        </div>
        <div
          onClick={() => handleOnClick('GameWon')}
          className={styles.tempLinks}
        >
          GameWon
        </div>
        <div
          onClick={() => handleOnClick('GameOver')}
          className={styles.tempLinks}
        >
          GameOver
        </div>
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