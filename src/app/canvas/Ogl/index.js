import { Renderer, Camera, Transform, Vec2, Post } from 'ogl';

import Home from './Home';
import About from './About';
import postFragment from '../../shaders/post-fragment.glsl';

export default class OglCanvas {
  constructor({ template }) {
    this.template = template;
    this.resolution = new Vec2();

    this.createScene();
    this.createCamera();
    this.createRender();
    this.createPost();

    this.onResize();
  }

  /**
   * THREE.
   */
  createScene() {
    this.scene = new Transform();
  }

  createCamera() {
    this.camera = new Camera(this.gl, {
      fov: 45,
      aspect: window.innerWidth / window.innerHeight,
      near: 0.1,
      far: 100,
    });
    this.camera.position.z = 5;
  }

  createRender() {
    this.renderer = new Renderer({
      alpha: true,

      dpr: Math.min(window.devicePixelRatio, 2),
    });
    this.gl = this.renderer.gl;
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(this.gl.canvas);
  }

  createPost() {
    this.post = new Post(this.gl);
    this.pass = this.post.addPass({
      fragment: postFragment,
      uniforms: {
        uResolution: { value: new Vec2() },
      },
    });
  }

  /**
   * Home.
   */
  createHome() {
    this.home = new Home({
      gl: this.gl,
      scene: this.scene,
      screen: this.screen,
      viewport: this.viewport,
    });
  }

  destroyHome() {
    if (!this.home) return;

    this.home.destroy();
    this.home = null;
  }

  /**
   * About.
   */
  createAbout() {
    this.about = new About({
      gl: this.gl,
      scene: this.scene,
      screen: this.screen,
      viewport: this.viewport,
    });
  }

  destroyAbout() {
    if (!this.about) return;

    this.about.destroy();
    this.about = null;
  }

  /**
   * Events.
   */
  onPreloaded() {
    this.onChangeEnd(this.template);
  }

  onLoaded(template) {
    this.onChangeEnd(template);
  }

  onChangeStart() {
    if (this.home) {
      this.home.hide();
    }

    if (this.about) {
      this.about.hide();
    }
  }

  onChangeEnd(template) {
    if (this.home) {
      this.destroyHome();
    }

    if (this.about) {
      this.destroyAbout();
    }

    if (template === 'home') {
      this.createHome();
    }

    if (template === 'about') {
      this.createAbout();
    }

    this.template = template;
  }

  onResize() {
    this.screen = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    this.renderer.setSize(this.screen.width, this.screen.height);
    this.renderer.dpr = Math.min(window.devicePixelRatio, 2);
    this.camera.perspective({
      aspect: this.screen.width / this.screen.height,
    });

    const fov = this.camera.fov * (Math.PI / 180);
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;

    this.post.resize();
    this.pass.uniforms.uResolution.value.set(
      this.screen.width,
      this.screen.height
    );

    this.viewport = { width, height };

    if (this.home && this.home.onResize) {
      this.home.onResize({ screen: this.screen, viewport: this.viewport });
    }

    if (this.about && this.about.onResize) {
      this.about.onResize({ screen: this.screen, viewport: this.viewport });
    }
  }

  onTouchDown(event) {}

  onTouchMove(event) {}

  onTouchUp() {}

  onWheel(normalized) {}

  /**
   * Loop.
   */
  update(scroll, time) {
    if (this.home && this.home.update) {
      this.home.update(scroll);
    }

    if (this.about && this.about.update) {
      this.about.update(scroll, time);
    }

    // this.renderer.render({ scene: this.scene, camera: this.camera });
    this.post.render({ scene: this.scene, camera: this.camera });
  }
}
