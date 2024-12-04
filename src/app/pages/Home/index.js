import Page from '../../classes/Page';

export default class Home extends Page {
  constructor({ responsive }) {
    super({
      id: 'home',
      classes: {},
      element: '.home',
      elements: {},
      responsive,
    });
  }

  /**
   * Animations.
   */
  async show() {
    return super.show();
  }

  async hide() {
    return super.hide();
  }
}
