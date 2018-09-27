import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Main extends Component {

  render = () => { 
    return (
      <div className="main-page">
        <Link to="/cutout-text" className="link-to-trick">Cutout text</Link>
      </div>
    );
  }
}
