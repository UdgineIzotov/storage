import React from 'react';

import { Main } from '../App'
import { CutoutText } from '../tricks/cutout-text';
import { availableUrls } from './url';

export const routes = [
  { path: availableUrls.DEFAULT,      component: Main,        exact: true },
  { path: availableUrls.CUTOUT_TEXT,  component: CutoutText,  exact: false },
];
