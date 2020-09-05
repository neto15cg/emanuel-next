const express = require('express');
const cors = require('cors');
const next = require('next');
const LRUCache = require('lru-cache');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });

const handle = app.getRequestHandler();

const ssrCache = new LRUCache({
  maxAge: 1000 * 60 * 60, // 1hour
});

const allowedUrls = ['http://localhost:3000'];

const corsOptions = {
  origin(origin, callback) {
    if (allowedUrls.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const getCacheKey = (req) => `${req.url}`;

async function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);

  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }

  try {
    const html = await app.renderToHTML(req, res, pagePath, queryParams);

    if (dev || res.statusCode !== 200) {
      res.setHeader('x-cache', 'SKIP');
      res.send(html);
      return;
    }

    ssrCache.set(key, html);
    res.setHeader('x-cache', 'MISS');
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}

app.prepare().then(() => {
  const server = express();

  server.get('/home', (req, res) => renderAndCache(req, res, '/', {}));

  // DYNAMIC PAGE
  // server.get('/lp/:slug', (req, res) => {
  //   const queryParams = { slug: req.params.slug };
  //   renderAndCache(req, res, '/lp/builder', queryParams);
  // });

  server.get('/purge', cors(corsOptions), (req, res) => {
    ssrCache.reset();
    return res.status(200).send(new Date());
  });

  server.get('/healthcheck', (req, res) => res.status(200).send(new Date()));

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
