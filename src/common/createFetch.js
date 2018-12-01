/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* @flow */

// import type { graphql as graphqType, GraphQLSchema } from 'graphql';
// import moment from 'moment';
// import md5 from 'md5';

type Fetch = (url: string, options: ?any) => Promise<any>;

type Options = {
  baseUrl: string,
  salt: string,
  method: string,
};

// function generateToken(body: any, salt: string, unix: number) {
//   let token = '';
//   let temp = [];
//   if (body) {
//     const keys = Object.keys(body);
//     keys.forEach(key => {
//       if (
//         typeof body[key] !== 'function' &&
//         key !== 'token' &&
//         key !== 'key' &&
//         key !== 'formData'
//       ) {
//         temp.push({
//           key,
//           value: body[key],
//         });
//       }
//     });
//     temp = temp.sort((a, b) => a.key > b.key);
//   }
//   const originalStrings = [];
//   temp.forEach(item => originalStrings.push(item.value));
//   originalStrings.push(unix);
//   originalStrings.push(salt);
//   token = md5(
//     originalStrings
//       .map(o => (o && typeof o === 'object' ? JSON.stringify(o) : o))
//       .join(''),
//   );
//   return token;
// }
/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */
function createFetch(fetch: Fetch, { baseUrl }: Options) {
  // NOTE: Tweak the default options to suite your application needs
  const defaults = {
    method: 'GET',
    mode: baseUrl ? 'cors' : 'same-origin',
    credentials: baseUrl ? 'include' : 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return async (url: string, options: any) => {
    const isAPI = url.startsWith('/');
    // const unix = moment().unix();
    // const unix = new Date().getTime();
    const fullURL = isAPI ? `${baseUrl}${url}` : url;
    // const body = { ...options.body };
    // if (options.body && salt) {
    //   body.token = generateToken(options.body, salt, unix);
    // }
    // console.info('==================');
    // console.info(fullURL, body);
    return fetch(fullURL, {
      ...defaults,
      method: options.method || 'GET',
      // body: body ? JSON.stringify(body),
      headers: {
        ...defaults.headers,
        ...(options && options.headers),
      },
    });
  };
}

export default createFetch;
