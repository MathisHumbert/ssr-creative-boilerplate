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

const initApi = (req) => {
  return prismic.createClient(process.env.PRISMIC_REPOSITORY, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
    fetch,
  });
};

const fetchDefaults = async (api) => {
  const assets = [];

  const meta = api.getSingle('meta');

  return { meta, assets };
};

const fetchHome = async (api) => {
  const home = await api.getSingle('home');

  return home;
};

const fetchAbout = async (api) => {
  const about = await api.getSingle('about');

  return about;
};

const app = express();

if (!isProduction) {
  app.use(logger('dev'));
  app.use(errorHandler());
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

if (!isProduction) {
  const { createServer } = await import('vite');

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });

  app.use(vite.middlewares);
} else {
  const compression = (await import('compression')).default;
  const sirv = (await import('sirv')).default;

  app.use(compression());
  app.use(base, sirv(path.resolve('dist'), { extensions: [] }));
}

app.set('views', path.resolve('src/views'));
app.set('view engine', 'pug');

app.get('/', async (req, res) => {
  try {
    // const api = initApi(req);

    // const defaults = await fetchDefaults(api);
    // const home = await fetchHome(api);

    res.render('pages/home', {
      title: 'Home',
      link: { text: 'About', url: '/about' },
      isProduction,
    });
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

app.get('/about', async (req, res) => {
  try {
    // const api = initApi(req);

    // const defaults = await fetchDefaults(api);
    // const about = await fetchAbout(api);

    res.render('pages/about', {
      title: 'About',
      link: { text: 'Home', url: '/', isProduction },
      isProduction,
    });
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

app.use((req, res, next) => {
  try {
    res.status(404).send('404 PAGE');
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
