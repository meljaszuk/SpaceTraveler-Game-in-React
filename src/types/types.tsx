export type GameState = 'GameStart' | 'GameActive' | 'GameWon' | 'GameOver';

export interface Meteor {
    id: number;
    size: "s" | "m" | "l";
    x: number;
    y: number;
    bcg: number
    timeOut: number;
    rotation: number
}

