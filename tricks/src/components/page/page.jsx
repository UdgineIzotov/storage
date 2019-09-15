import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { availableUrls } from '../../router';

import classes from './page.css';
console.log(classes)
export const Page = ({ customClass, children }) => (
  <div className={ classnames("page", customClass) }>
    <Link to={availableUrls.HOME} className="link-return">  Return </Link>
    {children}
  </div>
);
