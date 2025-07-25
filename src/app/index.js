import '../styles/index.scss';
import './utils/scroll';
import './classes/WindowEvents';
import './classes/Gsap';

import AutoBind from 'auto-bind';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Stats from 'stats.js';

import Router from './classes/Router';

import Canvas from './canvas';

import Preloader from './components/Preloader';
import Grid from './components/Grid';

import Home from './pages/Home';
import About from './pages/About';

import { events } from './utils/events';

export default class App {
  constructor() {
    AutoBind(this);

    if (import.meta.env.VITE_DEV_MODE === 'true') {
      this.createStats();
      this.createGrid();
    }

    this.init();
  }

  init() {
    this.createPages();
    this.createCanvas();
    this.createRouter();
    this.createPreloader();

    this.addEventsListeners();
  }

  /**
   * Create.
   */
  createPages() {
    this.content = document.querySelector('.content');
    this.template = this.content.getAttribute('data-template');

    this.pages = {
      home: new Home(),
      about: new About(),
    };

    this.templates = {
      '/': 'home',
      '/about': 'about',
    };

    this.page = this.pages[this.template];

    this.page.create();
  }

  createCanvas() {
    this.canvas = new Canvas();
  }

  createRouter() {
    this.router = new Router(this);
  }

  createPreloader() {
    this.preloader = new Preloader();

    this.preloader.preloadPage(this.content);

    events.on('preloaded', () => this.onPreloaded());
  }

  createStats() {
    this.stats = new Stats();

    this.stats.showPanel(0);

    document.body.appendChild(this.stats.dom);
  }

  createGrid() {
    this.grid = new Grid();
  }

  /**
   * Events.
   */
  async onPreloaded() {
    const pageShowPromise = this.page.show(null);
    const canvasShowPromise = this.canvas.show(this.template);

    events.emit('resize');

    await Promise.all([pageShowPromise, canvasShowPromise]);

    this.router.onPreloaded();
  }

  /**
   * Loop.
   */
  update() {
    if (this.stats) {
      this.stats.begin();
    }

    if (this.stats) {
      this.stats.end();
    }

    ScrollTrigger.update();
  }

  /**
   * Listeners.
   */
  addEventsListeners() {
    events.on('update', this.update.bind(this));
  }
}

new App();
