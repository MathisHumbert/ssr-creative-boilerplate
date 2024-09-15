import * as THREE from 'three';

import Home from './Home';
import About from './About';

export default class Canvas {
  constructor({ template, size }) {
    this.template = template;
    this.screen = size;

    this.createScene();
    this.createCamera();
    this.createRender();

    this.onResize(size);
  }

  /**
   * THREE.
   */
  createScene() {
    this.scene = new THREE.Scene();
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.screen.width / this.screen.height,
      0.1,
      100
    );
    this.camera.position.z = 5;
  }

  createRender() {
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    this.renderer.setSize(this.screen.width, this.screen.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    document.body.appendChild(this.renderer.domElement);
  }

  /**
   * Home.
   */
  createHome() {
    this.home = new Home({
      scene: this.scene,
      screen: this.screen,
      viewport: this.viewport,
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
      screen: this.screen,
      viewport: this.viewport,
    });
  }

  destroyAbout() {
    if (!this.about) return;

    this.about.destroy();
    this.about = null;
  }

  /**
   * Events.
   */
  onPreloaded() {
    this.onChangeEnd(this.template);
  }

  onLoaded(template) {
    this.onChangeEnd(template);
  }

  onChangeStart() {
    if (this.home) {
      this.home.hide();
    }

    if (this.about) {
      this.about.hide();
    }
  }

  onChangeEnd(template) {
    if (this.home) {
      this.destroyHome();
    }

    if (this.about) {
      this.destroyAbout();
    }

    if (template === 'home') {
      this.createHome();
    }

    if (template === 'about') {
      this.createAbout();
    }

    this.template = template;
  }

  onResize(size) {
    this.screen = size;

    this.renderer.setSize(this.screen.width, this.screen.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.camera.aspect = this.screen.width / this.screen.height;
    this.camera.updateProjectionMatrix();

    const fov = this.camera.fov * (Math.PI / 180);
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;

    this.viewport = { width, height };

    if (this.home && this.home.onResize) {
      this.home.onResize({ screen: this.screen, viewport: this.viewport });
    }

    if (this.about && this.about.onResize) {
      this.about.onResize({ screen: this.screen, viewport: this.viewport });
    }
  }

  onTouchDown(event) {}

  onTouchMove(event) {}

  onTouchUp() {}

  onWheel(normalized) {}

  /**
   * Loop.
   */
  update(scroll, time) {
    if (this.home && this.home.update) {
      this.home.update(scroll);
    }

    if (this.about && this.about.update) {
      this.about.update(scroll, time);
    }

    this.renderer.render(this.scene, this.camera);
  }
}
