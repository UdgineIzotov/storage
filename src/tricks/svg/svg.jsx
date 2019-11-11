import React from 'react';

import { Page } from '../../components/page';

import classnames from 'classnames'

import classes from './svg.scope.scss';

export const Svg = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classnames(classes.wrapperItem, classes.wrapperItemCenterContent)}>
        <div className={classes.box}>
          <svg><rect></rect></svg>
          <div className={classes.content}>
            <h1>SVG Stroke Animation Effects</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Error voluptates sunt officiis corrupti voluptate delectus,
              reiciendis numquam aliquid odio incidunt.
            </p>
          </div>
        </div>
      </div>

      <div className={classnames(classes.wrapperItem, classes.wrapperItemCenterContent)}>
        <section className={classnames(classes.sec, classes.sec1)}> 
          <svg id="curve" className={classes.curve} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01"> 
            <path d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z" transform="translate(0 -135.53)"/> 
          </svg> 
        </section> 
        <section className={classnames(classes.sec, classes.sec2)}></section>
      </div> 
      
      <div className={classnames(classes.wrapperItem, classes.wrapperItemCenterContent)}>
        <svg className={classes.svg3} viewBox="0 0 300 300">
          <symbol id="text">
            <text text-achor="middle" x="15%" y="60%">SVG</text>
          </symbol>
          <use xlinkHref="#text"></use>
        </svg>
      </div> 
      <div className={classes.wrapperItem}></div> 
      <div className={classes.wrapperItem}></div> 
      <div className={classes.wrapperItem}></div> 
      <div className={classes.wrapperItem}></div> 
      <div className={classes.wrapperItem}></div> 
    </div> 
  );
}

export const SvgPage = () => (
  <Page>
    <Svg />
  </Page>
)

 
