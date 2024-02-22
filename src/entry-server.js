import { renderAbout } from './server/pages/about';
import { renderHome } from './server/pages/home';
import { renderHead } from './server/layouts/head';

export function render(url, data) {
  let html = '';

  if (url === '') {
    html = renderHome(data);
  }

  if (url === 'about') {
    html = renderAbout(data);
  }

  let head = renderHead(data);

  let script = `
  <script>
  ${JSON.stringify(data.assets).replace(/<\//g, '<\\/')}
  </script>
  `;

  return { html, head, script };
}
