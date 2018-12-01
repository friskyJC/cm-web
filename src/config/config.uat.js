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
    // API URL to be used in the client-side code
    clientUrl: '',
    // API URL to be used in the server-side code
    serverUrl: 'http://127.0.0.1:8000',
    apiServerUrl: '',
    salt: 'sXN5OeLeH8T0Q0F2',
  },
  cdn: '',
  tokenSalt: '899FDm974FBcF47Df',
};
