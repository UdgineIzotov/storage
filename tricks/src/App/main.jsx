import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { availableUrls } from '../router/url'

export class Main extends Component {

  render = () => { 
    return (
      <div className="main-page">
        <Link to={ availableUrls.CUTOUT_TEXT } className="link-to-trick">Cutout text</Link>
      </div>
    );
  }
}
