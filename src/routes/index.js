/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',
  // Keep in mind, routes are evaluated in order
  children: [
    // The home route is added to client.js to make sure shared components are
    // added to client.js as well and not repeated in individual each route chunk.
    {
      path: '/',
      load: () => import(/* webpackChunkName: 'home' */ './home/index.js'),
    },
    {
      path: '/course',
      load: () => import(/* webpackChunkName: 'course' */ './course'),
    },
    {
      path: '/course/1',
      load: () => import(/* webpackChunkName: 'course1' */ './course/course1'),
    },
    {
      path: '/course/2',
      load: () => import(/* webpackChunkName: 'course2' */ './course/course2'),
    },
    {
      path: '/course/3',
      load: () => import(/* webpackChunkName: 'course3' */ './course/course3'),
    },
    {
      path: '/course/4',
      load: () => import(/* webpackChunkName: 'course4' */ './course/course4'),
    },
    {
      path: '/course/5',
      load: () => import(/* webpackChunkName: 'course5' */ './course/course5'),
    },
    {
      path: '/course/6',
      load: () => import(/* webpackChunkName: 'course6' */ './course/course6'),
    },
    {
      path: '/course/7',
      load: () => import(/* webpackChunkName: 'course7' */ './course/course7'),
    },
    {
      path: '/course/8',
      load: () => import(/* webpackChunkName: 'course8' */ './course/course8'),
    },
    {
      path: '/course/9',
      load: () => import(/* webpackChunkName: 'course9' */ './course/course9'),
    },
    {
      path: '/course/10',
      load: () =>
        import(/* webpackChunkName: 'course10' */ './course/course10'),
    },
    {
      path: '/payresult',
      load: () => import(/* webpackChunkName: 'pay-result' */ './pay-result'),
    },
    {
      path: '/useragreement',
      load: () =>
        import(/* webpackChunkName: 'user-agreement' */ './user-agreement'),
    },
    {
      path: '/newsdetail',
      load: () => import(/* webpackChunkName: 'news-detail' */ './news-detail'),
    },
    {
      path: '/activity1',
      load: () => import(/* webpackChunkName: 'activity1' */ './activity1'),
    },

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],
  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();
    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'}`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
