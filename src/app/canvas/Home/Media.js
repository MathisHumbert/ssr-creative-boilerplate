import { Mesh, RawShaderMaterial, Vector2 } from 'three';
import gsap from 'gsap';

import fragment from '../../shaders/fragment.glsl';
import vertex from '../../shaders/vertex.glsl';

import { lenis } from '../../classes/Lenis';
import { responsive } from '../../classes/Responsive';

import { events } from '../../utils/events';

export default class Media {
  constructor({ element, scene, geometry }) {
    this.element = element;
    this.scene = scene;
    this.geometry = geometry;

    this.scroll = lenis.scroll;
    this.isVisible = false;

    this.createMaterial();
    this.createMesh();
    this.addEventsListeners();
  }

  /**
   * Create.
   */
  createMaterial() {
    const texture = window.TEXTURES['texture.jpeg'];

    this.material = new RawShaderMaterial({
      fragmentShader: fragment,
      vertexShader: vertex,
      uniforms: {
        uAlpha: { value: 0 },
        uTexture: { value: texture },
        uResolution: {
          value: new Vector2(),
        },
        uImageResolution: {
          value: new Vector2(texture.image.width, texture.image.height),
        },
      },
      depthTest: false,
      depthWrite: false,
      transparent: true,
    });
  }

  createMesh() {
    this.mesh = new Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    this.createBounds();
  }

  createBounds() {
    const rect = this.element.getBoundingClientRect();

    this.bounds = {
      top: rect.top + this.scroll,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    };

    this.updateScale();
    this.updateX();
    this.updateY(this.scroll);
  }

  /**
   * Update.
   */
  updateScale() {
    this.mesh.scale.x =
      (responsive.viewport.width * this.bounds.width) / responsive.screen.width;
    this.mesh.scale.y =
      (responsive.viewport.height * this.bounds.height) /
      responsive.screen.height;

    this.material.uniforms.uResolution.value.set(
      this.mesh.scale.x,
      this.mesh.scale.y
    );
  }

  updateX(x = 0) {
    this.mesh.position.x =
      -responsive.viewport.width / 2 +
      this.mesh.scale.x / 2 +
      ((this.bounds.left - x) / responsive.screen.width) *
        responsive.viewport.width;
  }

  updateY(y = 0) {
    this.mesh.position.y =
      responsive.viewport.height / 2 -
      this.mesh.scale.y / 2 -
      ((this.bounds.top - y) / responsive.screen.height) *
        responsive.viewport.height;
  }

  /**
   * Animations.
   */
  show() {
    return new Promise((res) => {
      this.isVisible = true;

      gsap.set(this.material.uniforms.uAlpha, { value: 1 });

      res();
    });
  }

  hide() {
    return new Promise((res) => {
      this.isVisible = false;

      gsap.set(this.material.uniforms.uAlpha, {
        value: 0,
      });

      res();
    });
  }

  /**
   * Events.
   */
  onResize() {
    this.createBounds();
  }

  onLenis(event) {
    console.log();
    this.updateY(event.scroll);

    this.scroll = event.scroll;
  }

  /**
   * Listeners.
   */
  addEventsListeners() {
    events.on('resize', this.onResize.bind(this));
    events.on('update', this.update.bind(this));
    events.on('lenis', this.onLenis.bind(this));
  }

  /**
   * Loop.
   */
  update() {}

  /**
   * Destroy.
   */
  destroyGeometry() {
    if (this.geometry) {
      this.geometry.dispose();
    }
  }

  destroyMaterial() {
    if (this.material) {
      this.material.dispose();
    }
  }

  destroyMesh() {
    if (this.mesh) {
      this.scene.remove(this.mesh);
    }
  }

  destroy() {
    this.destroyGeometry();
    this.destroyMaterial();
    this.destroyMesh();
  }
}
