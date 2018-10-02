import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { availableUrls } from '../../router';

import './page.css';

export const Page = ({ customClass, children }) => (
  <div className={ classnames("page", customClass) }>
    <Link to={availableUrls.DEFAULT} className="link-return">  Return </Link>
    {children}
  </div>
);
