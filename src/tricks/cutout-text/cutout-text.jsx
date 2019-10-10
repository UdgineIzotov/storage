import React from 'react';
import classnames from 'classnames'
import { Page } from '../../components/page';

import classes from './cutout-text.scope.css';

export const CutoutText = () => (
    <div className={classes.background}>
      <div className={classes.messageWrapper}>
        <div className={classnames(classes.message, classes.blackAndWhite)}>cutout</div>
        <div className={classnames(classes.message, classes.whiteAndBlack)}>text</div>
      </div>
    </div>
);

export const CutoutTextPage = () => (
  <Page>
    <CutoutText />
  </Page>
)