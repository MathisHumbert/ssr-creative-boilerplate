vec2 getCorrectUv (vec2 resolution, vec2 textureResolution){
  vec2 ratio = vec2(
    min((resolution.x / resolution.y) / (textureResolution.x / textureResolution.y), 1.0),
    min((resolution.y / resolution.x) / (textureResolution.y / textureResolution.x), 1.0)
  );

  return vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
}