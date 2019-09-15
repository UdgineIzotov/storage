import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { availableUrls } from '../router/url';
// WHERE THE FUCK CIRCULAR DEPENDENCY
// import { CutoutText } from '../tricks/cutout-text/cutout-text';


import classes from './app.scope.css';
export class Main extends Component {

  render = () => { 
    return (
      <div className={classes.mainPage}>
        <Link to={ availableUrls.CUTOUT_TEXT } className={classes.linkToTrick}>Cutout text</Link>
        <Link to={ availableUrls.ANIMATED_TEXT } className={classes.linkToTrick}>Animated text</Link>
      </div>
    );
  }
}
