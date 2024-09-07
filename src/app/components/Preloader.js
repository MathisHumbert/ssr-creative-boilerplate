import * as THREE from 'three';
import imagesLoaded from 'imagesloaded';
import { Texture } from 'ogl';

import Component from '../classes/Component';

export default class Preloader extends Component {
  constructor({ gl, library }) {
    super({
      element: '.preloader',
    });

    this.gl = gl;
    this.library = library;
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

    let preloadTextures;

    if (this.library === 'three') {
      preloadTextures = Promise.all(
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
    } else {
      preloadTextures = Promise.all(
        [...images, 'texture.jpeg'].map((src) => {
          return new Promise((res) => {
            const texture = new Texture(this.gl, {
              generateMipmaps: false,
            });

            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = src;

            img.onload = () => {
              texture.image = img;
              window.TEXTURES[src] = texture;
              res();
            };
          });
        })
      );
    }

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

      let loadTextures;

      if (this.library === 'three') {
        loadTextures = Promise.all(
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
      } else {
        loadTextures = Promise.all(
          [...images, 'texture.jpeg'].map((src) => {
            return new Promise((res) => {
              const texture = new Texture(this.gl, {
                generateMipmaps: false,
              });

              const img = new Image();
              img.crossOrigin = 'anonymous';
              img.src = src;

              img.onload = () => {
                texture.image = img;
                window.TEXTURES[src] = texture;
                res();
              };
            });
          })
        );
      }

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
