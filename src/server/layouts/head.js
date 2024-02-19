import { html } from 'lit-html';
import { render } from '@lit-labs/ssr';
import { collectResultSync } from '@lit-labs/ssr/lib/render-result.js';

export function renderHead(data) {
  const ssrResult = render(myTemplate(data));
  const result = collectResultSync(ssrResult);

  return result;
}

const myTemplate = (data) =>
  html`
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <base href="/" />
    <title>Title</title>
    <meta
      name="description"
      content=${data.meta ? data.meta.description : ''}
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href=${data.meta ? data.meta.icon : ''}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href=${data.meta ? data.meta.icon : ''}
    />
    <link
      rel="mask-icon"
      href="/safari-pinned-tab.svg"
      color=${data.meta ? data.meta.icon : ''}
    />
    <meta
      name="msapplication-TileColor"
      content=${data.meta ? data.meta.color : ''}
    />
    <meta name="theme-color" content=${data.meta ? data.meta.color : ''} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content=${data.meta ? data.meta.title : ''} />
    <meta
      property="og:description"
      content=${data.meta ? data.meta.description : ''}
    />
    <meta property="og:image" content=${data.meta ? data.meta.image : ''} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content=${data.meta ? data.meta.title : ''} />
    <meta
      name="twitter:description"
      content=${data.meta ? data.meta.description : ''}
    />
    <meta name="twitter:image" content=${data.meta ? data.meta.image : ''} />
  `;
