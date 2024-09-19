import { Meteor} from '../types/types'

export const randomRotation = (): number => Math.floor(Math.random() * 360) + 1;
export const randomBcg = (): number => Math.floor(Math.random() * 5) + 1;

export const meteors: Meteor[] = [
  {
    id: 1,
    size: "s",
    x: 50,
    y: 50,
    bcg: randomBcg(), 
    timeOut: 0,
    rotation: randomRotation(), 
  },
  {
    id: 2,
    size: "m",
    x: 70,
    y: 70,
    bcg: randomBcg(), 
    timeOut: 1000,
    rotation: randomRotation(), 
  },
  {
    id: 3,
    size: "l",
    x: 20,
    y: 20,
    bcg: randomBcg(), 
    timeOut: 2000,
    rotation: randomRotation(), 
  }
]

export const scores: Record<"s" | "m" | "l", number> = {
    "s": 500,
    "m": 300,
    "l": 100
}