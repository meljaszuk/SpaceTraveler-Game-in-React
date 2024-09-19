import React, { useState, createContext, ReactNode } from 'react';
import { GameState, Meteor } from '../types/types';
import { meteors, randomRotation, randomBcg, scores } from '../gameConfig'

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
  meteors: Meteor[];
  randomRotation: (rotation: number) => void;
  randomBcg: (bcg: number) => void;
  scores: Record<"s" | "m" | "l", number>;
  currentScore: number;
  setCurrentScore: (score: number) => void;
  level: 0 | 1 | 2, 
  setLevel: (level: 0 | 1 | 2) => void;
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
  const [currentScore, setCurrentScore] = useState<number>(0)
  const [level, setLevel] = useState<0 | 1 | 2>(0)


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
        setIsInfo,
        meteors, 
        randomRotation, 
        randomBcg, 
        scores,
        currentScore, 
        setCurrentScore,
        level, 
        setLevel
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

