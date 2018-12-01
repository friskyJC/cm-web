/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

if (process.env.BROWSER) {
  throw new Error(
    'Do not import `config.js` from inside the client-side code.',
  );
}

module.exports = {
  // Node.js app
  port: process.env.PORT || 8000,

  // API Gateway
  api: {
    // // API URL to be used in the client-side code
    // clientUrl: 'http://localhost:8000',
    // // API URL to be used in the server-side code
    // serverUrl: 'http://120.27.233.152:10034/alpha',
    // salt: 'sXN5OeLeH8T0Q0F2',
    // API URL to be used in the client-side code
    clientUrl: 'https://h5.bjld888.com',
    // API URL to be used in the server-side code
    serverUrl: 'http://127.0.0.1:8000',
    apiServerUrl: 'https://app.bjld888.com',
    salt: 'sXN5OeLeH8T0Q0F2',
  },
  cdn: '',
  tokenSalt: '6Ah803Xt0cde6V0Af',
};
