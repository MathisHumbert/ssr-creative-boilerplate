import Media from './Media';

export default class Home {
  constructor({ gl, scene, screen, viewport }) {
    this.gl = gl;
    this.scene = scene;
    this.screen = screen;
    this.viewport = viewport;

    this.createMedia();
    this.show();
  }

  createMedia() {
    this.media = new Media({
      element: document.querySelector('.home__media'),
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
    if (this.media && this.media.show) {
      this.media.show();
    }
  }

  hide() {
    if (this.media && this.media.hide) {
      this.media.hide();
    }
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
