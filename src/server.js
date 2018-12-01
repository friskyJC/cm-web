/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import fetch from 'node-fetch';
import React from 'react';
import ReactDOM from 'react-dom/server';
import PrettyError from 'pretty-error';
import App from './components/App';
import Html from './components/Html';
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.less'; // eslint-disable-line
import createFetch from './common/createFetch';
import webRouter from './common/router';
import assets from './assets.json'; // eslint-disable-line import/no-unresolved
import config from './config';
import utility from './common/utility';
import services from './services';
import security from './middleware/security';

const app = express();
const apiRouter = express.Router();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

app.use(helmet());
app.use(helmet.noCache());
app.use(compression());
if (!__DEV__) {
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
}
if (__DEV__) {
  app.use(
    morgan(
      '[:date[iso]] :method :url :status :response-time ms - :res[content-length]',
    ),
  );
}
//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// if (__DEV__) {
//   app.enable('trust proxy');
// }

// 启用cors
app.use(
  require('cors')({
    origin(origin, callback) {
      callback(null, origin);
    },
    credentials: true,
  }),
);

// Register ajax API routers
services.loadRouter(apiRouter);
app.use(apiRouter);
// app.use(async (req, res, next) => {
//   try {
//     services.loadRouter(apiRouter);
//   } catch (e) {
//     console.log('test111');
//     next(e);
//   }
//   return apiRouter;
// });

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', security.allPathChecker, async (req, res, next) => {
  try {
    const css = new Set();

    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {
      // Enables critical path CSS rendering
      // https://github.com/kriasoft/isomorphic-style-loader
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()));
      },
      // insertCss: (...styles) => {
      //   styles.forEach(style => {
      //     // eslint-disable-next-line no-underscore-dangle
      //     let cssStr = style._getCss();
      //     console.info(cssStr);
      //     // const reg = new RegExp('/images/', 'g');
      //     // console.info(config.cdn, reg.test(cssStr));
      //     if (config.cdn) {
      //       cssStr = cssStr.replace(/\/images\//g, `${config.cdn}/images/`);
      //       cssStr = cssStr.replace(/\/fonts\//g, `${config.cdn}/fonts/`);
      //     }
      //     css.add(cssStr);
      //   });
      // },
      // Universal HTTP client
      fetch: createFetch(fetch, {
        baseUrl: config.api.serverUrl,
      }),
      // fetch: utility.fetchData,
    };

    const route = await webRouter.resolve({
      ...context,
      pathname: req.path,
      query: req.query,
      // downloadUrl: utility.getDownloadUrl(req),
      // pageType: utility.getBrowserVersions(req).weibo ? 'weibo' : 'default',
      // isAndroid: utility.getBrowserVersions(req).android, // 用来判断android手机，暂时截图没有底部白屏问题
    });
    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }

    const data = { ...route };
    data.children = ReactDOM.renderToString(
      <App context={context}>{route.component}</App>,
    );
    data.styles = [{ id: 'css', cssText: [...css].join('') }];
    data.scripts = [assets.vendor.js];
    if (route.chunks) {
      data.scripts.push(...route.chunks.map(chunk => assets[chunk].js));
    }
    data.scripts.push(assets.client.js);
    data.app = {
      apiUrl: config.api.clientUrl,
      initState: route.initState,
    };

    // const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    const html = ReactDOM.renderToString(<Html {...data} />);
    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(pe.render(err));
  if (err.name === 'ServerFetchDataError' && req.path.indexOf('/api/') > -1) {
    res.status(err.status || 500);
    res.json(utility.buildFailedRes({ ...err }));
  } else {
    let title = 'Internal Server Error';
    if (err.name === 'ForbiddenError') {
      title = err.message;
    }
    const html = ReactDOM.renderToStaticMarkup(
      <Html
        title={title}
        styles={[{ id: 'css', cssText: errorPageStyle._getCss() }]} // eslint-disable-line no-underscore-dangle
      >
        {ReactDOM.renderToString(
          <ErrorPageWithoutStyle error={err} title={title} />,
        )}
      </Html>,
    );
    res.status(err.status || 500);
    res.send(`<!doctype html>${html}`);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------
if (!module.hot) {
  app.listen(config.port, () => {
    console.info(`The server is running at http://localhost:${config.port}/`);
  });
}

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (module.hot) {
  app.hot = module.hot;
  module.hot.accept('./common/router');
}

export default app;
