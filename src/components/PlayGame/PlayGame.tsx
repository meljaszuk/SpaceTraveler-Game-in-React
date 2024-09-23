import React, { useContext, useEffect, useState } from 'react';
import styles from './PlayGame.module.scss';
import { AppContext } from '../../context';
import meteorImg1 from '../../images/meteor-1.png';
import meteorImg2 from '../../images/meteor-2.png';
import meteorImg3 from '../../images/meteor-3.png';
import meteorImg4 from '../../images/meteor-4.png';
import meteorImg5 from '../../images/meteor-5.png';
import { Meteor, MeteorInZone } from '../../types/types';

const meteorImages = [
  meteorImg1,
  meteorImg2,
  meteorImg3,
  meteorImg4,
  meteorImg5,
];

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

  useEffect(() => {
    if (counter < TIME_PER_LEVEL * 100 && !isPaused) {
      const newCounter = counter + 1;
      setTimeout(() => setCounter(newCounter), 10);
    }
  }, [counter, isPaused]);

  useEffect(() => {
    let animationFrameId: number;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isPaused) {
        const direction =
          event.key === 'ArrowUp' ? -1 : event.key === 'ArrowDown' ? 1 : 0;

        if (direction !== 0) {
          // Użycie requestAnimationFrame
          animationFrameId = requestAnimationFrame(() => {
            setShipY((prevY) => {
              const newY = Math.max(
                0,
                Math.min(prevY + direction * SHIP_SPEED_MODIFIER, 421)
              );
              return newY;
            });

            setCollisionPointsY((prevCollisionPointsY) => {
              const updatedCollisionPointsY = { ...prevCollisionPointsY };
              for (const point in updatedCollisionPointsY) {
                updatedCollisionPointsY[point] +=
                  direction * SHIP_SPEED_MODIFIER;
              }
              return updatedCollisionPointsY;
            });
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
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
    let animationFrameId: number;

    const updateMeteorPositions = () => {
      setNewXs((prevNewXs) => {
        const updatedXs = { ...prevNewXs };
        for (const key in updatedXs) {
          updatedXs[key] = updatedXs[key] - METEOR_SPEED;
        }
        return updatedXs;
      });

      animationFrameId = requestAnimationFrame(updateMeteorPositions);
    };

    if (!isPaused) {
      animationFrameId = requestAnimationFrame(updateMeteorPositions);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

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
          setIsPaused(true);
        }
      });
    });
  }, [meteorsInCollisionZone, shipY]);

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
              backgroundImage: `url(${meteorImages[item.bcg - 1]})`,
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
    </div>
  );
};
