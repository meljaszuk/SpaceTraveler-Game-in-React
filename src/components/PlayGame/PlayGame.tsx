import React, { useContext, useEffect } from 'react';
import styles from './PlayGame.module.scss';
import { AppContext } from '../../context';

export const PlayGame: React.FC = () => {
    const context = useContext(AppContext);
  
    if (!context) {
      throw new Error('AppContext must be used within a ContextProvider');
    }
  
    const { meteors, randomBcg, randomRotation, scores } = context;

    useEffect(() => {
        for(let meteor in meteors) {
            
        }
    },[])

    return (
        <div className={styles.playground}>x</div>
    )
    }