import autoBind from 'auto-bind';
import EventEmitter from 'events';
import Prefix from 'prefix';
import gsap from 'gsap';

import LazyLoad from './LazyLoad';
import { Detection } from './Detection';

import { clamp, lerp } from '../utils/math';
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
    this.preventScroll = false;

    this.scroll = {
      position: 0,
      current: 0,
      target: 0,
      limit: 0,
      ease: 0.1,
    };
    this.fontSize = 0;
    this.size = { width: 0, height: 0 };

    this.transformPrefix = Prefix('transform');

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

    if (this.isScrollable) {
      this.scroll = {
        position: 0,
        current: 0,
        target: 0,
        limit: this.elements.wrapper.clientHeight - this.size.height,
        ease: 0.1,
      };
    }

    this.createAnimations();
    this.createObserver();
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
   * Observer.
   */
  createObserver() {
    this.observer = new window.ResizeObserver((entries) => {
      let shouldUpdateLimit = false;

      for (const _entry of entries) {
        if (_entry.target === this.elements.wrapper) {
          shouldUpdateLimit = true;
          break;
        }
      }

      if (shouldUpdateLimit) {
        window.requestAnimationFrame(() => {
          this.scroll.limit =
            this.elements.wrapper.clientHeight - this.size.height;
        });
      }
    });

    this.observer.observe(this.elements.wrapper);
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
  reset() {
    this.scroll = {
      position: 0,
      current: 0,
      target: 0,
      limit: 0,
      ease: 0.1,
    };
  }

  set(value) {
    this.scroll.current = this.scroll.target = this.scroll.last = value;

    this.transform(this.elements.wrapper, this.scroll.current);
  }

  show() {
    this.reset();

    each(this.animations, (animation) => animation.createAnimation());

    this.isVisible = true;

    this.addEventListeners();

    const tl = gsap.timeline();

    tl.to(document.documentElement, {
      backgroundColor: this.element.getAttribute('data-background'),
      color: this.element.getAttribute('data-color'),
      ease: easeOut,
    }).fromTo(
      this.element,
      { autoAlpha: 0 },
      { autoAlpha: 1, ease: easeOut },
      0
    );
  }

  hide() {
    this.isVisible = false;

    this.removeEventListeners();

    each(this.animations, (animation) => animation.destroyAnimation());

    return new Promise((res) => {
      const tl = gsap.timeline();

      tl.to(this.element, { autoAlpha: 0, ease: easeOut }).call(() => res());
    });
  }

  transform(element, y) {
    element.style[this.transformPrefix] = `translate3d(0, ${-Math.round(
      y
    )}px, 0)`;
  }

  /**
   * Events.
   */
  onResize(size, fontSize) {
    if (!this.elements.wrapper) return;

    this.fontSize = fontSize;
    this.size = size;

    window.requestAnimationFrame(() => {
      this.scroll.limit = this.elements.wrapper.clientHeight - size.height;

      each(this.animations, (animation) => {
        if (animation.onResize) {
          animation.onResize();
        }
      });
    });
  }

  onTouchDown(event) {
    if (!Detection.isMobile || !this.isVisible || this.preventScroll) return;

    this.isDown = true;

    this.scroll.position = this.scroll.current;
    this.start = event.touches ? event.touches[0].clientY : event.clientY;
  }

  onTouchMove(event) {
    if (
      !Detection.isMobile ||
      !this.isDown ||
      !this.isVisible ||
      this.preventScroll
    )
      return;

    const y = event.touches ? event.touches[0].clientY : event.clientY;
    const distance = (this.start - y) * 3;

    this.scroll.target = this.scroll.position + distance;
  }

  onTouchUp() {
    if (!Detection.isMobile || !this.isVisible || this.preventScroll) return;

    this.isDown = false;
  }

  onWheel(normalized) {
    if (!this.isVisible || this.preventScroll) return;

    const speed = normalized.pixelY;

    this.scroll.target += speed;

    return speed;
  }

  /**
   * Listeners.
   */
  addEventListeners() {}

  removeEventListeners() {}

  /**
   * Loop.
   */
  update() {
    if (!this.isScrollable || !this.isVisible || this.preventScroll) return;

    this.scroll.target = clamp(0, this.scroll.limit, this.scroll.target);

    this.scroll.current = lerp(
      this.scroll.current,
      this.scroll.target,
      this.scroll.ease
    );

    this.scroll.current = Number(this.scroll.current.toFixed(2));

    if (this.scroll.current < 0.1) {
      this.scroll.current = 0;
    }

    if (this.elements.wrapper) {
      this.transform(this.elements.wrapper, this.scroll.current);
    }

    each(this.animations, (animation) => {
      if (animation.update) {
        animation.update(this.scroll);
      }
    });

    this.scroll.last = this.scroll.current;
  }
}
