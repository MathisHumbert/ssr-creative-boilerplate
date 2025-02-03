import * as THREE from 'three';

import Media from './Media';

export default class Home {
  constructor({ scene, screen, viewport }) {
    this.scene = scene;
    this.screen = screen;
    this.viewport = viewport;

    this.geometry = new THREE.PlaneGeometry(1, 1, 16, 16);

    this.createMedia();
  }

  createMedia() {
    this.media = new Media({
      element: document.querySelector('.home__media'),
      scene: this.scene,
      geometry: this.geometry,
      screen: this.screen,
      viewport: this.viewport,
    });
  }

  /**
   * Animations.
   */
  show(prevTemplate) {
    let promise;

    if (this.media && this.media.show) {
      promise = this.media.show(prevTemplate);
    }

    return promise;
  }

  hide(nextTemplate) {
    let promise;

    if (this.media && this.media.hide) {
      promise = this.media.hide(nextTemplate);
    }

    return promise;
  }

  /**
   * Events.
   */
  onResize({ screen, viewport }) {
    if (this.media && this.media.onResize) {
      this.media.onResize({ screen, viewport });
    }
  }

  /**
   * Loop.
   */
  update(scroll) {
    if (this.media && this.media.update) {
      this.media.update(scroll);
    }
  }

  /**
   * Destroy.
   */
  destroy() {
    if (this.media && this.media.destroy) {
      this.media.destroy();
    }
  }
}
