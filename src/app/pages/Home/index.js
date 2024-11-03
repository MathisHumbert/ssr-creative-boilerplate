import Page from '../../classes/Page';

export default class Home extends Page {
  constructor() {
    super({
      id: 'home',
      classes: {},
      element: '.home',
      elements: {},
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
