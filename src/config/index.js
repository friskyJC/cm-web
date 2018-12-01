/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */
import shareConfig from './config.share';
import devConfig from './config.dev';
import sitConfig from './config.sit';
import uatConfig from './config.uat';
import prodConfig from './config.prod';
// import config from `./config.${process.env.NODE_ENV}`;

if (process.env.BROWSER) {
  throw new Error(
    'Do not import `config.js` from inside the client-side code.',
  );
}

let config = {};

switch (process.env.NODE_ENV) {
  case 'production':
    config = {
      ...prodConfig,
      ...shareConfig,
    };
    break;
  case 'uat':
    config = {
      ...uatConfig,
      ...shareConfig,
    };
    break;
  case 'sit':
    config = {
      ...sitConfig,
      ...shareConfig,
    };
    break;
  default:
    config = {
      ...devConfig,
      ...shareConfig,
    };
    break;
}

export default {
  ...config,
};
