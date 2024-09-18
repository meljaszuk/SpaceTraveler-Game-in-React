import React, { useContext } from 'react';
import styles from './Info.module.scss';
import { AppContext } from '../../context';

export const Info: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider');
  }

  const { isInfo, setIsInfo, setIsPaused } = context;

  const closeInfo = () => {
    setIsInfo(false);
    setIsPaused(false);
  };

  return (
    <>
      {isInfo && (
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <div className={styles.close} onClick={closeInfo}>
              <div className={styles.cross}>x</div>
            </div>
            <div className={styles.info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora quod voluptates velit eum pariatur dicta nobis soluta quos
              accusamus, tenetur accusantium ducimus consequuntur cupiditate
              quasi hic. Est, magni beatae! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Placeat vel animi dicta, aluam nam
              velit iure! At ab ratione ullam, veritatis eveniet commodi unde
              architecto, alias esse earum quam possimus!
            </div>
            <div className={styles.info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora quod voluptates velit eum pariatur dicta nobis soluta quos
              accusamus, tenetur accusantium ducimus consequuntur cupiditate
              quasi hic. Est, magni beatae! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Placeat vel animi dicta, aluam nam
              velit iure! At ab ratione ullam, veritatis eveniet commodi unde
              architecto, alias esse earum quam possimus!
            </div>
            <div className={styles.info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora quod voluptates velit eum pariatur dicta nobis soluta quos
              accusamus, tenetur accusantium ducimus consequuntur cupiditate
              quasi hic. Est, magni beatae! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Placeat vel animi dicta, aluam nam
              velit iure! At ab ratione ullam, veritatis eveniet commodi unde
              architecto, alias esse earum quam possimus!
            </div>
            <div className={styles.info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora quod voluptates velit eum pariatur dicta nobis soluta quos
              accusamus, tenetur accusantium ducimus consequuntur cupiditate
              quasi hic. Est, magni beatae! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Placeat vel animi dicta, aluam nam
              velit iure! At ab ratione ullam, veritatis eveniet commodi unde
              architecto, alias esse earum quam possimus!
            </div>
            <div className={styles.info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempora quod voluptates velit eum pariatur dicta nobis soluta quos
              accusamus, tenetur accusantium ducimus consequuntur cupiditate
              quasi hic. Est, magni beatae! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Placeat vel animi dicta, aluam nam
              velit iure! At ab ratione ullam, veritatis eveniet commodi unde
              architecto, alias esse earum quam possimus!
            </div>
          </div>
        </div>
      )}
    </>
  );
};
