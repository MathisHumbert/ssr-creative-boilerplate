import Page from '../../classes/Page';

export default class About extends Page {
  constructor() {
    super({
      id: 'about',
      classes: {},
      element: '.about',
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
