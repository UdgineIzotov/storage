import React, { Component } from 'react';

import { Page } from '../../components/page';

import classnames from 'classnames'
import * as classes from './menus.scope.scss';

export class Menus extends Component {
  
  state = {
    currentMenu: 0,
    menuOpened: false,
    timer: null
  }

  constructor() {
    super();
  }
  
  processSelectMenu = currentMenu => {
    this.setState({ currentMenu });

    if (this.state.timer) {
      clearTimeout(this.state.timer);
      this.setState({ timer: null, menuOpened: false });
    }
  }

  changeMenuId = () => {
    console.log(2);
    this.setState(({ currentMenu }) => {
      console.log('currentMenu', currentMenu);
      return ({ currentMenu: currentMenu === 4 ? 1 : currentMenu + 1 })
    });
  } 

  processAnimate = () => {
    const timer = setInterval(this.changeMenuId, 1000);
    this.setState({ timer, menuOpened: true });
  }

  getMenusOptionsClass = (id) => {
    const {menusOptionsButton, menusOptionsButtonActive} = classes;
    const {timer, currentMenu} = this.state;
    return classnames(menusOptionsButton, !timer && id === currentMenu && menusOptionsButtonActive);
  }
  getMenusAnimate = () => classnames(classes.menusAnimate, this.state.timer && classes.menusAnimateActive);
  getClassForItems = () => classes[`menuItemType${this.state.currentMenu}`];
  getClassForMenuOpen = () => classes[`menuOpen${this.state.currentMenu}`];

  render() {
    console.log('[RENDER]');
    const menuOpenClass = classes[`menuOpen${this.state.currentMenu}`];
    const menuItemsClass = classes[`menuItemType${this.state.currentMenu}`];
    const menuAnimate = classnames(classes.menusAnimate, this.state.timer && classes.menusAnimateActive);

    return (
      <div className={classes.menusWrapper}>
        <h3 className={classes.thanks}>By <a href="https://codepen.io/lbebber">Lucas Bebber</a></h3>
        <h4 className={classes.menusOptionsWrapper}>
          <button className={this.getMenusOptionsClass(1)} tabIndex="1"  onClick={() => this.processSelectMenu(1)}>1</button>
          <button className={this.getMenusOptionsClass(2)} tabIndex="2"  onClick={() => this.processSelectMenu(2)}>2</button>
          <button className={this.getMenusOptionsClass(3)} tabIndex="3"  onClick={() => this.processSelectMenu(3)}>3</button>
          <button className={this.getMenusOptionsClass(4)} tabIndex="4"  onClick={() => this.processSelectMenu(4)}>4</button>
          <button className={menuAnimate} tabIndex="5"  onClick={this.processAnimate}>animate</button>
        </h4>

        <nav className={classes.menu}>
          <input 
            type="checkbox" 
            href="#" 
            className={classnames(classes.menuOpen, menuOpenClass)}
            checked={this.state.menuOpened} 
            name="menu-open" 
            id="menu-open"
            tabIndex="6"
          />

          <label className={classes.menuOpenButton} htmlFor="menu-open">
            <span className={classnames(classes.hamburger, classes.hamburger1)}></span>
            <span className={classnames(classes.hamburger, classes.hamburger2)}></span>
            <span className={classnames(classes.hamburger, classes.hamburger3)}></span>
          </label>
          
          <a href="#" className={classnames(classes.menuItem, menuItemsClass)}><i className="fa fa-bar-chart"></i> </a>
          <a href="#" className={classnames(classes.menuItem, menuItemsClass)}><i className="fa fa-plus"></i> </a>
          <a href="#" className={classnames(classes.menuItem, menuItemsClass)}><i className="fa fa-heart"></i> </a>
          <a href="#" className={classnames(classes.menuItem, menuItemsClass)}><i className="fa fa-envelope"></i> </a>
        </nav>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="shadowed-goo">
                  <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                  <feColorMatrix  in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                  <feColorMatrix  in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                  <feOffset       in="shadow" dx="1" dy="1" result="shadow" />
                  <feComposite in2="shadow" in="goo" result="goo" />
                  <feComposite in2="goo" in="SourceGraphic" result="mix" />
              </filter>
              <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <feComposite in2="goo" in="SourceGraphic" result="mix" />
              </filter>
            </defs>
        </svg>
    </div>
    );
  }
}
 
export const MenusPage = () => (
  <Page>
    <Menus />
  </Page>
);
