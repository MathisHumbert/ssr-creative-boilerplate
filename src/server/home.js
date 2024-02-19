import { html } from 'lit-html';
import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';

export function renderHome(data) {
  const ssrResult = render(myTemplate(data));
  const result = collectResultSync(ssrResult);

  return result;
}

const myTemplate = (data) =>
  html`
    <div>
      </a>
      <h1>${data.home.title} Page</h1>
      <a href=${data.home.link.url}>${data.home.link.text} Link</a>
    </div>
  `;
