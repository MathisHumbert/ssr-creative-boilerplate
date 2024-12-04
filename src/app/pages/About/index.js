import Page from '../../classes/Page';

export default class About extends Page {
  constructor({ responsive }) {
    super({
      id: 'about',
      classes: {},
      element: '.about',
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
