vec2 zoom(vec2 uv, float amount) {
  return 0.5 + ((uv - 0.5) * (1.0 - amount));
}