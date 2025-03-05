import AutoBind from 'auto-bind';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { lenis } from './Lenis';
import { each } from '../utils/dom';

export default class Router {
  constructor(app) {
    AutoBind(this);

    this.app = app;
    this.isNavigating = true;
    this.url = window.location.pathname;
    this.lastUrl = window.location.pathname;

    this.addEventListeners();
    this.addLinkListeners();
  }

  onPreloaded() {
    lenis.start();

    this.isNavigating = false;
  }

  async onChange({ url, push }) {
    url = url.replace(window.location.origin, '');

    if (url === this.url || this.isNavigating) return;

    this.url = url;
    this.lastUrl = url;
    this.isNavigating = true;

    lenis.stop();

    const currentTemplate = this.app.template;
    const nextTemplate = this.app.templates[url];

    await Promise.all([
      this.app.page.hide(nextTemplate),
      this.app.canvas.hide(nextTemplate),
    ]);

    ScrollTrigger.getAll().forEach((t) => t.kill());

    const request = await window.fetch(url);

    if (request.status === 200) {
      const html = await request.text();
      const div = document.createElement('div');

      div.innerHTML = html;

      if (push) {
        window.history.pushState({}, '', url);
      }

      const divContent = div.querySelector('.content');
      this.app.template = divContent.getAttribute('data-template');

      this.app.content.innerHTML = divContent.innerHTML;
      this.app.content.setAttribute('data-template', this.app.template);

      this.app.page = this.app.pages[this.app.template];
      this.app.page.create();

      lenis.scrollTo(0, { immediate: true, force: true });

      await this.app.preloader.loadPage(this.app.content);

      await Promise.all([
        this.app.page.show(currentTemplate),
        this.app.canvas.show(this.app.template),
      ]);

      // events.emit('resize');

      lenis.start();

      this.addLinkListeners();

      this.isNavigating = false;
    } else {
      console.error('error', request.status);
      this.isNavigating = false;
      lenis.start();
    }
  }

  onPopState(e) {
    if (this.isNavigating) {
      e.preventDefault();
      window.history.pushState({}, '', this.lastUrl);
      return;
    }
    this.lastUrl = window.location.pathname;

    this.onChange({
      url: window.location.href,
      push: false,
    });
  }

  addLinkListeners() {
    const links = document.querySelectorAll('a');

    each(links, (link) => {
      const isLocal = link.href.indexOf(window.location.origin) > -1;
      const isAnchor = link.href.indexOf('#') > -1;

      const isNotEmail = link.href.indexOf('mailto') === -1;
      const isNotPhone = link.href.indexOf('tel') === -1;

      if (isLocal) {
        link.onclick = (event) => {
          event.preventDefault();

          if (!isAnchor) {
            this.onChange({
              url: link.href,
              push: true,
            });
          }
        };
      } else if (isNotEmail && isNotPhone) {
        link.rel = 'noopener';
        link.target = '_blank';
      }
    });
  }

  addEventListeners() {
    window.addEventListener('popstate', this.onPopState, { passive: true });
  }
}
