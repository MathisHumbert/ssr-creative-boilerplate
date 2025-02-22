import Cube from './Cube';

export default class About {
  constructor({ scene }) {
    this.scene = scene;

    this.createCube();
  }

  createCube() {
    this.cube = new Cube({
      element: document.querySelector('.about__media'),
      scene: this.scene,
      screen: this.screen,
      viewport: this.viewport,
    });
  }

  /**
   * Animations.
   */
  show(prevTemplate) {
    let promise;

    if (this.cube && this.cube.show) {
      promise = this.cube.show(prevTemplate);
    }

    return promise;
  }

  hide(nextTemplate) {
    let promise;

    if (this.cube && this.cube.hide) {
      promise = this.cube.hide(nextTemplate);
    }

    return promise;
  }

  /**
   * Destroy.
   */
  destroy() {
    if (this.cube && this.cube.destroy) {
      this.cube.destroy();
    }
  }
}
