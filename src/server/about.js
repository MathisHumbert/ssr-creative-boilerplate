import { html } from 'lit-html';
import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';

export function renderAbout(data) {
  const ssrResult = render(myTemplate(data));
  const result = collectResultSync(ssrResult);

  return result;
}

const myTemplate = (data) =>
  html`
    <div>
      <h1>${data.about.title} Page</h1>
      <a href=${data.about.link.url}>${data.about.link.text} Link</a>
    </div>
  `;
