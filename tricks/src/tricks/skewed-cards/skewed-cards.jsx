import React from 'react';

import { Page } from '../../components/page';

import styles from './skewed-cards.scope.css';

export const SkewedCards = () =>  (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.content}>
          <h2>01</h2>
          <h3>Service One</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Quam eaque enim adipisci commodi nihil provident veritatis neque nulla fugit?
          </p>
          <a href="#">Read more</a>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          <h2>02</h2>
          <h3>Service Two</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nemo, deleniti necessitatibus eum dolorem nostrum rem neque excepturi magni? Sint.
          </p>
          <a href="#">Read more</a>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          <h2>03</h2>
          <h3>Service Three</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Quam eaque enim adipisci commodi nihil provident veritatis neque nulla fugit?
          </p>
          <a href="#">Read more</a>
        </div>
      </div>
    </div>
   );
 
export const SkewedCardsPage = () => (
  <Page>
    <SkewedCards/>
  </Page>
)