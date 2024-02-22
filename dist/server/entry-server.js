import { html } from "lit-html";
import { render as render$1 } from "@lit-labs/ssr";
import { collectResultSync } from "@lit-labs/ssr/lib/render-result.js";
function renderAbout(data) {
  const ssrResult = render$1(myTemplate$2(data));
  const result = collectResultSync(ssrResult);
  return result;
}
const myTemplate$2 = (data) => html`
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
function renderHome(data) {
  const ssrResult = render$1(myTemplate$1(data));
  const result = collectResultSync(ssrResult);
  return result;
}
const myTemplate$1 = (data) => html`
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
function renderHead(data) {
  const ssrResult = render$1(myTemplate(data));
  const result = collectResultSync(ssrResult);
  return result;
}
const myTemplate = (data) => html`
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <base href="/" />
    <title>Title</title>
    <meta
      name="description"
      content=${data.meta ? data.meta.description : ""}
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href=${data.meta ? data.meta.icon : ""}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href=${data.meta ? data.meta.icon : ""}
    />
    <link
      rel="mask-icon"
      href="/safari-pinned-tab.svg"
      color=${data.meta ? data.meta.icon : ""}
    />
    <meta
      name="msapplication-TileColor"
      content=${data.meta ? data.meta.color : ""}
    />
    <meta name="theme-color" content=${data.meta ? data.meta.color : ""} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content=${data.meta ? data.meta.title : ""} />
    <meta
      property="og:description"
      content=${data.meta ? data.meta.description : ""}
    />
    <meta property="og:image" content=${data.meta ? data.meta.image : ""} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content=${data.meta ? data.meta.title : ""} />
    <meta
      name="twitter:description"
      content=${data.meta ? data.meta.description : ""}
    />
    <meta name="twitter:image" content=${data.meta ? data.meta.image : ""} />
  `;
function render(url, data) {
  let html2 = "";
  if (url === "") {
    html2 = renderHome(data);
  }
  if (url === "about") {
    html2 = renderAbout(data);
  }
  let head = renderHead(data);
  let script = `
  <script>
  ${JSON.stringify(data.assets).replace(/<\//g, "<\\/")}
  <\/script>
  `;
  return { html: html2, head, script };
}
export {
  render
};
