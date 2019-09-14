import React from 'react';

import { Page } from '../../components/page';

import './cutout-text.css';

export const CutoutText = () => (
  <Page>
    <div className="background">
      <div className="message-wrapper">
        <div className="message black-and-white">cutout</div>
        <div className="message white-and-black">text</div>
      </div>
    </div>
  </Page>
);

export const CutoutTextPage = () => (
  <Page>
    <div className="background">
      <div className="message-wrapper">
        <div className="message black-and-white">cutout</div>
        <div className="message white-and-black">text</div>
      </div>
    </div>
  </Page>
)