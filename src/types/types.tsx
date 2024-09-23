export type GameState = 'GameStart' | 'GameActive' | 'GameWon' | 'GameOver';

export interface Meteor {
  id: number;
  size: number;
  x: number;
  y: number;
  bcg: number;
  timeOut: number;
  rotation: number;
}

export interface MeteorInZone {
  id: number;
  r: number;
  cX: number;
  cY: number;
}
