import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';

import { routes } from './routes';

import './router.css';

const AnimatedRoutes = withRouter(
  ({ location }) => (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={10000} classNames='fade' >
        <Switch location={location}>
          {routes.map(route => (<Route key={ uuid() } {...route} />))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )

)


export class AppRouter extends Component {

  render = () => {
    const id = uuid();
    console.log(id);
    return (
      <Router>
        <AnimatedRoutes />
      </Router>
    );
  }
}

const mapStateToProps = (a, b) => {

  console.log(a, b);
  return {};
}

export default connect(mapStateToProps)(Router)

