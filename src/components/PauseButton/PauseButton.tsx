import React, { useContext } from 'react';
import styles from './PauseButton.module.scss';
import { AppContext } from '../../context';

export const PauseButton: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { isPaused, setIsPaused, isPausedBtnVisible, gameStatus } = context;

  const handlePause = () => {
    if(isPausedBtnVisible) {
      setIsPaused(!isPaused);
      console.log('pause button used')
    }
  }

  return (
    <div className={`${!isPausedBtnVisible ? styles.lowerOpac : ""} ${styles.icon} ${gameStatus === 'GameOver' ? styles.hidden : ""}`} onClick={handlePause}>
      <div className=
      {`
      ${isPaused && isPausedBtnVisible ? styles.play : ""}
      ${isPaused && !isPausedBtnVisible ? styles.playHidden : ""}
      ${!isPaused && !isPausedBtnVisible ? styles.pauseHidden : ""}
      ${!isPaused && isPausedBtnVisible ? styles.pause : ""}
      `} />
    </div>
  );
};
