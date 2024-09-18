import React, { useState, createContext, ReactNode } from 'react';

export type GameState = 'GameStart' | 'GameActive' | 'GameWon' | 'GameOver';

type ContextTypes = {
  gameStatus: GameState;
  setGameStatus: (status: GameState) => void;
  isPaused: boolean;
  setIsPaused: (status: boolean) => void;
  isInfo: boolean;
  setIsInfo: (status: boolean) => void;
  isPausedBtnVisible: boolean;
  setIsPausedBtnVisible: (status: boolean) => void;
  time: number;
  setTime: (time: number) => void;
  count: number;
  setCount: (count: number) => void;
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
  const [count, setCount] = useState<number>(3);
  const [isPausedBtnVisible, setIsPausedBtnVisible] = useState<boolean>(false);
  const [isInfo, setIsInfo] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        gameStatus,
        setGameStatus,
        isPaused,
        setIsPaused,
        time,
        setTime,
        count,
        setCount,
        isPausedBtnVisible,
        setIsPausedBtnVisible,
        isInfo,
        setIsInfo
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
