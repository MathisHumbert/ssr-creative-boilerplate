import express from 'express';
import errorHandler from 'errorhandler';
import logger from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import helmet from 'helmet';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import path from 'path';
import 'dotenv/config';

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;
const base = process.env.BASE || '/';

const initApi = () => {
  return createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn: isProduction,
    apiVersion: '2023-05-03',
  });
};

// const client = initApi();
// const builder = imageUrlBuilder(client);

const getImageUrl = (img) => {
  if (img.asset._ref.includes('webp')) {
    return builder.image(img).url();
  } else {
    return builder.image(img).format('webp').url();
  }
};

const fetchHome = async (client) => {
  const home = await client.fetch('*[_type == "home"][0]');

  return home;
};

const app = express();
let vite;

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https:', 'blob:'],
        connectSrc: ["'self'", 'ws:', 'wss:', 'https:'],
        fontSrc: ["'self'", 'data:'],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"],
      },
    },
    crossOriginEmbedderPolicy: false,
  })
);

if (!isProduction) {
  app.use(logger('dev'));
  app.use(errorHandler());
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

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
  app.use(base, sirv(path.resolve('dist'), { extensions: [] }));
}

app.set('views', path.resolve('src/views'));
app.set('view engine', 'pug');

app.get('/', async (req, res) => {
  try {
    // const client = initApi();

    // const home = await fetchHome(client);

    res.render('pages/home', {
      title: 'Home',
      link: { text: 'About', url: '/about' },
      isProduction,
    });
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.error('Error rendering home page:', e);

    if (isProduction) {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(500).end(e.stack);
    }
  }
});

app.get('/about', async (req, res) => {
  try {
    res.render('pages/about', {
      title: 'About',
      link: { text: 'Home', url: '/', isProduction },
      isProduction,
    });
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.error('Error rendering about page:', e);

    if (isProduction) {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(500).end(e.stack);
    }
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
