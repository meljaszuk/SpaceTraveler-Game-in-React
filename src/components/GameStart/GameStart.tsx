import React, { useEffect, useState, useContext } from 'react';
import styles from './GameStart.module.scss';
import { Panel } from '../Panel';
import { Title } from '../Title';
import { Loader } from '../Loader';
import { StartButton } from '../StartButton';
import { AppContext } from '../../context';

export const GameStart: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { setIsPausedBtnVisible } = context;

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500); /* LOADING SIMULATION */
    setIsPausedBtnVisible(false);
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.gameScreen}>
            <Title />
            <StartButton />
            {/*   ADD INSTRUCTIONS */}
          </div>
          <Panel />
        </>
      )}
    </div>
  );
};
