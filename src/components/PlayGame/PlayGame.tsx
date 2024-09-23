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
    METEOR_SPEED
  } = context;

  const [newXs, setNewXs] = useState<Record<string, number>>({});
  const [counter, setCounter] = useState<number>(0);
  const [shipY, setShipY] = useState<number>(SHIP_INITAL_Y);
  const [collisionPointsY, setCollisionPointsY] =
    useState<Record<string, number>>(initCollisionPointsY);
  const [meteorsInCollisionZone, setMeteorsInCollisionZone] = useState<MeteorInZone[]>([])
  const [renderedMeteors, setRenderedMeteors] = useState<Meteor[]>([])
  const [isCollision, setIsCollision] = useState<boolean>(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 10);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [counter, isPaused]);


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
    const renderedMeteors = meteors.filter((item) => newXs[item.id] < 1200 || newXs[item.id] > 0 - item.size)
    setRenderedMeteors(renderedMeteors)
  }, [newXs])

  useEffect(() => {
    const detectedMeteors = renderedMeteors.filter(
      (item) =>
        newXs[item.id] < COLLISION_ZONE_X2 &&
        newXs[item.id] > COLLISION_ZONE_X1 - item.size
    );
  
    const meteorsInCollisionZone: MeteorInZone[] = detectedMeteors.map((meteor) => ({
      id: meteor.id,
      r: meteor.size / 2,
      cX: newXs[meteor.id] + meteor.size / 2,
      cY: meteor.y  + meteor.size / 2,
    }));

    setMeteorsInCollisionZone(meteorsInCollisionZone);
  }, [renderedMeteors]);

/*   useEffect(() => {
    console.log(meteorsInCollisionZone)
  }, [meteorsInCollisionZone]) */

  useEffect(() => {
    // Perform collision check for each meteor in collision zone
/*     console.log('COLLISION CHECK CALLED') */
    meteorsInCollisionZone.forEach((meteor) => {
      Object.keys(collisionPointsY).forEach((key) => {
        const pointY = collisionPointsY[key as keyof typeof initCollisionPointsY];
        const pointX = initCollisionPointsX[key as keyof typeof initCollisionPointsX]; 
        const a: number = meteor.cX - pointX;
        const b: number = meteor.cY - pointY;
        
        if ((a**2 + b**2)**0.5 <= meteor.r) {
          setIsPaused(true)
/*           console.log(SHIP_INITAL_X,shipY)
          console.log(meteor.id) */
        }
      });
    });
  }, [meteorsInCollisionZone, shipY])

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
            >{item.id}
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
