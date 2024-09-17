import React, { useState, useEffect, useContext } from 'react';
import styles from './GameOver.module.scss';
import { Title } from '../Title';
import { Loader } from '../Loader';
import { StartButton } from '../StartButton';
import { Panel } from '../Panel';
import { AppContext } from '../../context';

export const GameOver: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isScreenHidden, setIsScreenHidden] = useState<boolean>(true);
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { setIsPausedBtnVisible } = context;

  useEffect(() => {
    setIsLoading(false);
    setIsPausedBtnVisible(false);
    console.log('LOADER done');
  }, []);

  useEffect(() => {
    setTimeout(() => setIsScreenHidden(false), 800);
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.videoContainer}>
          <Title />
          <StartButton />
          <video autoPlay loop className={styles.backgroundVideo}>
            <source src={require('./game-over-video.mp4')} type="video/mp4" />
            Your brwoser doesn't support videos.
          </video>
          <Panel />
        </div>
      )}
    </div>
  );
};
