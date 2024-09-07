import Cube from './Cube';

export default class About {
  constructor({ gl, scene, screen, viewport }) {
    this.gl = gl;
    this.scene = scene;
    this.screen = screen;
    this.viewport = viewport;

    this.createCube();
    this.show();
  }

  createCube() {
    this.cube = new Cube({
      element: document.querySelector('.about__media'),
      gl: this.gl,
      scene: this.scene,
      screen: this.screen,
      viewport: this.viewport,
    });
  }

  /**
   * Animations.
   */
  show() {
    if (this.cube && this.cube.show) {
      this.cube.show();
    }
  }

  hide() {
    if (this.cube && this.cube.hide) {
      this.cube.hide();
    }
  }

  /**
   * Events.
   */
  onResize({ screen, viewport }) {
    if (this.cube && this.cube.onResize) {
      this.cube.onResize({ screen, viewport });
    }
  }

  /**
   * Loop.
   */
  update(scroll, time) {
    if (this.cube && this.cube.update) {
      this.cube.update(scroll, time);
    }
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
