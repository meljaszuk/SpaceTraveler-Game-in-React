import React, { useState, createContext, ReactNode } from 'react';

export type GameState = 'GameStart' | 'GameActive' | 'GameWon' | 'GameOver';

type ContextTypes = {
  gameStatus: GameState;
  setGameStatus: (status: GameState) => void;
  isPaused: boolean;
  setIsPaused: (status: boolean) => void;
  time: number;
  setTime: (time: number) => void;
};

type ContextPoviderProps = {
  children: ReactNode;
};

export const AppContext = createContext<ContextTypes | undefined>(undefined);

export const ContextProvider: React.FC<ContextPoviderProps> = ({
  children,
}) => {
  const [gameStatus, setGameStatus] = useState<GameState>('GameStart');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [time, setTime] = useState<number>(30);

  return (
    <AppContext.Provider
      value={{ gameStatus, setGameStatus, isPaused, setIsPaused, time, setTime}}
    >
      {children}
    </AppContext.Provider>
  );
};
