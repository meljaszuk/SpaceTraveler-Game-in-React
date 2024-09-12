import React, { useState, useEffect } from 'react';
import styles from './GameOver.module.scss';
import { Title } from '../Title';
import { Loader } from '../Loader';
import { StartButton } from '../StartButton';
import { Panel } from '../Panel';

export const GameOver: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isScreenHidden, setIsScreenHidden] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
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
        <>
          <div className={styles.videoContainer}>
            <Title />
            <StartButton />
            <video autoPlay loop className={styles.backgroundVideo}>
              <source src={require('./game-over-video.mp4')} type="video/mp4" />
              Your brwoser doesn't support videos.
            </video>
            <Panel />
          </div>
        </>
      )}
    </div>
  );
};
