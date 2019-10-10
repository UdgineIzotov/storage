import React from 'react';

import { Page } from '../../components/page';

import styles from './skewed-cards.scope.css';

export const SkewedCard = ({cardNumber, cardCaption, cardContent}) => (
  <div className={styles.box}>
    <div className={styles.content}>
      <h2 className={styles.cardNumber}>{cardNumber}</h2>
      <h3 className={styles.cardCaption}>{cardCaption}</h3>
      <p className={styles.cardContent}>
        {cardContent}
      </p>
      <button className={styles.btnMore}>Read more</button>
    </div>
  </div>
)

export const SkewedCards = () => (
    <div className={styles.container}>
      <SkewedCard 
        cardNumber='01'
        cardCaption='Service One'
        cardContent='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam eaque enim adipisci commodi nihil provident veritatis neque nulla fugit?'
      />
      <SkewedCard 
        cardNumber='02'
        cardCaption='Service Two'
        cardContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, deleniti necessitatibus eum dolorem nostrum rem neque excepturi magni? Sint.'
      />
      <SkewedCard 
        cardNumber='03'
        cardCaption='Service Three'
        cardContent='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam eaque enim adipisci commodi nihil provident veritatis neque nulla fugit?'
      />
      <SkewedCard 
        cardNumber='04'
        cardCaption='Service Four'
        cardContent='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, voluptas! Lorem ipsum dolor sit amet.'
      />
    </div>
   );
 
export const SkewedCardsPage = () => (
  <Page>
    <SkewedCards/>
  </Page>
)