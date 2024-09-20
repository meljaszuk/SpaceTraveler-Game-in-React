import { Meteor } from '../types/types';

export const randomRotation = (): number => Math.floor(Math.random() * 360) + 1;
export const randomBcg = (): number => Math.floor(Math.random() * 5) + 1;

export const TIME_PER_LEVEL = 60;
export const SPEED_1 = 10;
export const SPEED_2 = 20;

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
    x: 1200,
    y: 90,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 3,
    size: 100,
    x: 1600,
    y: 50,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 4,
    size: 70,
    x: 1920,
    y: 210,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 5,
    size: 170,
    x: 1570,
    y: 350,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 6,
    size: 20,
    x: 2170,
    y: 380,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 7,
    size: 40,
    x: 1970,
    y: 100,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 8,
    size: 40,
    x: 2270,
    y: 400,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 9,
    size: 80,
    x: 1470,
    y: 150,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 10,
    size: 10,
    x: 1470,
    y: 350,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 11,
    size: 70,
    x: 2370,
    y: 30,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 12,
    size: 10,
    x: 3470,
    y: 320,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 13,
    size: 220,
    x: 3370,
    y: -40,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 14,
    size: 30,
    x: 2230,
    y: 10,
    bcg: randomBcg(),
    timeOut: 0,
    rotation: randomRotation(),
  },
  {
    id: 15,
    size: 50,
    x: 2450,
    y: 430,
    bcg: randomBcg(),
    timeOut: 1000,
    rotation: randomRotation(),
  },
  {
    id: 16,
    size: 90,
    x: 2200,
    y: 90,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 17,
    size: 100,
    x: 2600,
    y: 50,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 18,
    size: 70,
    x: 2970,
    y: 250,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 19,
    size: 170,
    x: 2870,
    y: 410,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 20,
    size: 30,
    x: 4070,
    y: 410,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 21,
    size: 20,
    x: 3170,
    y: 380,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 22,
    size: 40,
    x: 2970,
    y: 70,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 23,
    size: 40,
    x: 3270,
    y: 400,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 24,
    size: 80,
    x: 2470,
    y: 150,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 25,
    size: 10,
    x: 2470,
    y: 350,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 26,
    size: 70,
    x: 3170,
    y: 30,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 27,
    size: 220,
    x: 3670,
    y: 280,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 28,
    size: 30,
    x: 3800,
    y: 40,
    bcg: randomBcg(),
    timeOut: 0,
    rotation: randomRotation(),
  },
  {
    id: 29,
    size: 50,
    x: 4750,
    y: 310,
    bcg: randomBcg(),
    timeOut: 1000,
    rotation: randomRotation(),
  },
  {
    id: 30,
    size: 90,
    x: 3700,
    y: 90,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 31,
    size: 100,
    x: 4100,
    y: 50,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 32,
    size: 70,
    x: 4420,
    y: 210,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 33,
    size: 170,
    x: 4070,
    y: 350,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 34,
    size: 20,
    x: 4670,
    y: 380,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 35,
    size: 40,
    x: 4470,
    y: 100,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 36,
    size: 40,
    x: 4770,
    y: 400,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 37,
    size: 80,
    x: 3970,
    y: 150,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 38,
    size: 10,
    x: 3970,
    y: 350,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 39,
    size: 70,
    x: 4870,
    y: 30,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 40,
    size: 10,
    x: 5970,
    y: 320,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 41,
    size: 220,
    x: 5870,
    y: -40,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 42,
    size: 30,
    x: 4730,
    y: 10,
    bcg: randomBcg(),
    timeOut: 0,
    rotation: randomRotation(),
  },
  {
    id: 43,
    size: 50,
    x: 4950,
    y: 430,
    bcg: randomBcg(),
    timeOut: 1000,
    rotation: randomRotation(),
  },
  {
    id: 44,
    size: 90,
    x: 4700,
    y: 90,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 45,
    size: 100,
    x: 5100,
    y: 50,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 46,
    size: 70,
    x: 5470,
    y: 250,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 47,
    size: 170,
    x: 5370,
    y: 410,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 48,
    size: 30,
    x: 4700,
    y: 410,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 49,
    size: 15,
    x: 5000,
    y: 310,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 50,
    size: 20,
    x: 5300,
    y: 250,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 51,
    size: 10,
    x: 5800,
    y: 50,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 52,
    size: 10,
    x: 5600,
    y: 150,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
  {
    id: 53,
    size: 20,
    x: 5800,
    y: 350,
    bcg: randomBcg(),
    timeOut: 2000,
    rotation: randomRotation(),
  },
];
