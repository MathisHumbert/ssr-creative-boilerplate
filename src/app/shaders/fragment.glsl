precision mediump float;

uniform sampler2D uTexture;
uniform vec2 uResolution;
uniform vec2 uImageResolution;
uniform float uAlpha;

varying vec2 vUv;

#include ./includes/getCorrectUv.glsl

void main(){
  vec2 uv = getCorrectUv(uResolution, uImageResolution);
  vec4 texture = texture2D(uTexture, uv);

  gl_FragColor = vec4(texture.rgb, uAlpha);
}