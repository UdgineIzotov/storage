import React, { Component } from 'react';

import './page.css';

export class Page extends Component {

  render = () => { 
    return (
      <div className="page">
        { this.props.children }
      </div>
    );
  }
}
