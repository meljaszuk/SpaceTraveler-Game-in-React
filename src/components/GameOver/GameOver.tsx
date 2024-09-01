import React, {useState, useEffect} from 'react';
import styles from './GameOver.module.scss';
import { Level } from '../Level';
import { Bullets } from '../Bullets';
import { Score } from '../Score';
import { Title } from '../Title';
import { Loader } from '../Loader';

export const GameOver: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
      setIsLoading(false);
      console.log('LOADER done')
  }, []);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
              <div className={styles.gameScreen}>
        <Title />
        <div>GameOver in progress</div> {/* Add 'START AGAIN BUTTON' */}
      </div>
      <div className={styles.gamePanel}>
        <Bullets />
        <Level />
        <Score />
      </div>
        </>
      )};
    </div>
  );
};
