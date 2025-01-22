if (window.history.scrollRestoration) {
  window.history.scrollRestoration =
    import.meta.env.VITE_DEV_MODE === 'true' ? 'auto' : 'manual';
}
