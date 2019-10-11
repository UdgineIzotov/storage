import React from 'react';

import { Page } from '../../components/page';

import styles from './animated-form.scope.css';

export const AnimatedForm = () => {
  console.log('whaaat')
  return (
    <div className={styles.animatedFormContainer}>
      <form className={styles.animatedForm}>
        <h3 className={styles.animatedFormCaption}>Create Your World!</h3>
        <input className={styles.animatedFormInput} type="text" placeholder="Name of God (Yours)"/>
        <input className={styles.animatedFormInput} type="text" placeholder="Name of wold"/>
        <button className={styles.animatedFormButton}>Start Your World</button>
      </form>
    </div>
    
   );
}
 
export const AnimatedFormPage = () => (
  <Page>
    <AnimatedForm />
  </Page>
);