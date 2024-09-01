import React, { useEffect } from 'react';
import styles from './Loader.module.scss';

export const Loader: React.FC = () => {

    useEffect(() => {
        console.log('Loader done');
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.animation}>
                <div className={styles.sun}></div>
                <div className={styles.planet1}>
                    <div className={styles.circle1}></div>
                </div>
                <div className={styles.planet2}>
                    <div className={styles.circle2}></div>
                </div>
                <div className={styles.planet3}>
                    <div className={styles.circle3}></div>
                </div>
                <div className={styles.planet4}>
                    <div className={styles.circle4}></div>
                </div>
            </div>
            <div className={styles.title}>
                LOADING
            </div>
        </div>
    );
};
