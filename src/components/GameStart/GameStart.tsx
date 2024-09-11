import React, { useEffect, useState } from 'react';
import styles from './GameStart.module.scss';
import { Panel } from '../Panel';
import { Title } from '../Title';
import { Loader } from '../Loader';
import { StartButton } from '../StartButton';

export const GameStart: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500); /* LOADING SIMULATION */
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
            <StartButton />
            {/*   ADD INSTRUCTIONS */}
          </div>
          <Panel />
        </>
      )}
    </div>
  );
};
