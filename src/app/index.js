import '../styles/index.scss';
import './utils/scroll';

import AutoBind from 'auto-bind';
import FontFaceObserver from 'fontfaceobserver';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Stats from 'stats.js';
import Lenis from 'lenis';

import Canvas from './canvas';

import Preloader from './components/Preloader';
import Grid from './components/Grid';

import Clock from './classes/Clock';
import Responsive from './classes/Responsive';

import Home from './pages/Home';
import About from './pages/About';

import { each } from './utils/dom';

gsap.registerPlugin(ScrollTrigger);

export default class App {
  constructor() {
    AutoBind(this);

    this.clock = new Clock();
    this.url = window.location.href;
    this.isLoading = false;
    this.odlElapsedTime = 0;
    this.lenis = null;

    if (import.meta.env.VITE_DEV_MODE === 'true') {
      this.createStats();
      this.createGrid();
    }

    this.init();
  }

  init() {
    this.createContent();

    this.createResponsive();
    this.createCanvas();
    this.createPages();
    this.createPreloader();
    this.createLenis();

    this.addEventsListeners();
    this.addLinkListeners();

    this.update();
  }

  /**
   * Create.
   */
  createContent() {
    this.content = document.querySelector('.content');
    this.template = this.content.getAttribute('data-template');
  }

  createPages() {
    this.pages = {
      home: new Home({ responsive: this.responsive }),
      about: new About({ responsive: this.responsive }),
    };

    this.page = this.pages[this.template];

    this.page.create(true);
  }

  createCanvas() {
    this.canvas = new Canvas({
      template: this.template,
      size: this.responsive.size,
    });
  }

  createPreloader() {
    this.preloader = new Preloader();

    this.preloader.preload(this.content);

    this.preloader.on('preloaded', () => this.onPreloaded());
  }

  createStats() {
    this.stats = new Stats();

    this.stats.showPanel(0);

    document.body.appendChild(this.stats.dom);
  }

  createGrid() {
    this.grid = new Grid();
  }

  createResponsive() {
    this.responsive = new Responsive();
  }

  createLenis() {
    this.lenis = new Lenis({
      smoothWheel: true,
      syncTouch: true,
      lerp: 0.125,
    });
    this.lenis.stop();
    this.lenis.on('scroll', ScrollTrigger.update);
    this.lenis.on('scroll', this.onWheel);

    this.page.lenis = this.lenis;
  }

  /**
   * Events.
   */
  onPreloaded() {
    this.onResize();

    this.canvas.onPreloaded();

    this.page.show();
  }

  onPopState() {
    this.onChange({
      url: window.location.pathname,
      push: false,
    });
  }

  async onChange({ url, push }) {
    if (url === this.url || this.isLoading) return;

    ScrollTrigger.getAll().forEach((t) => t.kill());

    this.url = url;
    this.isLoading = true;

    this.lenis.stop();
    this.page.lenis = null;

    await Promise.all([
      this.page.hide(),
      this.canvas.onChangeStart(this.template, url),
    ]);

    const request = await window.fetch(url);

    if (request.status === 200) {
      const html = await request.text();
      const div = document.createElement('div');

      div.innerHTML = html;

      if (push) {
        window.history.pushState({}, '', url);
      }

      const divContent = div.querySelector('.content');
      this.template = divContent.getAttribute('data-template');

      this.content.innerHTML = divContent.innerHTML;
      this.content.setAttribute('data-template', this.template);

      this.page = this.pages[this.template];

      this.page.create();

      this.page.lenis = this.lenis;

      await this.preloader.load(this.content);

      this.onResize();

      this.canvas.onLoaded(this.template);

      this.page.show();

      this.addLinkListeners();

      this.isLoading = false;
    } else {
      console.log('error');
    }
  }

  onResize() {
    if (this.responsive && this.responsive.onResize) {
      this.responsive.onResize();
    }

    if (this.page && this.page.onResize) {
      this.page.onResize(this.responsive.size, this.responsive.fontSize);
    }

    if (this.grid && this.grid.onResize) {
      this.grid.onResize();
    }

    window.requestAnimationFrame(() => {
      if (this.canvas && this.canvas.onResize) {
        this.canvas.onResize(this.responsive.size);
      }
    });
  }

  onTouchDown(event) {
    if (this.canvas && this.canvas.onTouchDown) {
      this.canvas.onTouchDown(event);
    }

    if (this.page && this.page.onTouchDown) {
      this.page.onTouchDown(event);
    }
  }

  onTouchMove(event) {
    if (this.canvas && this.canvas.onTouchMove) {
      this.canvas.onTouchMove(event);
    }

    if (this.page && this.page.onTouchMove) {
      this.page.onTouchMove(event);
    }
  }

  onTouchUp(event) {
    if (this.canvas && this.canvas.onTouchUp) {
      this.canvas.onTouchUp(event);
    }

    if (this.page && this.page.onTouchUp) {
      this.page.onTouchUp(event);
    }
  }

  onWheel(event) {
    if (this.canvas && this.canvas.onWheel) {
      this.canvas.onWheel(event);
    }

    if (this.page && this.page.onWheel) {
      this.page.onWheel(event);
    }
  }

  /**
   * Loop.
   */
  update(time) {
    const elapsedTime = this.clock.getElapsedTime();
    const deltaTime = elapsedTime - this.odlElapsedTime;
    this.odlElapsedTime = elapsedTime;

    if (this.stats) {
      this.stats.begin();
    }

    if (this.page && this.page.update) {
      this.page.update(time);
    }

    if (this.canvas && this.canvas.update) {
      this.canvas.update(this.lenis.scroll, deltaTime);
    }

    if (this.stats) {
      this.stats.end();
    }

    ScrollTrigger.update();

    window.requestAnimationFrame(this.update.bind(this));
  }

  /**
   * Listeners.
   */
  addEventsListeners() {
    window.addEventListener('popstate', this.onPopState, { passive: true });
    window.addEventListener('resize', this.onResize, { passive: true });

    window.addEventListener('mousedown', this.onTouchDown, {
      passive: true,
    });
    window.addEventListener('mousemove', this.onTouchMove, {
      passive: true,
    });
    window.addEventListener('mouseup', this.onTouchUp, { passive: true });

    window.addEventListener('touchstart', this.onTouchDown, {
      passive: true,
    });
    window.addEventListener('touchmove', this.onTouchMove, {
      passive: true,
    });
    window.addEventListener('touchend', this.onTouchUp, { passive: true });
  }

  addLinkListeners() {
    const links = document.querySelectorAll('a');

    each(links, (link) => {
      const isLocal = link.href.indexOf(window.location.origin) > -1;
      const isAnchor = link.href.indexOf('#') > -1;

      const isNotEmail = link.href.indexOf('mailto') === -1;
      const isNotPhone = link.href.indexOf('tel') === -1;

      if (isLocal) {
        link.onclick = (event) => {
          event.preventDefault();

          if (!isAnchor) {
            this.onChange({
              url: link.href,
              push: true,
            });
          }
        };
      } else if (isNotEmail && isNotPhone) {
        link.rel = 'noopener';
        link.target = '_blank';
      }
    });
  }
}

const satoshiFont = new FontFaceObserver('Satoshi');

Promise.all([satoshiFont.load()])
  .then(() => new App())
  .catch(() => new App());
