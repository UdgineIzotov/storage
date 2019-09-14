import React from 'react';
import { Redirect }  from 'react-router-dom';

import { Main } from '../App'
import { CutoutText } from '../tricks/cutout-text';
import { availableUrls } from './url';

export const routes = [
  { path: availableUrls.DEFAULT, render: () => (<Redirect to={availableUrls.HOME} />), exact: true },
  { path: availableUrls.HOME,  component: Main,  exact: false },
  { path: availableUrls.CUTOUT_TEXT,  component: CutoutText,  exact: false },
];
