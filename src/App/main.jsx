import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { availableUrls } from '../router/url';
// WHERE THE FUCK CIRCULAR DEPENDENCY
// import { CutoutText } from '../tricks/cutout-text/cutout-text';

import classes from './app.scope.css';

import { v4 as uuid } from 'uuid'

class MainLink{
  link;
  text;

  constructor(link, text) {
    this.link = link
    this.text = text
  }
}

export class Main extends Component {

  listOfLinks = Object.entries(availableUrls)
    .splice(2)
    .map(([text, link]) => new MainLink(link, text.replace('_', ' ').toLowerCase()))

  constructor() {
    super();

    console.log(Object.entries(availableUrls))
    console.log(Object.entries(availableUrls).splice(2))
  }


  render = () => { 
    return (
      <div className={classes.mainPage}>
      { this.listOfLinks.map(
          ({ link, text }) => <Link key={uuid()}  to={ link } className={classes.linkToTrick}>{text}</Link>
        )
      }
      </div>
    );
  }
}
