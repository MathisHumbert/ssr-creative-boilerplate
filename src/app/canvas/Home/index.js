import { PlaneGeometry } from 'three';

import Media from './Media';

export default class Home {
  constructor({ scene }) {
    this.scene = scene;

    this.geometry = new PlaneGeometry(1, 1, 16, 16);

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
   * Destroy.
   */
  destroy() {
    if (this.media && this.media.destroy) {
      this.media.destroy();
    }
  }
}
