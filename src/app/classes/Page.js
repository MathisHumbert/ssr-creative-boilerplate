import autoBind from 'auto-bind';
import EventEmitter from 'events';
import gsap from 'gsap';

import LazyLoad from './LazyLoad';

import { map, each } from '../utils/dom';
import { easeOut } from '../utils/easing';

import Appear from '../animations/Appear';
import Text from '../animations/Text';
import Title from '../animations/Title';

export default class Page extends EventEmitter {
  constructor({ classes, id, element, elements, isScrollable = true }) {
    super();

    autoBind(this);

    this.classes = { ...classes };
    this.id = id;
    this.selectors = {
      element,
      elements: {
        lazyLoaders: '[lazy-src]',

        animationsAppears: '[data-animation="appear"]',
        animationsTexts: '[data-animation="text"]',
        animationsTitles: '[data-animation="title"]',

        ...elements,
      },
    };
    this.isScrollable = isScrollable;

    this.fontSize = 0;
    this.size = { width: 0, height: 0 };

    this.isVisible = false;
  }

  create() {
    this.animations = [];

    this.element = document.querySelector(this.selectors.element);
    this.elements = {};

    each(this.selectors.elements, ([key, selector]) => {
      if (
        selector instanceof window.HTMLElement ||
        selector instanceof window.NodeList
      ) {
        this.elements[key] = selector;
      } else if (Array.isArray(selector)) {
        this.elements[key] = selector;
      } else {
        this.elements[key] = this.element.querySelectorAll(selector);

        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = this.element.querySelector(selector);
        }
      }
    });

    this.createAnimations();
    this.createLazyLoader();
  }

  /**
   * Animations.
   */
  createAnimations() {
    /**
     * Appear.
     */
    this.animationsAppear = map(this.elements.animationsAppears, (element) => {
      return new Appear({ element });
    });

    this.animations.push(...this.animationsAppear);

    /**
     * Text.
     */
    this.animationsText = map(this.elements.animationsTexts, (element) => {
      return new Text({ element });
    });

    this.animations.push(...this.animationsText);

    /**
     * Title.
     */
    this.animationsTitle = map(this.elements.animationsTitles, (element) => {
      return new Title({ element });
    });

    this.animations.push(...this.animationsTitle);
  }

  /**
   * Loaders.
   */
  createLazyLoader() {
    each(
      this.elements.lazyLoaders,
      (element) =>
        new LazyLoad({
          element,
        })
    );
  }

  /**
   * Animations.
   */
  show() {
    this.lenis.scrollTo(0, { immediate: true });
    each(this.animations, (animation) => animation.createAnimation());

    this.isVisible = true;

    this.addEventListeners();

    return new Promise((res) => {
      const tl = gsap.timeline();

      tl.set(document.documentElement, {
        backgroundColor: this.element.getAttribute('data-background'),
        color: this.element.getAttribute('data-color'),
        ease: easeOut,
      })
        .set(this.element, { autoAlpha: 1, ease: easeOut }, 0)
        .call(() => {
          this.isVisible = true;
          res();
        });
    });
  }

  hide() {
    this.isVisible = false;

    this.removeEventListeners();

    each(this.animations, (animation) => animation.destroyAnimation());

    return new Promise((res) => {
      const tl = gsap.timeline();

      tl.set(this.element, { autoAlpha: 0, ease: easeOut }).call(() => res());
    });
  }

  /**
   * Events.
   */
  onResize(size, fontSize) {
    if (!this.elements.wrapper) return;

    this.fontSize = fontSize;
    this.size = size;

    window.requestAnimationFrame(() => {
      each(this.animations, (animation) => {
        if (animation.onResize) {
          animation.onResize();
        }
      });
    });
  }

  onTouchDown(event) {}

  onTouchMove(event) {}

  onTouchUp() {}

  onWheel(event) {}

  /**
   * Listeners.
   */
  addEventListeners() {}

  removeEventListeners() {}

  /**
   * Loop.
   */
  update(time) {
    if (!this.isScrollable || !this.isVisible) return;

    if (this.lenis) {
      this.lenis.raf(time);
    }

    each(this.animations, (animation) => {
      if (animation.update) {
        animation.update(this.lenis.scroll);
      }
    });
  }
}
