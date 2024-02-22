import Media from '../Media';

export default class About {
  constructor({ scene, geometry, screen, viewport }) {
    this.scene = scene;
    this.geometry = geometry;
    this.screen = screen;
    this.viewport = viewport;

    this.createMedia();

    this.show();
  }

  createMedia() {
    this.media = new Media({
      element: document.querySelector('.about__media'),
      scene: this.scene,
      geometry: this.geometry,
      screen: this.screen,
      viewport: this.viewport,
    });
  }

  /**
   * Animations.
   */
  show() {
    this.media.show();
  }

  hide() {
    this.media.hide();
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
    if (this.media) {
      this.media.mesh.removeFromParent();
    }
  }
}
