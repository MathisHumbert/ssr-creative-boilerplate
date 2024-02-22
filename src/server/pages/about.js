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
    <div class="content" id="content" data-template="about">
      <div class="about" data-background="#dedede" data-color="#1e1e1e">
        <div class="about__wrapper">
          <div class="about__top">
            <h1>${data.about.title} Page</h1>
            <a href=${data.about.link.url}>${data.about.link.text} Link</a>
          </div>
          <div class="about__bottom">
            <div class="about__media"></div>
          </div>
        </div>
      </div>
    </div>
  `;
