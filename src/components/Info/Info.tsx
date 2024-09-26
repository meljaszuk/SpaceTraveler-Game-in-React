import React, { useContext, useEffect } from 'react';
import styles from './Info.module.scss';
import { AppContext } from '../../context';

export const Info: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { isInfo, setIsInfo, setIsPaused, gameStatus, setGameStatus } = context;

  const closeInfo = () => {
    setIsInfo(false);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isInfo) {
      setIsPaused(true);
    }
  }, [isInfo]);

  const handleOK = () => {
    if (gameStatus === 'GameStart') {
      setGameStatus('GameActive');
      setIsInfo(false);
    } else {
      closeInfo();
      setIsPaused(true);
    }
  };

  return (
    <>
      {isInfo && (
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <div className={styles.close} onClick={closeInfo}>
              <div className={styles.cross}>x</div>
            </div>
            <div className={styles.info}>
              <h2>Your mission</h2>
              <p>
                You are about to start your mission. Your task is to rescue five
                astronauts lost in a meteor field after their spaceship crashed.
                Safely guide them back to Earth.
              </p>
              <p>
                Your spaceship can only move up by pressing{' '}
                <strong className={styles.em}>&#8593;</strong> key or down by
                pressing <strong className={styles.em}>&#8595;</strong> key. Use
                the <strong className={styles.em}>SPACEBAR</strong> to pause the
                game, and <strong className={styles.em}>ESC</strong> to exit.
                You can view these instructions anytime by pressing the{' '}
                <strong className={styles.em}>I</strong> key.
              </p>
              <p>Good luck! The survivors are counting on you, Hero!</p>
            </div>
            <div className={styles.warpper}>
              <div className={styles.ok} onClick={handleOK}>
                OK!
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
