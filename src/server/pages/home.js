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
    <div class="content" id="content" data-template="home">
      <div class="home" data-background="#1e1e1e" data-color="#dedede">
        <div class="home__wrapper">
          <div class="home__top">
            <h1>${data.home.title} Page</h1>
            <a href=${data.home.link.url}>${data.home.link.text} Link</a>
          </div>
          <div class="home__bottom">
            <div class="home__media"></div>
          </div>
        </div>
      </div>
    </div>
  `;
