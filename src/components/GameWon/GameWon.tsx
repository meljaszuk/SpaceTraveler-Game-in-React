// eslint-disable-next-line prettier/prettier
import React, { useState, useEffect, useContext } from 'react';
import styles from './GameWon.module.scss';
import { Panel } from '../Panel';
import { Title } from '../Title';
import { Loader } from '../Loader';
import { AppContext } from '../../context';
import { ASTRONAUTS } from '../../gameConfig';

export const GameWon: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { setIsPausedBtnVisible, score, rescuedAstronauts, ASTRONAUTS } =
    context;
  const [bonus, setBonus] = useState<0 | 1000>(0);

  useEffect(() => {
    setIsLoading(false);
    setIsPausedBtnVisible(false);

    if (rescuedAstronauts === ASTRONAUTS) {
      setBonus(1000);
    }
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.gameScreen}>
            <Title />
            <div className={styles.summary}>
              <div className={styles.row}>
                <div className={styles.description}>
                  Score for rescuing astronauts:{' '}
                </div>
                <div className={styles.number}>{score - bonus}</div>
              </div>

              <div className={styles.row}>
                <div className={styles.description}>
                  Bonus for rescuing whole crew:{' '}
                </div>
                <div className={styles.number}>{bonus}</div>
              </div>

              <div className={styles.row}>
                <div className={styles.description}>TOTAL: </div>
                <div className={styles.number}>{score}</div>
              </div>
            </div>
          </div>
          <Panel />
        </>
      )}
      ;
    </div>
  );
};
