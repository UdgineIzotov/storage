import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { routes } from './routes';

import { v4 as uuid } from 'uuid';


export class AppRouter extends Component{
  
  render = () => (
    <Router>
      <Switch>
        { routes.map( route => (<Route key={ uuid() } {...route}/>) ) }
      </Switch>
    </Router>
  );
}