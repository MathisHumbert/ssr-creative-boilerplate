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

    const images = content.querySelectorAll('data-src');

    const preloadImages = new Promise((resolve) => {
      imagesLoaded(content, { background: true }, resolve);
    });

    const preloadTextures = Promise.all(
      [...images, 'texture.jpeg'].map(
        (image) =>
          new Promise((resolve) => {
            this.textureLoader.load(image, (texture) => {
              texture.generateMipmaps = false;
              texture.minFilter = THREE.LinearFilter;
              texture.needsUpdate = true;

              window.TEXTURES[image] = texture;
              resolve();
            });
          })
      )
    );

    Promise.all([preloadImages, preloadTextures]).then(() => {
      this.emit('preloaded');
    });
  }

  async load(content) {
    const images = content.querySelectorAll('data-src');

    if (!this.loadedTextureUrl.includes(window.location.pathname)) {
      this.loadedTextureUrl.push(window.location.pathname);

      const loadImages = new Promise((resolve) => {
        imagesLoaded(content, { background: true }, resolve);
      });

      const loadTextures = Promise.all(
        [...images, 'texture.jpeg'].map(
          (image) =>
            new Promise((resolve) => {
              this.textureLoader.load(image, (texture) => {
                texture.generateMipmaps = false;
                texture.minFilter = THREE.LinearFilter;
                texture.needsUpdate = true;

                window.TEXTURES[image] = texture;
                resolve();
              });
            })
        )
      );

      return new Promise((res) => {
        Promise.all([loadImages, loadTextures]).then(() => {
          res();
        });
      });
    } else {
      const loadImages = new Promise((resolve) => {
        imagesLoaded(content, { background: true }, resolve);
      });

      return new Promise((res) => {
        loadImages.then(() => {
          res();
        });
      });
    }
  }
}
