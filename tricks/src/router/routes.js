import React from 'react';
import { Redirect }  from 'react-router-dom';

import { availableUrls } from './url';

import { Main } from '../App'
import { CutoutTextPage } from '../tricks/cutout-text';
import { AnimatedTextPage } from '../tricks/animated-text';
import { SkewedCardsPage } from '../tricks/skewed-cards/skewed-cards';

export const routes = [
  { path: availableUrls.DEFAULT, render: () => (<Redirect to={availableUrls.HOME} />), exact: true },
  { path: availableUrls.HOME,  component: Main,  exact: false },
  { path: availableUrls.CUTOUT_TEXT,  component: CutoutTextPage,  exact: false },
  { path: availableUrls.ANIMATED_TEXT,  component: AnimatedTextPage,  exact: false },
  { path: availableUrls.SKEWED_CARDS,  component: SkewedCardsPage,  exact: false },
];
