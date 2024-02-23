import fs from 'node:fs/promises';
import express from 'express';
import fetch from 'node-fetch';
import errorHandler from 'errorhandler';
import logger from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import * as prismic from '@prismicio/client';
import path from 'path';
import 'dotenv/config';

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;
const base = process.env.BASE || '/';

const templateHtml = isProduction
  ? await fs.readFile(path.resolve('dist/client/index.html'), 'utf-8')
  : '';
const ssrManifest = isProduction
  ? await fs.readFile(
      path.resolve('dist/client/.vite/ssr-manifest.json'),
      'utf-8'
    )
  : undefined;

const initApi = (req) => {
  return prismic.createClient(process.env.PRISMIC_REPOSITORY, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
    fetch,
  });
};

const fetchDefaults = async (api) => {
  // const meta = await api.getSingle('meta');

  const assets = [];

  return { assets };
};

const fetchHome = async (api) => {
  const home = api.getSingle('home');

  return home;
};

const fetchAbout = async (api) => {
  const about = api.getSingle('about');

  return about;
};

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(errorHandler());

let vite;

if (!isProduction) {
  const { createServer } = await import('vite');

  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });

  app.use(vite.middlewares);
} else {
  const compression = (await import('compression')).default;
  const sirv = (await import('sirv')).default;

  app.use(compression());
  app.use(base, sirv('./dist/client', { extensions: [] }));
}

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');
    const api = initApi(req);

    let template;
    let render;
    let data = {};

    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile(path.resolve('index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule(path.resolve('src/entry-server.js')))
        .render;
    } else {
      if (templateHtml) {
        template = templateHtml;
      } else {
        template = await fs.readFile(path.resolve('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
      }

      render = (await import(path.resolve('dist/server/entry-server.js')))
        .render;
    }

    const defaults = await fetchDefaults(api);
    data = { ...defaults };

    if (url === '') {
      // data.home = await fetchHome(api);
      data.home = { title: 'Home', link: { text: 'About', url: '/about' } };
    }

    if (url === 'about') {
      // data.about = await fetchAbout({});
      data.about = { title: 'About', link: { text: 'Home', url: '/' } };
    }

    const rendered = await render(url, data);

    const html = template
      .replace('<!--app-head-->', rendered.head ?? '')
      .replace('<!--app-html-->', rendered.html ?? '')
      .replace('<!--app-script-->', rendered.script ?? '');

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
