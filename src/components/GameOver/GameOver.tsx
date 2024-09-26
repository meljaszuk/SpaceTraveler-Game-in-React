// eslint-disable-next-line prettier/prettier
import React, { useState, useEffect, useContext } from 'react';
import styles from './GameOver.module.scss';
import { Title } from '../Title';
import { Loader } from '../Loader';
import { StartButton } from '../StartButton';
import { Panel } from '../Panel';
import { AppContext } from '../../context';

export const GameOver: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { setIsPausedBtnVisible, setRescuedAstronauts } = context;

  useEffect(() => {
    setIsLoading(false);
    // eslint-disable-next-line prettier/prettier
    setIsPausedBtnVisible(false);
    setRescuedAstronauts(0);
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.videoContainer}>
          <Title />
          <StartButton />
          <video autoPlay className={styles.backgroundVideo}>
            <source src={require('./game-over-video.mp4')} type="video/mp4" />
            Your brwoser doesn't support videos.
          </video>
          <Panel />
        </div>
      )}
    </div>
  );
};
