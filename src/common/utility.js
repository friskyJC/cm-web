import nodeFetch from 'node-fetch';
import createFetch from './createFetch';
import config from '../config';
import messages from './messages';
import ServerFetchDataError from '../errors/ServerFetchDataError';
// import constants from './constants';

const fetch = createFetch(nodeFetch, {
  baseUrl: config.api.apiServerUrl,
  salt: config.api.salt,
});

async function fetchData(url, options) {
  const response = await fetch(url, options);
  const httpStatus = response && response.status ? response.status : '';
  // console.log(httpStatus, response);
  if (httpStatus > 300) {
    const err = await response.json();
    throw new ServerFetchDataError(err.requestId, err.code, err.message);
  }
  let result = {};
  if (httpStatus === 200) {
    result = await response.json();
  }
  return result;
}

const buildResponse = (code, message, data) => {
  const result = {
    code,
    message,
    data,
  };
  return result;
};

const buildSuccessRes = data => buildResponse(0, messages.info.I0001, data);
const buildFailedRes = data => buildResponse(1, messages.error.SE0001, data);

const getBrowserVersions = req => {
  const u = req.headers['user-agent'];
  return {
    // trident: u.indexOf('Trident') > -1,
    // presto: u.indexOf('Presto') > -1,
    // webKit: u.indexOf('AppleWebKit') > -1,
    // gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
    // mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/),
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
    wechart: !!u.match(/MicroMessenger/i),
    weibo: !!u.match(/WeiBo/i),
    // iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
    // iPad: u.indexOf('iPad') > -1,
    // webApp: u.indexOf('Safari') == -1
  };
};

// const getDownloadUrl = req => {
//   const version = getBrowserVersions(req);
//   let url = '';

//   if (version.ios) {
//     if (version.weibo) {
//       url = constants.iosWeiboUrl;
//     } else {
//       url = constants.iosUrl;
//     }
//   } else if (version.android && !version.wechart) {
//     url = constants.androidWOWeChartUrl;
//   } else {
//     url = constants.androidWithWeChartUrl;
//   }

//   return url;
// };

export default {
  buildResponse,
  buildSuccessRes,
  buildFailedRes,
  fetch,
  fetchData,
  getBrowserVersions,
  // getDownloadUrl,
};
