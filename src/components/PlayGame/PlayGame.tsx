import React, { useContext, useEffect } from 'react';
import styles from './PlayGame.module.scss';
import { AppContext } from '../../context';

export const PlayGame: React.FC = () => {
    const context = useContext(AppContext);
  
    if (!context) {
      throw new Error('AppContext must be used within a ContextProvider');
    }
  
    const { meteors } = context;

    useEffect(() => {
        for(let meteor in meteors) {

        }
    },[])

    return (

   <div className={styles.playground}>
            <div className={styles.wrapper}>
            {meteors.map((item, index) => (
        <div
          key={index}
          className={styles.meteor}
          style={{
            top: `${item.y}px`,
            left: `${item.x}px`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            transform: `rotate(${item.rotation}deg)`,
          }}
        >
          {item.id}
        </div>
            ))} 
            </div>
        </div>
   
     
    )
    }