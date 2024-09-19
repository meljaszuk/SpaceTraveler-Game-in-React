import React, { useState, useEffect /* , useContext */ } from 'react';
import styles from './GameActive.module.scss';
import { Panel } from '../Panel';
import { Loader } from '../Loader';
import { Counter } from '../Counter';
import { PlayGame } from '../PlayGame';
/* import { AppContext } from '../../context'; */

export const GameActive: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
    console.log('LOADER done');
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.gameScreen}>
            <div>
              <Counter />
            </div>
            <PlayGame />
          </div>
          <Panel />
        </>
      )}
    </div>
  );
};
