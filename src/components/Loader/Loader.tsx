import React, { useEffect } from 'react';
import styles from './Loader.module.scss';

export const Loader: React.FC = () => {

    useEffect(()=>{
        console.log('Loader done')
    },[])
    return (
        <div className={styles.wrapper}>
            LOADER!!!!
            <div className={styles.sun}></div>
            <div className={styles.planet1}></div>
            <div className={styles.planet2}></div>
            <div className={styles.planet3}></div>
            <div className={styles.planet4}></div>
        </div>
    )
}
