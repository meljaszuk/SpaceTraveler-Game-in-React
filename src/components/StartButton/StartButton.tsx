import React, { useContext } from 'react';
import styles from './StartButton.module.scss';
import { AppContext } from '../../context';

export const StartButton: React.FC = () => {
    const context = useContext(AppContext);
    
    if (!context) {
        throw new Error('AppContext must be used within a ContextProvider');
    }
    
    const { setGameStatus, gameStatus } = context;
    
    const handleStart = () => {
        setGameStatus('GameActive');
      };

    return (
    <div className={`${styles.button} ${gameStatus === 'GameOver' ? styles.GameOver : ""}`} onClick={handleStart} />)
}