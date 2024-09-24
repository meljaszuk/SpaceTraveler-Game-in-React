import React, { useContext, useEffect, useState } from 'react';
import styles from './PlayGame.module.scss';
import { AppContext } from '../../context';
import Img1 from '../../images/meteor-1.png';
import Img2 from '../../images/meteor-2.png';
import Img3 from '../../images/meteor-3.png';
import Img4 from '../../images/meteor-4.png';
import Img5 from '../../images/meteor-5.png';
import Img6 from '../../images/meteor-6.png';
import Img7 from '../../images/meteor-7.png';
import Img8 from '../../images/meteor-8.png';
import Img9 from '../../images/meteor-9.png';
import Img10 from '../../images/meteor-10.png';
import { Meteor, MeteorInZone } from '../../types/types';

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];

export const PlayGame: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const {
    meteors,
    TIME_PER_LEVEL,
    isPaused,
    setIsPaused,
    SHIP_SPEED_MODIFIER,
    SHIP_INITAL_Y,
    SHIP_INITAL_X,
    initCollisionPointsX,
    initCollisionPointsY,
    COLLISION_ZONE_X1,
    COLLISION_ZONE_X2,
    METEOR_SPEED,
    setGameStatus,
    setRescuedAstronauts,
  } = context;

  const [newXs, setNewXs] = useState<Record<string, number>>({});
  const [counter, setCounter] = useState<number>(0);
  const [shipY, setShipY] = useState<number>(SHIP_INITAL_Y);
  const [collisionPointsY, setCollisionPointsY] =
    useState<Record<string, number>>(initCollisionPointsY);
  const [meteorsInCollisionZone, setMeteorsInCollisionZone] = useState<
    MeteorInZone[]
  >([]);
  const [renderedMeteors, setRenderedMeteors] = useState<Meteor[]>([]);
  const [isCollision, setIsCollision] = useState<boolean>(false);
  const [astronautIDs, setAstronautsIds] = useState<Record<number, number>>({});

  useEffect(() => {
    if (counter < TIME_PER_LEVEL * 100 && !isPaused) {
      const newCounter = counter + 1;
      setTimeout(() => setCounter(newCounter), 10);
    }
  }, [counter, isPaused]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        setIsPaused((prev: boolean): boolean => !prev); 
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPaused, setIsPaused]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isPaused) {
        if (event.key === 'ArrowUp') {
          setShipY((prevY) => {
            if (prevY > 0) {
              return prevY - 1 * SHIP_SPEED_MODIFIER;
            }
            return prevY;
          });
          setCollisionPointsY((prevCollisionPointsY) => {
            const updatedCollisionPointsY = { ...prevCollisionPointsY };
            for (const point in updatedCollisionPointsY) {
              updatedCollisionPointsY[point] =
                updatedCollisionPointsY[point] - 1 * SHIP_SPEED_MODIFIER;
            }
            return updatedCollisionPointsY;
          });
        } else if (event.key === 'ArrowDown') {
          setShipY((prevY) => {
            if (prevY < 421) {
              return prevY + 1 * SHIP_SPEED_MODIFIER;
            }
            return prevY;
          });
          setCollisionPointsY((prevCollisionPointsY) => {
            const updatedCollisionPointsY = { ...prevCollisionPointsY };
            for (const point in updatedCollisionPointsY) {
              updatedCollisionPointsY[point] =
                updatedCollisionPointsY[point] + 1 * SHIP_SPEED_MODIFIER;
            }
            return updatedCollisionPointsY;
          });
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPaused]);

  useEffect(() => {
    const newXs: { [key: string]: number } = {};
    for (let i = 0; i < meteors.length; i++) {
      newXs[meteors[i].id] = meteors[i].x;
    }
    setNewXs(newXs);
  }, [meteors]);

  useEffect(() => {
    setNewXs((prevNewXs) => {
      const updatedXs = { ...prevNewXs };
      for (const key in updatedXs) {
        updatedXs[key] = updatedXs[key] - 1 * METEOR_SPEED;
      }
      return updatedXs;
    });
  }, [counter]);

  useEffect(() => {
    const renderedMeteors = meteors.filter(
      (item) => newXs[item.id] < 1200 || newXs[item.id] > 0 - item.size
    );
    setRenderedMeteors(renderedMeteors);
  }, [newXs]);

  useEffect(() => {
    const detectedMeteors = renderedMeteors.filter(
      (item) =>
        newXs[item.id] < COLLISION_ZONE_X2 &&
        newXs[item.id] > COLLISION_ZONE_X1 - item.size
    );

    const meteorsInCollisionZone: MeteorInZone[] = detectedMeteors.map(
      (meteor) => ({
        id: meteor.id,
        r: meteor.size / 2,
        cX: newXs[meteor.id] + meteor.size / 2,
        cY: meteor.y + meteor.size / 2,
        astronaut: meteor.astronaut,
      })
    );

    setMeteorsInCollisionZone(meteorsInCollisionZone);
  }, [renderedMeteors]);

  useEffect(() => {
    meteorsInCollisionZone.forEach((meteor) => {
      Object.keys(collisionPointsY).forEach((key) => {
        const pointY =
          collisionPointsY[key as keyof typeof initCollisionPointsY];
        const pointX =
          initCollisionPointsX[key as keyof typeof initCollisionPointsX];
        const a: number = meteor.cX - pointX;
        const b: number = meteor.cY - pointY;

        if ((a ** 2 + b ** 2) ** 0.5 <= meteor.r) {
          if (meteor.astronaut === true) {
            setAstronautsIds((prevAstronautIDs) => {
              if (!prevAstronautIDs[meteor.id]) {
                return { ...prevAstronautIDs, [meteor.id]: 1 };
              }
              return prevAstronautIDs;
            });
          } else if (meteor.astronaut === undefined) {
            if (!isCollision) {
              setIsCollision(true);
              setAstronautsIds({})
            }
          }
        }
      });
    });
  }, [meteorsInCollisionZone, shipY]);

  useEffect(() => {
    const astronautsNumber = Object.keys(astronautIDs).length;
    console.log(astronautsNumber, astronautIDs);
    setRescuedAstronauts(astronautsNumber);
  }, [astronautIDs]);

  useEffect(() => {
    if (isCollision) {
      setIsPaused(true);
      setTimeout(() => setGameStatus('GameOver'), 1000);
    }
  }, [isCollision]);

  return (
    <div className={styles.playground}>
      <div className={styles.wrapper}>
        {renderedMeteors.map((item, index) => (
          <div
            key={index}
            className={styles.meteor}
            style={{
              top: `${item.y}px`,
              left: `${newXs[item.id]}px`,
              width: `${item.size}px`,
              height: `${item.size}px`,
              transform: `rotate(${item.rotation}deg)`,
              backgroundImage: `url(${images[item.bcg - 1]})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
            }}
          >
            {item.id}
          </div>
        ))}
      </div>

      <div
        className={styles.spaceship}
        style={{ top: `${shipY}px`, left: `${SHIP_INITAL_X}px` }}
      />
      <div
        className={`${isCollision ? styles.explosion : ''}`}
        style={{ top: `${shipY - 20}px`, left: `${SHIP_INITAL_X + 40}px` }}
      />
    </div>
  );
};
