import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import autoBind from 'auto-bind';

import Home from './Home';
import About from './About';

import { responsive } from '../classes/Responsive';

import { events } from '../utils/events';

export default class Canvas {
  constructor() {
    autoBind(this);

    this.template = null;

    this.createScene();
    this.createCamera();
    this.createRender();

    this.addEventListeners();
  }

  /**
   * THREE.
   */
  createScene() {
    this.scene = new Scene();
  }

  createCamera() {
    this.camera = new PerspectiveCamera(
      45,
      responsive.screen.width / responsive.screen.height,
      0.1,
      100
    );
    this.camera.position.z = 5;

    responsive.setCamera(this.camera);
  }

  createRender() {
    this.renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    this.renderer.setSize(responsive.screen.width, responsive.screen.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    document.body.appendChild(this.renderer.domElement);
  }

  /**
   * Home.
   */
  createHome() {
    this.home = new Home({
      scene: this.scene,
    });
  }

  destroyHome() {
    if (!this.home) return;

    this.home.destroy();
    this.home = null;
  }

  /**
   * About.
   */
  createAbout() {
    this.about = new About({
      scene: this.scene,
    });
  }

  destroyAbout() {
    if (!this.about) return;

    this.about.destroy();
    this.about = null;
  }

  /**
   * Animations.
   */
  hide(nextTemplate) {
    let promise;

    if (this.home) {
      promise = this.home.hide(nextTemplate);
    }

    if (this.about) {
      promise = this.about.hide(nextTemplate);
    }

    return promise;
  }

  show(template) {
    let promise;

    if (this.home) {
      this.destroyHome();
    }

    if (this.about) {
      this.destroyAbout();
    }

    if (template === 'home') {
      this.createHome();

      promise = this.home.show(this.template);
    }

    if (template === 'about') {
      this.createAbout();

      promise = this.about.show(this.template);
    }

    this.template = template;

    return promise;
  }

  /**
   * Events.
   */
  onResize() {
    this.renderer.setSize(responsive.screen.width, responsive.screen.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.camera.aspect = responsive.screen.width / responsive.screen.height;
    this.camera.updateProjectionMatrix();
  }

  onTouchDown(event) {}

  onTouchMove(event) {}

  onTouchUp() {}

  onLenis(event) {}

  /**
   * Listeners.
   */
  addEventListeners() {
    events.on('resize', this.onResize);
    events.on('touchdown', this.onTouchDown);
    events.on('touchmove', this.onTouchMove);
    events.on('touchup', this.onTouchUp);
    events.on('lenis', this.onLenis);
    events.on('end-update', this.update);
  }

  /**
   * Loop.
   */
  update() {
    this.renderer.render(this.scene, this.camera);
  }
}
