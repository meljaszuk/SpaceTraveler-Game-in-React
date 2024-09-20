import { Meteor } from '../types/types';

export const randomRotation = (): number => Math.floor(Math.random() * 360) + 1;
export const randomBcg = (): number => Math.floor(Math.random() * 5) + 1;

export const TIME_PER_LEVEL = 60;

export const meteors: Meteor[] = [
  {
    id: 0,
    size: 30,
    x: 1230,
    y: 10,
    bcg: randomBcg(),
    timeOut: 0,
    rotation: randomRotation(),
  },
  {
    id: 1,
    size: 50,
    x: 1250,
    y: 410,
    bcg: randomBcg(),
    timeOut: 1000,
    rotation: randomRotation(),
  },
  {
    id: 2,
    size: 90,
    x: 1290,
    y: 90,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 3,
    size: 100,
    x: 1300,
    y: 250,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 4,
    size: 70,
    x: 1270,
    y: 350,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
];
