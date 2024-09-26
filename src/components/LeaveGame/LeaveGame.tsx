import React, { useContext, useEffect } from 'react';
import styles from './LeaveGame.module.scss';
import { AppContext } from '../../context';

export const LeaveGame: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { isLeaving, setIsLeaving, setGameStatus, setIsPaused, isPaused } =
    context;

  const handleAnswer = (leaving: boolean) => {
    if (leaving) {
      setGameStatus('GameStart');
      setIsLeaving(false);
    } else {
      setIsLeaving(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'KeyY') {
        handleAnswer(true);
      } else if (event.code === 'KeyN') {
        handleAnswer(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isLeaving) {
      setIsPaused(true);
    }
  }, [isLeaving, isPaused]);

  return (
    <>
      {isLeaving && (
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <div className={styles.info}>
              Are you sure that you want to abandon your mission?
            </div>
            <div className={styles.wrapper}>
              <div className={styles.no} onClick={() => handleAnswer(false)}>
                No
              </div>
              <div className={styles.yes} onClick={() => handleAnswer(true)}>
                Yes
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
