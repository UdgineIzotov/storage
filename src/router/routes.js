import React from 'react';
import { Redirect }  from 'react-router-dom';

import { availableUrls } from './url';

import { Main } from '../App'
import { CutoutTextPage } from '../tricks/cutout-text';
import { AnimatedTextPage } from '../tricks/animated-text';
import { SkewedCardsPage } from '../tricks/skewed-cards';
import { AnimatedFormPage } from '../tricks/animated-form';

export const routes = [
  { path: availableUrls.DEFAULT, render: () => (<Redirect to={availableUrls.HOME} />), exact: true },
  { path: availableUrls.HOME,  component: Main },
  { path: availableUrls.CUTOUT_TEXT,  component: CutoutTextPage },
  { path: availableUrls.ANIMATED_TEXT,  component: AnimatedTextPage },
  { path: availableUrls.SKEWED_CARDS,  component: SkewedCardsPage },
  { path: availableUrls.ANIMATED_FORM,  component: AnimatedFormPage },
];
