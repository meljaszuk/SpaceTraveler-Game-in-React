import React, { useState, createContext, ReactNode, useEffect } from 'react';
import { GameState, Meteor } from '../types/types';
import {
  meteors,
  randomRotation,
  randomBcg,
  TIME_PER_LEVEL,
  ASTRONAUTS,
  SHIP_SPEED_MODIFIER,
  SHIP_INITAL_X,
  SHIP_INITAL_Y,
  initCollisionPointsX,
  initCollisionPointsY,
  COLLISION_ZONE_X1,
  COLLISION_ZONE_X2,
  METEOR_SPEED,
  SCORE_PER_ASTRONAUT,
} from '../gameConfig';

import audioBeepFile from '../sounds/crash.mp3';
import audioThankYouFile from '../sounds/thankyou.mp3';

type ContextTypes = {
  gameStatus: GameState;
  setGameStatus: (status: GameState) => void;
  isPaused: boolean;
  setIsPaused: (value: boolean | ((prev: boolean) => boolean)) => void;
  isInfo: boolean;
  setIsInfo: (value: boolean | ((prev: boolean) => boolean)) => void;
  isLeaving: boolean;
  setIsLeaving: (value: boolean | ((prev: boolean) => boolean)) => void;
  isPausedBtnVisible: boolean;
  setIsPausedBtnVisible: (status: boolean) => void;
  time: number;
  setTime: (time: number) => void;
  score: number;
  setScore: (time: number) => void;
  count: number;
  setCount: (count: number) => void;
  meteors: Meteor[];
  randomRotation: (rotation: number) => void;
  randomBcg: (bcg: number) => void;
  currentScore: number;
  setCurrentScore: (score: number) => void;
  level: 0 | 1 | 2;
  setLevel: (level: 0 | 1 | 2) => void;
  TIME_PER_LEVEL: number;
  ASTRONAUTS: number;
  SHIP_SPEED_MODIFIER: number;
  SHIP_INITAL_Y: number;
  SHIP_INITAL_X: number;
  initCollisionPointsX: Record<string, number>;
  initCollisionPointsY: Record<string, number>;
  COLLISION_ZONE_X1: number;
  COLLISION_ZONE_X2: number;
  METEOR_SPEED: number;
  SCORE_PER_ASTRONAUT: number;
  rescuedAstronauts: number;
  setRescuedAstronauts: (score: number) => void;
  isFirstGame: boolean;
  setIsFirstGame: (value: boolean | ((prev: boolean) => boolean)) => void;
  audioCrash: HTMLAudioElement;
  audioThankYou: HTMLAudioElement;
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
  const [time, setTime] = useState<number>(TIME_PER_LEVEL);
  const [count, setCount] = useState<number>(3);
  const [isPausedBtnVisible, setIsPausedBtnVisible] = useState<boolean>(false);
  const [isInfo, setIsInfo] = useState<boolean>(false);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [level, setLevel] = useState<0 | 1 | 2>(0);
  const [score, setScore] = useState<number>(0);
  const [rescuedAstronauts, setRescuedAstronauts] = useState<number>(0);
  const [isLeaving, setIsLeaving] = useState<boolean>(false);
  const [isFirstGame, setIsFirstGame] = useState<boolean>(true);
  const [audioCrash] = useState<HTMLAudioElement>(new Audio(audioBeepFile));
  const [audioThankYou] = useState<HTMLAudioElement>(
    new Audio(audioThankYouFile)
  );

  useEffect(() => {
    audioCrash.load();
    audioThankYou.load();
  }, []);

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
        currentScore,
        setCurrentScore,
        level,
        setLevel,
        TIME_PER_LEVEL,
        ASTRONAUTS,
        SHIP_SPEED_MODIFIER,
        SHIP_INITAL_X,
        SHIP_INITAL_Y,
        initCollisionPointsX,
        initCollisionPointsY,
        COLLISION_ZONE_X1,
        COLLISION_ZONE_X2,
        METEOR_SPEED,
        score,
        setScore,
        SCORE_PER_ASTRONAUT,
        rescuedAstronauts,
        setRescuedAstronauts,
        isLeaving,
        setIsLeaving,
        isFirstGame,
        setIsFirstGame,
        audioCrash,
        audioThankYou,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
