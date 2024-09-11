import React, { useContext } from 'react';
import styles from './Panel.module.scss';
import { Level } from '../Level';
import { Bullets } from '../Bullets';
import { Score } from '../Score';
import { AppContext } from '../../context';

export const Panel: React.FC = () => {

    const context = useContext(AppContext);

    if (!context) {
      throw new Error('AppContext must be used within a ContextProvider');
    }
  
    const { gameStatus } = context;
    return (
        <div className={`${styles.gamePanel} ${gameStatus === 'GameOver' ? styles.gameOver : styles.gameActive}`}>
            <Bullets />
            <Level />
            <Score />
        </div>
)
}