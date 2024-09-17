import React, { useState, useEffect, useContext  } from 'react';
import styles from './GameWon.module.scss';
import { Panel } from '../Panel';
import { Title } from '../Title';
import { Loader } from '../Loader';
import { AppContext } from '../../context';

export const GameWon: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { setIsPausedBtnVisible } = context;

  useEffect(() => {
    setIsLoading(false);
    setIsPausedBtnVisible(false)
    console.log('LOADER done');
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.gameScreen}>
            <Title />
            <div>GameWon in progress</div>
          </div>
          <Panel />
        </>
      )}
      ;
    </div>
  );
};
