import { LinearFilter, TextureLoader } from 'three';
import imagesLoaded from 'imagesloaded';
import FontFaceObserver from 'fontfaceobserver';

import Component from '../classes/Component';

import { map } from '../utils/dom';
import { events } from '../utils/events';

export default class Preloader extends Component {
  constructor() {
    super({
      element: '.preloader',
    });

    this.loadedTextureUrl = [];
    window.TEXTURES = {};

    this.textureLoader = new TextureLoader();
  }

  /**
   * Events.
   */
  preloadPage(content) {
    this.loadedTextureUrl.push(window.location.pathname);

    const images = content.querySelectorAll('data-src');

    const preloadImages = this.loadImages(content);
    const preloadTextures = this.loadTextures([...images, 'texture.jpeg']);
    const preloaderAnimation = this.animatePreloader();
    const preloadFonts = this.loadFonts();

    Promise.all([
      preloadImages,
      preloadTextures,
      preloadFonts,
      preloaderAnimation,
    ]).then(() => {
      if (this.element) {
        this.element.parentNode.removeChild(this.element);
      }

      events.emit('preloaded');
    });
  }

  loadPage(content) {
    const images = content.querySelectorAll('data-src');
    const loadImages = this.loadImages(content);
    
    const shouldLoadTextures = !this.loadedTextureUrl.includes(window.location.pathname);
    
    if (shouldLoadTextures) {
      this.loadedTextureUrl.push(window.location.pathname);
      const loadTextures = this.loadTextures(images);
      return Promise.all([loadImages, loadTextures]);
    }
    
    return loadImages;
  }

  loadImages(content) {
    return new Promise((resolve) => {
      imagesLoaded(content, { background: true }, resolve);
    });
  }

  loadFonts() {
    const satoshiFont = new FontFaceObserver('Satoshi');

    return Promise.all([satoshiFont.load()]);
  }

  loadTextures(images) {
    return Promise.all(
      map(
        images,
        (image) =>
          new Promise((res) => {
            this.textureLoader.load(image, (texture) => {
              texture.generateMipmaps = false;
              texture.minFilter = LinearFilter;
              texture.needsUpdate = true;

              window.TEXTURES[image] = texture;
              res();
            });
          })
      )
    );
  }

  /**
   * Animations.
   */
  animatePreloader() {
    return new Promise(async (res) => {
      res();
    });
  }
}
