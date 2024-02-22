import * as THREE from 'three';
import imagesLoaded from 'imagesloaded';

import Component from '../classes/Component';

export default class Preloader extends Component {
  constructor() {
    super({
      element: '.preloader',
    });

    this.loadedTextureUrl = [];
    window.TEXTURES = {};

    this.textureLoader = new THREE.TextureLoader();
  }

  preload(content) {
    this.loadedTextureUrl.push(window.location.pathname);

    const images = content.querySelectorAll('img');

    const preloadImages = new Promise((resolve) => {
      imagesLoaded(content, { background: true }, resolve);
    });

    const textureLoader = new THREE.TextureLoader();

    const preloadTextures = Promise.all(
      [...images].map(
        (image) =>
          new Promise((resolve) => {
            textureLoader.load(image, (texture) => {
              window.TEXTURES[image] = texture;
              resolve();
            });
          })
      )
    );

    Promise.all([preloadImages, preloadTextures]).then(() => {
      this.onPreloaded();
    });
  }

  load(content) {
    const images = content.querySelectorAll('img');

    if (!this.loadedTextureUrl.includes(window.location.pathname)) {
      this.loadedTextureUrl.push(window.location.pathname);

      const loadImages = new Promise((resolve) => {
        imagesLoaded(content, { background: true }, resolve);
      });

      const textureLoader = new THREE.TextureLoader();

      const loadTextures = Promise.all(
        [...images].map(
          (image) =>
            new Promise((resolve) => {
              textureLoader.load(image, (texture) => {
                window.TEXTURES[image] = texture;
                resolve();
              });
            })
        )
      );

      Promise.all([loadImages, loadTextures]).then(() => {
        this.onLoaded();
      });
    } else {
      const imgLoaded = imagesLoaded(content);

      imgLoaded.on('done', () => {
        this.onLoaded();
      });
    }
  }

  onPreloaded() {
    this.emit('preloaded');
  }

  onLoaded() {
    this.emit('loaded');
  }
}
