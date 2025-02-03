import gsap from 'gsap';

import Page from '../../classes/Page';

export default class About extends Page {
  constructor({ responsive }) {
    super({
      id: 'about',
      classes: {},
      element: '.about',
      elements: {},
      responsive,
    });
  }

  /**
   * Animations.
   */
  async show(prevTemplate) {
    let tl = null;

    // if (prevTemplate === null) {
    //   tl = this.showAbout();
    // } else if (prevTemplate === 'about') {
    //   tl = this.showAboutFromHome();
    // }

    return super.show(tl);
  }

  showAbout() {
    const tl = gsap.timeline();

    return tl;
  }

  showAboutFromHome() {
    const tl = gsap.timeline();

    return tl;
  }

  async hide(nextTemplate) {
    let tl = null;

    // if (nextTemplate === null) {
    //   tl = this.hideAbout();
    // } else if (nextTemplate === 'home') {
    //   tl = this.hideAboutToHome();
    // }

    return super.hide(tl);
  }

  hideAbout() {
    const tl = gsap.timeline();

    return tl;
  }

  hideAboutToHome() {
    const tl = gsap.timeline();

    return tl;
  }

  /**
   * Events
   */
  onResize(size, fontSize) {
    super.onResize(size, fontSize);

    this.fontSize = fontSize;
    this.size = size;
  }

  /**
   * Listeners.
   */
  addEventListeners() {}

  removeEventListeners() {}

  /**
   * Loop.
   */
  update(scroll, time) {
    super.update(scroll, time);
  }
}
